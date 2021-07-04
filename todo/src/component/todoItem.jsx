import React from 'react';

const TodoItem = ({id,content}) => {
    return (
        <React.Fragment>
        <div class="todoitems">
            <input type= "checkbox" id={id}/> 
            <label htmlFor={id}>{content}</label>
            <button class="btn" >Delete</button>
        </div>
        </React.Fragment>
    )
}
export default TodoItem