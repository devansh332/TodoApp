import React from 'react'
import TodoItem from './todoItem'


const TodoList = ({todoCollection})=> {
    return (
        <React.Fragment>
            <div id="id_todolist" class="todolist">
                <ul>
            {
                Object.keys(todoCollection).map((item,index)=>{
                    return(
                        <li>
                            <TodoItem 
                            id = {item} 
                            content={todoCollection[item]['task']} 
                            />
                        </li>

                    )
                })
            }
            </ul>
            </div>
           
        </React.Fragment>
    )
}

export default TodoList