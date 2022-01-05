import { useEffect } from "react";
import TwitchStuff from "../TwitchStuff"

export default () =>{ 
    let x;
    useEffect(() => {
        x = new TwitchStuff();
    }, [])
    return (
        <>
        <h1>NOT LOGGED IN </h1>
        </>
    )
}