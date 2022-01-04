import { channel } from "diagnostics_channel"
import { useState, useEffect } from "react"
import AddChannel from "./AddChannel"
import Messages from "./Messages"
import TextBox from "./TextBox"

export default () => {

    let channelArray:string[] = []
    const [channels, setChannels] = useState([])
        const handleNewChannel = (e:any) =>{
        if (channels.includes(e)) {}
        else {setChannels([...channels, e])}
    }

    return (
        <div className="ChatBox">
            <Messages channels={channels}/>
            <AddChannel onSubmit={(text:any) => handleNewChannel(text)}/>
        </div>
    )
}