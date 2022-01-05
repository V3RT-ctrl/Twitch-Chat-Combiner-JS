import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Chat from "./Components/Chat"
import InputUsername from './Components/InputUsername';
import SignIn from './Components/SignIn';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [token, setToken] = useState("")
  const URL = window.location.href
  const [userName, setUserName] = useState("")
  useEffect(() =>{
    if (!URL.includes("access_token")) {}
    else{
      const index1:number = URL.indexOf("#") + 14
      const index2 : number = URL.indexOf("&")
      setToken(() => "oauth:" + URL.substring(index1, index2))
      setIsSignedIn(true);
    }
  }, [])

  useEffect(() => console.log(token), [token])
  // This code is a little mid.
  
  if (!isSignedIn){
    return <SignIn />
  }
/*  else if (!userName) {
    return <InputUsername onSubmit={(e:string) => setUserName(e)}/>
  }*/
  else {
    return (
    <div className='container'>
      <Chat userName={userName} token={token}/>
    </div>
    )
  }
}

export default App;
