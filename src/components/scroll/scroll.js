import React, { useEffect } from 'react';
import {useState} from 'react';

const Scroll = () =>{
    const [h,setH]=useState();

    window.addEventListener('scroll',()=>{
        if(document.documentElement.scrollTop>500){
            setH(document.documentElement.scrollTop)
        }else{
            setH(0)
        }
    });

    const clickOnTop = () =>{
        document.documentElement.scrollTo(0,0);
    }
    return(
        h>=500?<div onClick={clickOnTop} className="scroll"><img src="https://icons.iconseeker.com/png/fullsize/fresh-addon/arrow-up-2.png"></img></div>:null
        
    )
}
export default Scroll;