/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"

export default function SignIn(){ 
    const [url, setURL] = useState(() =>{
        return `https://id.twitch.tv/oauth2/authorize?client_id=ry0z6cydktvvlye0drm02xqwy8tk9i&redirect_uri=${window.location.href}&response_type=token&scope=chat:read+chat:edit+channel:moderate+whispers:read+whispers:edit+channel_editor`
    })
    
    
    return (
        <>
        <h1>NOT LOGGED IN </h1>
        <a href={url}><button id="sign-in-button">Sign In!</button></a>
        </>
    )
}