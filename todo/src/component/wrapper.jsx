import React,{useState,useEffect} from 'react';
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
        },
        3:{
            task:"Meet Rahul for lunch",
            completed:false
        },
        4:{
            task:"Make Plans for himachal trip",
            completed:false
        },
    }
    const getActiveTasks = (taskList)=>{

        return Object.values(taskList).filter(function(s) { return s.completed; }).length
    }
    const getNumberOfTasks = (taskList)=> { 
        return Object.keys(taskList).length
    }
    const [todoCollection, setTodoCollection] = useState(todoCollectionArray)
    const [activeTasks, setActiveTask] = useState(getActiveTasks(todoCollectionArray))
    const [numberOfTasks, setNumberOfTasks] = useState(getNumberOfTasks(todoCollectionArray))

    useEffect(()=>{
        console.log('inside useeffect',todoCollection)
        setActiveTask(getActiveTasks(todoCollection))
        setNumberOfTasks(getNumberOfTasks(todoCollection))
    },[todoCollection])

    const onStatusMarked = (e)=>{
        const currentStatus = !e.target.defaultChecked
        const todoid = parseInt(e.target.id)
        todoCollection[todoid]["completed"] = currentStatus
        setTodoCollection((prevState)=>({...prevState,...todoCollection}))
    }
    const deletetask = (taskId)=>{
        if (window.confirm(`Delete ${todoCollection[taskId]["task"]} ?`)) {
        delete todoCollection[taskId]
        setTodoCollection((prevState)=>({...prevState,...todoCollection}))
        }
    }
    return (
        <React.Fragment>
            <h1 id="id_title" className="title">Todo List</h1>
            <TodoList todoCollection={todoCollection}  onStatusMarked = {onStatusMarked} deletetask={deletetask} />
            <ProgressFooter activeTasks={activeTasks} totalNumberOfTasks={numberOfTasks} />
        </React.Fragment>


    )
}
export default Wrapper;