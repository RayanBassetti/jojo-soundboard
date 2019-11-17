import React from 'react'
// import json from './infos.json'
import SingleAudio from './SingleAudio'
// import Audio from './audio'
import firebaseApp from '../firebase/index'
// import * as audio from '../ressources/audio/jojo/sta_cru'

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            dataSource: [],
            loading: true
        }
    }

    componentDidMount() {
        let pathReference = firebaseApp.storage().ref("star_cru")
        var audioArrayFire = []
        pathReference.listAll()
            .then(function(result) {
                result.items.forEach(function(item, index) {
                    item.getDownloadURL().then(url => {
                        console.log(item, index)
                        audioArrayFire.push(<SingleAudio key={index} src={url} />)
                    })
                })
            })
            .catch(function(error) {
                console.log(error)
            });
        console.log(audioArrayFire)
        audioArrayFire.forEach((item) => {console.log("Oui", item)})
        this.setState({
            dataSource: audioArrayFire
        })
    }

    render() {
        return (
            <div>
            </div>
        )
    
    }
}

export default Main;