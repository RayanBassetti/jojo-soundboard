import React from 'react';

export default class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("handleed");
        document.getElementById('test').play();
    }

    render() {
        var {handleClick} = this;
        return(
            <div>
                <button onClick={handleClick}>Salut les kids</button>
                <figure>
                    <figcaption>Jo Jo : Re Ro Re Ro Re Ro</figcaption>
                    <audio id="test" preload="auto" controls >
                            <source src="./rero.mp3" type="audio/mpeg" />
                            Your browser does not support the
                            <code>audio</code> element.
                    </audio>
                </figure>
            </div>
        );
    }
}
