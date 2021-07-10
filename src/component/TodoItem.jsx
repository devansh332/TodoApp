import React, { useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { DeleteContext, OnStatusMarkedContext } from './Wrapper';

/**
 * TodoItem is atomic Component that consumes DeleteContext and OnStatusMarkedContext from wrapper components 
 * TodoItems have following functionality 
      * Mark Task Status as Completed 
      * Delete Task from the list 
 */
const TodoItem = ({ id, content, isChecked }) => {
  const deleteTask = useContext(DeleteContext);
  const onStatusMarked = useContext(OnStatusMarkedContext);
  return (
    <div className='todoitems'>
      <input
        type='checkbox'
        defaultChecked={isChecked}
        id={id}
        onChange={() => {
          onStatusMarked(id, !isChecked);
        }}
      />
      <label htmlFor={id}>{content}</label>
      <button className='btn' onClick={() => deleteTask(id)}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};
export default TodoItem;
