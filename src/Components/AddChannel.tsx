import { useState } from "react"
import TextBox from "./TextBox"
export default function AddChannel(props:any){
    const [toggle, setToggle] = useState(false)
    const [channel, setChannel] = useState("")
    const toggleButton = () => setToggle(!toggle)
    const handleSubmit = (text:any) => {
        props.onSubmit(channel)
    }

    const handleChange = (text:string) => {
        setChannel(text)
    }
    return (
    <div className="addChannel">
        <button id="toggleButton" onClick={toggleButton}/>
        {toggle ? <TextBox text={channel} onChange={(e:any) => handleChange(e)} onSubmit={(text:any) => handleSubmit(text)}/> : <></>}
    </div>)
}