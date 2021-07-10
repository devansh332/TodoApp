import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

/**
 * AddNewTask Component handle add new task functionality 
 */
const AddNewTask = ({ addNewTaskFn }) => {
  return (
    <div className='addTask' onClick={addNewTaskFn}>
      <AiFillPlusCircle />
      <span>Add</span>
    </div>
  );
};
export default AddNewTask;
