import React from 'react'

export default function WelcomeMessage({onGetPostsClick}) {
    return (
        <center className='welcome-message'>
            <h1 >There Are No Post</h1>
            <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Post From Server</button>
        </center>
    )
}
