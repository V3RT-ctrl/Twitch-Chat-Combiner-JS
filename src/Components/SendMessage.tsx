/* eslint-disable import/no-anonymous-default-export */

import { useState, useEffect } from "react";
import InputUsername from "./InputUsername";
import SelectChannel from "./SelectChannel";
import TextBox from "./TextBox";

const tmi = require("tmi.js");

export default (props:any) => {
    const [channels, setChannels] = useState(props.channels);
    const [message, setMessage] = useState("");
    const [currentChannel, setCurrentChannel] = useState("")

    useEffect(() => {
        setChannels(props.channels)
    }, [props.channels])
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
            <SelectChannel onSubmit={(e:any) => console.log(e)} channels={channels}/>
        </>
    )
}