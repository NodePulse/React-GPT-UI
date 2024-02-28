import React from 'react'
import './article.css'

export default function Article(props) {
    return (
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img src={props.imgUrl} alt="blog-img" />
            </div>
            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{props.date}</p>
                    <h3>{props.title}</h3>
                </div>
                <p>Read Full Articles</p>
            </div>
        </div>
    )
}