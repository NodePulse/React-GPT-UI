import React from 'react'
import './feature.css'

export default function Feature(props) {
    return (
        <div className='gpt3__features-container__feature'>
            <div className='gpt3__features-container__feature-title'>
                <div></div>
                <h1>{props.title}</h1>
            </div>
            <div className='gpt3__features-container_feature-text'>
                <p>{props.text}</p>
            </div>
        </div>
    )
}