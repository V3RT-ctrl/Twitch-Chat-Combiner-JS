import Messages from "./Messages"
import TextBox from "./TextBox"

export default () => {
    return (
        <div className="ChatBox">
            <Messages />
            <TextBox onChange={(e : any) => alert(e)}/>
        </div>
    )
}