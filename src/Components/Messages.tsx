import { useState, useEffect } from "react";
const tmi = require("tmi.js");
let id = 0
let client:any;
export default (props : any) => {
    const [messages, setMessages] = useState([])
    const [chatClient, setChatClient] = useState();
    const [channels, setChannels] = useState(props.channels);
    useEffect(() =>{
        client = new tmi.Client({
            channels: channels
        });
        client.connect();
        console.log(client)        
        
    }, []

    )

    
    useEffect(()=> {
        setChannels(props.channels)
        client.connect();
        client.on('message', (channel:string, tags:any, message:string, self:any) => {
            console.log(`${tags['display-name']}: ${message}`);
    })
        client.channels = channels
    }, [props.channels])
                        
    return (
        <>
        <ul>
            {messages.map((e:any) => <li key={e.key}>{e.value}</li>)}
        </ul>
        </>
    )
}