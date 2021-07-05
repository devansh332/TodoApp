import React from 'react'
import TodoItem from './todoItem'


const TodoList = ({todoCollection,onStatusMarked,deletetask})=> {
    return (
        <React.Fragment>
            <div id="id_todolist" className="todolist">
                <ul>
            {
                Object.keys(todoCollection).map((item,index)=>{
                    return(
                        <li key={`${item}_key_${index}`}>
                            <TodoItem 
                            id = {item} 
                            content={todoCollection[item]['task']} 
                            isChecked={todoCollection[item]["completed"]}
                            onChange = {onStatusMarked}
                            deletetask={deletetask}
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