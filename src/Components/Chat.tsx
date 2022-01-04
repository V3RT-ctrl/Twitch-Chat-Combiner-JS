import { useState, useEffect } from "react"
import AddChannel from "./AddChannel"
import Messages from "./Messages"
import TextBox from "./TextBox"

export default () => {

    let channelArray:string[] = []
    const [channels, setChannels] = useState([])
    useEffect(() =>{
        console.log(channels)
    }, [channels])
    const handleNewChannel = (e:any) =>{
        if (channels.includes(e)) {}
        else {channelArray = [...channelArray, e]}
    }

    useEffect(() =>{
        setChannels(channelArray)
    }, [channelArray])
    return (
        <div className="ChatBox">
            <Messages channels={channels}/>
            <AddChannel onSubmit={(text:any) => handleNewChannel(text)}/>
        </div>
    )
}