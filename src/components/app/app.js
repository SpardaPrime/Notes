import React from 'react';

import AppHead from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from'../post -and-form';
import Toggle from '../toggle';
import Reset from '../reset';
import Scroll from '../scroll';



import './app.css';
import styled from 'styled-components';


const AppBlock = styled.div`
margin: 0 auto;
max-width: 800px;
`

export default class extends React.Component{
    constructor(props){
        super(props);
        this.memy=JSON.parse(localStorage.getItem('app'));
        this.state={data:this.memy? this.memy:[
            {label:'Привествую незнакомец',important:false,id:this.genId(),date:this.setDate()},
            {label:'Давай знакомиться, введи своё имя в первое поле, так я буду знать твоё имя',important:false,id:this.genId(),date:this.setDate()},
        ],
        term:'',
        filter:'all'
    };
        
        this.deleteItem=this.deleteItem.bind(this);
        this.addItem=this.addItem.bind(this);
        this.onToggleImportant=this.onToggleImportant.bind(this);
        this.onToggleLiked=this.onToggleLiked.bind(this);
        this.onUpdateSearch=this.onUpdateSearch.bind(this);
        this.onFilterSelect=this.onFilterSelect.bind(this);
        this.base=this.base.bind(this);
        this.maxId = localStorage.getItem('id')? localStorage.getItem('id'):4;
    }

    componentDidUpdate(prevState){
        if(this.state!==prevState){
            this.memory()
        }
    }

    memory(){
        localStorage.setItem('app',JSON.stringify(this.state.data))
    }
    genId(){
        let result = '';
        let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let max_position = words.length - 1;
        let position
            for(let i = 0; i < 5; ++i ) {
                position = Math.floor ( Math.random() * max_position );
                result += words.substring(position, position + 1);
            }
        
            return result;     
    }
    setDate(){
        let date = new Date();
        return{
            d:this.addZero(date.getDate()),
            m:this.addZero(date.getMonth()+1),
            y:date.getFullYear(),
            h:this.addZero(date.getHours()),
            mi:this.addZero(date.getMinutes())
        };
    }
    addZero(num){
        if(num<10){
            return '0'+num;
        }
        return num;
    }
    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)

            const before = data.slice(0,index);
            const after = data.slice(index +1);
            const newArr = [...before,...after];
            return {
                data:newArr
            }
        });
    }

    addItem(body){
        let cont=true;
        this.state.data.forEach(({label})=>{
            if(label===body||body===''){
                cont= false
            }
        });
        if(!cont){return}
        const newItem = {
            label:body,
            important:false,
            id:this.genId(),
            date:this.setDate()
        }
        this.setState(({data})=>{
            const newArray = [...data, newItem];
            return{
                data:newArray
            }
        });
    }

base(important,id){
        this.setState(({data})=>{
            const index = data.findIndex(elem=> elem.id ===id);

            const old =data[index];
            const newItem = {...old,[important]:!old[important]};

            const newArray = [...data.slice(0,index),newItem,...data.slice(index+1)];
            return{
                data: newArray
            }
        });
    }

    onToggleImportant(id){
        this.base('important',id);
    }

    onToggleLiked(id){
        this.base('like',id);
    }

    searchPost(item,term){
        if(term.length===0){
            return item
        }
        if(isFinite(term)){
            let ter=term.split('.')
            return item.filter((item)=>{
                if(item.date.d==ter[0]&&item.date.m==ter[1]){
                    return item
                }
            });
        }
        return item.filter((item)=>{
            console.log(item)
            return item.label.indexOf(term) > -1
        });
    }

   onUpdateSearch(term){
    this.setState({term});
   }

   filterPost(items,filter){
       if(filter=='like'){
           return items.filter(item => item.like)
       }else if(filter=='date'){
            return items.filter(item => item.date.d)
       }else{
           return items
       }
   }
   onFilterSelect(filter){
       this.setState({filter});
   }
 
   render(){
        const {data,term,filter} = this.state;
        const liked = this.state.data.filter(item=>item.like).length;
        const  allPosts = this.state.data.length;
        const visiblePosts = this.filterPost(this.searchPost(data,term), filter);
        
    return (
        <AppBlock>
            <Scroll/>
            <div className="d-flex">
            <Toggle/>
            <Reset/>
            </div>
                <AppHead liked={liked}
                allPosts={allPosts}/>
            <div className="search-panel d-flex">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <PostStatusFilter filter={filter} onFilterSelect ={this.onFilterSelect}/>
            </div>
                <PostList 
                post ={visiblePosts} 
                onDelete={this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleLiked={this.onToggleLiked} />
                <PostAddForm onAdd={this.addItem} label={this.state.data}/>
        </AppBlock>
        )
   }
 
}

