import { useState } from "react"
import TextBox from "./TextBox"
export default function AddChannel(props:any){
    const [toggle, setToggle] = useState(false)
    const [channel, setChannel] = useState("")
    const toggleButton = () => setToggle(!toggle)
    const handleSubmit = (text:any) => {
        setChannel(text)
        console.log("Place 2")
        props.onSubmit(text)
    }
    return (
    <div className="addChannel">
        <button id="toggleButton" onClick={toggleButton}/>
        {toggle ? <TextBox text={channel} onSubmit={(text:any) => handleSubmit(text)}/> : <></>}
    </div>)
}