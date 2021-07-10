import React from "react";

/**
 * TodoProgressFooter is a stuctural component that updated on state change of todo collection
 * ActiveTasks is calculate number of task that are marked as completed by user
 * totalNumberOfTasks provide information about total number of task present in user's todo list 
 */
const TodoProgressFooter = ({ activeTasks, totalNumberOfTasks }) => {
  return (
    <span>
      {activeTasks}/{totalNumberOfTasks} Task done
    </span>
  );
};
export default TodoProgressFooter;
