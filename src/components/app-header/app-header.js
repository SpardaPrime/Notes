import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const Header = styled.div`
display:flex;
align-items:flex-end;
justify-content:space-between;
h1{
    font-size:26px;
    :hover{
        color:blue;
    }
}
h2{
    font-size:1.2rem;
    color:grey;
}
`

const AppHead = ({liked,allPosts}) =>{

    const [name,setName]=useState(localStorage.getItem('name'));
    
    let val
    const onVal=(e)=>{
        val=e.target.value;
    }
    const onSub=(e)=>{
        e.preventDefault();
        setName(val);
        localStorage.setItem('name',val);
    }
    let d = name;

const greeting = () =>{
    let t = new Date().getHours()
    let z;

   if(t>=5&&t<11){
    z='Доброе утро'
   }else if(t>=11&&t<16){
    z='Добрый день'
   }else if(t>=16&&t<22){
    z='Добрый вечер'
   }else if(t>=22){
    z='Доброй ночи'
   }
   return z;
}
    

    return(
       
        <Header>
            {d? <><h1>{d}</h1><div className="greeting">{greeting()}</div></> : <form className="bottom-panel d-flex" onSubmit={onSub}>
                <input type="text" placeholder="Введите ваше имя"
                className="form-control new-post-label" onChange={onVal}
                value={val}></input>
                <button 
                type="submit"
                className="btn btn-outline-secondary"
                >
                    Назначить Имя</button>
            </form>}
              
    <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHead;