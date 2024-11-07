import './App.css';
import { useState } from 'react';
import {io} from 'socket.io-client'
const socket = io("https://server-25w1.onrender.com")
function App() {
  socket.removeAllListeners()
  const [a,seta] = useState(0)
  const [b,setb] = useState(0)
  const [c,setc] = useState(0)
  const [d,setd] = useState(0)
  const [e,sete] =useState("")
  const [f,setf] =useState("")
  const [g,setg] = useState("")
  const sendf = ()=>{
    socket.emit("CheckLogin",{a:a,b:b,c:c,d:d})
  }
  socket.on("CheckLoginS",data=>{
    sete(data)
  })
  socket.on("CheckXs",data=>{
    setg(data)
  })
  socket.on("CheckBets",data=>{
    setf(data)
  })
  return (
    <div className="App">
      <h1>hi bro</h1>
      <h4>{g}</h4>
      <h4>{e}</h4>
      <h4>{f}</h4>
      <input onChange={e=>seta(e.target.value)}></input><br></br>
      <input onChange={e=>setb(e.target.value)}></input><br></br>
      <input onChange={e=>setc(e.target.value)}></input><br></br>
      <input onChange={e=>setd(e.target.value)}></input><br></br>
      <button onClick={sendf}>success</button>
  
    </div>
  );
}

export default App;
