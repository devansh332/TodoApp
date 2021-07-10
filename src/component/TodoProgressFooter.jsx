import React from 'react';

const TodoProgressFooter = ({ activeTasks, totalNumberOfTasks }) => {
  return (
    <div>
      <span>
        {activeTasks}/{totalNumberOfTasks} task done
      </span>
    </div>
  );
};
export default TodoProgressFooter;
