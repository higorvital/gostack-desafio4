import React from 'react'
import Comment from './Comment'
import {PostDiv} from '../styles/post'

function Post({post}){
    return (
        <PostDiv>
            <div id="user">
                <img src={post.author.avatar}/>
                <div>
                    <h4>{post.author.name}</h4>
                    <span>{post.date}</span>
                </div>
            </div>
            <div id="content">
                <p>{post.content}</p>
            </div>
            <ul>
                {
                    post.comments
                        .map(comment=><Comment key={comment.id} comment={comment}/>)
                }
            </ul>
        </PostDiv>
    )

}

export default Post