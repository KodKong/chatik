import React, { useState } from 'react'
import socket from "../socket";
import axios from "axios";


function Form() {

   const [roomID, setRoomID] = useState(''); 
   const [userName, setUserName] = useState('');

   const onEnter = () => 
   {
       if(!roomID || !userName)
       {
           return alert("Введены неверные данные"); 
       }
       axios.post('/rooms', {
           roomID, 
           userName
       }); 
   }

    return (
        <div className="join-block">
        <input type="text" placeholder="Room ID" value={roomID} onChange={e => setRoomID(e.target.value)}></input>
        <input type="text" placeholder="Ваше имя" value={userName} onChange={e => setUserName(e.target.value)}></input>
        <button onClick={onEnter}>Войти</button>
        </div>
    )
}

export default Form
