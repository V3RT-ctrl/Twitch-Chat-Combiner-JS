import { useState, useEffect } from "react";
const tmi = require("tmi.js");
let id = 0

export default (props : any) => {
    const [messages, setMessages] = useState([])
    let tempArray : any = [];
    let client:any;
    useEffect(()=>{
        let client = new tmi.Client({
            channels: ["pigeonapology"]
        }, []);
        client.connect();
        client.on('message', (channel : string, tags: any, message: string, self:any) => {
            // "Alca: Hello, World!"
            let tempID = id;
            id += 1;
            tempArray.push(
                {value: <><b style={{color: "red"}}>{channel}: </b><b style={{color: tags.color}}>{tags["display-name"]}: </b> <p>{message}</p></>,
                key: tempID}
    
            )
            console.log(`${channel}: ${tags["display-name"]}: ${message}`)
            console.log(tags)
            setMessages(tempArray)
            console.log(messages)
        });
    })
    
    return (
        <>
        <ul>
            {messages.map((e:any) => <li key={e.key}>{e.value}</li>)}
        </ul>
        </>
    )
}