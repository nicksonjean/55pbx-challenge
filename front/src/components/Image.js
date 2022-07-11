/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Image(props) {
    const {image} = props
    return (
        <div className='image'>
            <p>{image.fileName}</p>
            <p><img src={process.env.PUBLIC_URL + "processed_images/" + image.fileName} className='image-width'></img></p>
        </div>
    )
}
