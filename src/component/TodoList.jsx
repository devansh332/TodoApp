import React from 'react';
import TodoItem from './TodoItem';

/**
 * TodoList is a stuctural component that maps todoCollection data to todoItem components
 * TodoList set Unique Key for each todo item
 */
const TodoList = ({ todoCollection }) => {
  return (
    <div id='id_todolist' className='todolist'>
      <ul>
        {Object.keys(todoCollection).map((item, index) => {
          return (
            <li key={`${item}_key_${index}`}>
              <TodoItem
                id={item}
                content={todoCollection[item]['task']}
                isChecked={todoCollection[item]['completed']}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
