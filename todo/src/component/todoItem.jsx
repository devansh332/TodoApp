import React from 'react';

const TodoItem = ({id,content,isChecked,onChange,deletetask}) => {
    return (
        <React.Fragment>
        <div class="todoitems">
            <input type= "checkbox" defaultChecked = {isChecked} id={id} onChange={onChange}/> 
            <label htmlFor={id}>{content}</label>
            <button class="btn" onClick ={()=>deletetask(id)} >Delete</button>
        </div>
        </React.Fragment>
    )
}
export default TodoItem