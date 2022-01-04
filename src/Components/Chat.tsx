import { channel } from "diagnostics_channel"
import { useState, useEffect } from "react"
import AddChannel from "./AddChannel"
import Messages from "./Messages"
import TextBox from "./TextBox"

export default () => {

    let channelArray:string[] = []
    const [channels, setChannels] = useState([])
    const [currentChannel, setCurrentChannel] = useState("")
    useEffect(() =>{
        console.log(channels)
    }, [channels])
    const handleNewChannel = (e:any) =>{
        if (channels.includes(e)) {}
        else {setChannels([...channels, e])}
    }

    const handleChannelChange = (e:string) => {
        setCurrentChannel(e)
    }

    useEffect(() => console.log(channels), [channels])
    return (
        <div className="ChatBox">
            <Messages channels={channels}/>
            <AddChannel onSubmit={(text:any) => handleNewChannel(text)} onChange={(e: any) => handleChannelChange(e)}/>
        </div>
    )
}