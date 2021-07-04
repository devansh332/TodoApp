import React,{useState} from 'react';
import TodoList from './todoList';
import ProgressFooter from './todoProgressFooter';


const  Wrapper = () => {
    const todoCollectionArray = {
        1:{
            task:"Wake up at 5 AM",
            completed:false
        },
        2:{
            task:"Do Workout for 30 mins",
            completed:false
        }
    }
    const [todoCollection, setTodoCollection] = useState(todoCollectionArray)
    const onStatusMarked = (e)=>{
        const currentStatus = !e.target.defaultChecked
        const todoid = parseInt(e.target.id)
        console.log(currentStatus,todoid,todoCollection[todoid]["completed"])
        todoCollection[todoid]["completed"] = currentStatus
        console.log(todoCollection[todoid]["completed"])

        setTodoCollection((prevState)=>({...prevState,...todoCollection}))
        console.log("onStatus",todoCollection)
    }
    const deletetask = (taskId)=>{
        if (window.confirm(`Delete ${todoCollection[taskId]["task"]} ?`)) {
        delete todoCollection[taskId]
        setTodoCollection((prevState)=>({...prevState,...todoCollection}))
        }
    }
    return (
        <React.Fragment>
            <h1 id="id_title" class="title">Todo List</h1>
            <TodoList todoCollection={todoCollection}  onStatusMarked = {onStatusMarked} deletetask={deletetask} />
            <ProgressFooter />
        </React.Fragment>


    )
}
export default Wrapper;