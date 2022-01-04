import { useState, useEffect, useRef } from "react";
const tmi = require("tmi.js");
let id = 0
let client:any;
export default (props : any) => {
    const [messages, setMessages] = useState([])    
    const cache = useRef()
    
    useEffect(() =>{
        client = new tmi.Client({
            channels: props.channels
        });
        client.connect();        
        client.on('message', (channel:string, tags:any, message:string, self:any) => {
            if (tags.id == cache.current) {

            }
            else{
            cache.current = tags.id;
                const tempID = id + 1;
            id++;
            const myObject = {
                channel: channel,
                "display-name": tags["display-name"],
                color: tags.color,
                message: message,
                id: tempID
                }

            setMessages(messages => [...messages, myObject])}
            }
        )
    }, []

    )
    
    useEffect(()=> {
        client.channels = props.channels
        client.connect().catch("err")
    }, [props.channels])
                        
    return (
        <div className="message">
            <ul>
                {messages.map((message) => <li key={message.id}><span style={{color: "red", fontWeight: "bolder"}}>{message.channel}: </span><span style={{color: message.color, fontWeight: "bold"}}>{message["display-name"]}: </span><span style={{color: "white"}}>{message.message}</span></li>)}
            </ul>
        </div>
    )
}
