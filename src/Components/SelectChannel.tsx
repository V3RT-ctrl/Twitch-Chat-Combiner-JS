import { useRef, useState } from "react";
/* eslint-disable import/no-anonymous-default-export */
export default (props:any) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        props.onSubmit(e.target.value)

    } 

    const handleClick = (e:any) => {
        const myValue:any = e as HTMLTextAreaElement;
        setValue(myValue.target.value)
        //console.log(myValue.target.value)
    }

    return (
        <form className="channel-select" onSubmit={(e:any) => handleSubmit(e)}>
            {props.channels.map((channel:string, index:number) =>
            <div className="channel-list" key={index}>
                <input name="channel" type="radio" value={channel} onClick={(e) => handleClick(e)}></input>
                <label>{channel}</label>
            </div>)}
            <input type="submit" name="channel" className="submit-button" value={"Choose Channel"}/>
        </form>
    )
}