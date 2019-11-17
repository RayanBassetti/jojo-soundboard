import React from 'react'

function SingleAudio(props) {
    return(
        <figure>
            <figcaption>Test</figcaption>
            <audio src={props.src} controls controlsList="nodownload" />
        </figure>
    )
}

export default SingleAudio