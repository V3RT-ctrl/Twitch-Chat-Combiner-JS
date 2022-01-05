import { useState } from "react";
import TextBox from "./TextBox";

const tmi = require("tmi.js");

export default (props:any) => {
    const [channels, setChannels] = useState([]);
    const [message, setMessage] = useState("");
    const [currentChannel, setCurrentChannel] = useState("")

    const handleSubmit = (text:string) => {
        const client = new tmi.Client({
            options: { debug: true },
            identity: {
                username: props.userName,
                password: props.token
            },
            channels: [ currentChannel ]
        })
        
        client.connect()
        client.addListener('join', () => {
            client.say(currentChannel, message)
        }
        )

        setTimeout(() => client.disconnect(), 1000)
    }

    return (
        <>
            <TextBox text={message} onChange={(e:any) => setMessage(e)} onSubmit={(text:string) => handleSubmit(text)}/>
        </>
    )
}