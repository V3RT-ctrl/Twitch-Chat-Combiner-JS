import { useState } from "react"
import TextBox from "./TextBox"
export default function AddChannel(props:any){
    const [toggle, setToggle] = useState(false)
    const [channel, setChannel] = useState("")
    const toggleButton = () => setToggle(!toggle)
    const handleSubmit = (text:any) => {
        props.onSubmit(channel)
        toggleButton()
    }

    const handleChange = (text:string) => {
        setChannel(text)
    }
    return (
    <div className="addChannel">
        <button id="toggleButton" value="Test" onClick={toggleButton}>Click to add a channel!</button>
        {toggle ? <TextBox TextValue="Submit" text={channel} onChange={(e:any) => handleChange(e)} onSubmit={(text:any) => handleSubmit(text)}/> : <></>}
    </div>)
}