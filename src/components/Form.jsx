import React from 'react'
import socket from "../socket";


function Form() {
    return (
        <div className="join-block">
        <input type="text" placeholder="Room ID"></input>
        <input type="text" placeholder="Ваше имя"></input>
        <button>Войти</button>
        </div>
    )
}

export default Form
