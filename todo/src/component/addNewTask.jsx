import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";

 const AddNewTask = ({addNewTaskFn})=> {
    return (
        <React.Fragment>
            <div className="addTask" onClick={addNewTaskFn}><AiFillPlusCircle/><span>Add Task</span></div>
        </React.Fragment>
    )
}
export default AddNewTask;