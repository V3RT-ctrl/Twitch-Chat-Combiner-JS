import { useState } from "react"
export default (props : any) => {
    const [text, setText] = useState("")
    let message = ""
    const handleSubmit = (e : any) => {
        e.preventDefault();
        props.onChange(text)
        setText("")
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
                console.log(text)
            }} />
        <input
            type = "submit"
            value = ""
            >    
            </input>
        </form>
        </>
    )
}