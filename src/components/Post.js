import React from 'react'
import Comment from './Comment'

function Post({post}){
    return (
        <div id="post">
            <div>
                <img src={post.author.avatar}/>
                <h4>{post.author.name}</h4>
                <span>{post.date}</span>
            </div>
            <p>{post.content}</p>
            <ul>
                <li>{
                    post.comments
                        .map(comment=><Comment key={comment.id} comment={comment}/>)
                    }
                </li>
            </ul>
        </div>
    )

}

export default Post