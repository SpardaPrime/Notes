import React from 'react';
import {useState} from 'react';
const Toggle =()=>{
    const[on,setOn]=useState('toggleDivBlack')
   
    const click=()=>{
        document.body.classList.toggle('dark');
        setOn( on ==='toggleDivBlack' ? 'toggleDivWhite':'toggleDivBlack')
    }

    return(
        <>
        <button className="toggleDivBlack" onClick={click}><img src="https://static.thenounproject.com/png/607586-200.png"></img></button><span className="toggle">{on==='toggleDivBlack'? 'Ночная тема':'Дневная тема'}</span>
        </>
    )
}

export default Toggle;