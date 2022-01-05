import { useState } from "react"
import TextBox from "./TextBox"

export default (props:any) => {
    const [username, setUsername] = useState("")
    const handleChange = (e: string) => {
        setUsername(e)
    }

    
    return <>
    <h1>Please put in your username (I'm not the best coder, sorry for the inconviencence).</h1>
    <TextBox TextValue="Enter your twitch username" onChange={(e:string) => handleChange(e)} onSubmit={() => props.onSubmit(username)}/>
    </>
}