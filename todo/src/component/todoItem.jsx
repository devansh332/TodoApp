import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";

const TodoItem = ({id,content,isChecked,onChange,deletetask}) => {
    return (
        <React.Fragment>
        <div className="todoitems">
            <input type= "checkbox" defaultChecked = {isChecked} id={id} onChange={onChange}/> 
            <label htmlFor={id}>{content}</label>
            <button className="btn" onClick ={()=>deletetask(id)}><AiOutlineDelete/></button>
        </div>
        </React.Fragment>
    )
}
export default TodoItem