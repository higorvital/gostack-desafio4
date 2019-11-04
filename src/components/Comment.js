import React from 'react'
import {CommentDiv} from '../styles/comment' 

function Comment({comment}){
    return (
        <CommentDiv>
            <img src={comment.author.avatar}/>
            <div>
                <p>
                    <span>{comment.author.name}</span> {comment.content}
                </p>
            </div>
        </CommentDiv>
    )
}

export default Comment