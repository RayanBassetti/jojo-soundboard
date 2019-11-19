import React from 'react'

function SingleAudio(props) {
    return(
        <figure>
            <figcaption>{props.name}</figcaption>
            <audio src={props.src} controls controlsList="nodownload" />
        </figure>
    )
}

export default SingleAudio