import { channel } from "diagnostics_channel"
import { useState, useEffect } from "react"
import AddChannel from "./AddChannel"
import Messages from "./Messages"
import SendMessage from "./SendMessage"
import TextBox from "./TextBox"

export default (props:any) => {

    let channelArray:string[] = []
    const [channels, setChannels] = useState([])
        const handleNewChannel = (e:any) =>{
        if (channels.includes(e)) {}
        else {setChannels([...channels, e])}
    }

    return (
        <>
        <div className="ChatBox">
            <Messages channels={channels}/>
            <SendMessage token={props.token} userName={props.userName} channels={channels}/>
        </div>
        <AddChannel onSubmit={(text:any) => handleNewChannel(text)}/>
        </>
    )
}