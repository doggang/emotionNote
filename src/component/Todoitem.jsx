import { useState } from 'react';
import './Todoitem.css';

const Todoitem = ({onUpdate, onDelete, id, isDone, content, date})=>{

    const checkChange = ()=>{
        onUpdate(id);
    }
  
    const delBtn = ()=>{
        onDelete(id);
    }

    return(
        <div className="todoitem">
            <input onChange={checkChange} checked={isDone} type="checkbox"></input>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={delBtn}>삭제</button>
        </div>
    )
}

export default Todoitem;