import React from 'react'
import SingleAudio from './SingleAudio'
import firebaseApp from '../firebase/index'
// import * as audio from '../ressources/audio/jojo/sta_cru'

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            dataSource: null,
            loaded: false
        }
    }

    componentDidMount() {
        let pathReference = firebaseApp.storage().ref("star_cru") // firebase path to get all the files
        const audioArrayFire = [];
        pathReference.listAll().then((result) => { //list all the files
            result.items.forEach((item, index) => { // for each file
                console.log(item.name)
                item.getDownloadURL().then(url => { // get the download link...
                    const audio = <SingleAudio 
                                    name={item.name} 
                                    key={index} 
                                    src={url} 
                                /> // ... and put it in the SingleAudio Component
                    audioArrayFire.push(audio) 
                    this.setState({
                        dataSource: audioArrayFire
                    })
                })
            })
        }).catch(function(error) {
                console.log(error)
        });
    }

    render() {
        return <div>
            {this.state.dataSource}
        </div>
    }
}

export default Main;