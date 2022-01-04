import { useState } from "react"
export default (props : any) => {
    const [text, setText] = useState("")
    let message = ""
    const handleSubmit = (e : any) => {
        e.preventDefault();
        props.onSubmit(text)
        console.log(text)
        //console.log(text)
        setText("")
        //console.log("Here we are! ")
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input
            type = "text"
            value = {text}
            onChange={e => {
                let message = (e.target.value)
                setText(message)
                props.onChange(message)
                //console.log(text)
            }} />
        <input
            type = "submit"
            value = {props.TextValue ? props.TextValue : ""}
            >    
            </input>
        </form>
        </>
    )
}