import React from 'react'

function Comment({comment}){
    return (
        <div id="comment">
            <img src={comment.author.avatar}/>
            <p>
                <span>{comment.author.name}</span> {comment.content}
            </p>
        </div>
    )
}

export default Comment