import React from 'react';


export default class PostListItem extends React.Component{
 
   
   render(){
       const {label,onDelete, onToggleImportant,onToggleLiked,important,like,date} = this.props;
       
    let classNames = 'app-list-item d-flex justify-content-between';
    if(like){
classNames+=' like';
    }

    if(important){
        classNames +=' important';
    }
       return(
    <>
        <div className=" dat1 date">{`${date.d}.${date.m}.${date.y}`}</div>
        <div className=" dat2 date">{`${date.h} : ${date.mi}`}</div>
        <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center alighn-item-center">
                <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button button="button"  className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    </>
       )
   }
}



