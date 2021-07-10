import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const TodoItem = ({ id, content, isChecked, onChange, deleteTask }) => {
  return (
    <div className='todoitems'>
      <input
        type='checkbox'
        defaultChecked={isChecked}
        id={id}
        onChange={() => {
          onChange(id, !isChecked);
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
