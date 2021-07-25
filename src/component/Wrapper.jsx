import React, { useState, useEffect, useMemo } from 'react';
import TodoList from './TodoList';
import ProgressFooter from './TodoProgressFooter';
import AddNewTask from './AddNewTask';
import AppTitle from './AppTitle';
export const DeleteContext = React.createContext();
export const OnStatusMarkedContext = React.createContext();
const todoCollectionObject = {
  1: {
    task: 'Wake up at 5 AM',
    completed: false,
  },
  2: {
    task: 'Do Workout for 30 mins',
    completed: false,
  },
  3: {
    task: 'Meet Rahul for lunch',
    completed: false,
  },
  4: {
    task: 'Make Plans for himachal trip',
    completed: false,
  },
  5: {
    task: 'Make new Plans for himachal trip',
    completed: false,
  },
};

const Wrapper = () => {
  // savedTodoCollection collects data from localStorage if present
  const savedTodoCollection = JSON.parse(
    localStorage.getItem('todoCollection')
  );
  // todoCollection is  state that maintains todo data for user
  const [todoCollection, setTodoCollection] = useState(
    savedTodoCollection || todoCollectionObject
  );
  // activeTasks cache number of completed tasks from todoCollection State
  const activeTasks = useMemo(() => {
    return Object.values(todoCollection).filter(function (s) {
      return s.completed;
    }).length;
  }, [todoCollection]);

  /*  useEffect will work as componentdidUpdate for todoCollection State and 
    stores used action to local storage on each state update */
  useEffect(() => {
    localStorage.setItem('todoCollection', JSON.stringify(todoCollection));
  }, [todoCollection]);

  /* onStatusMarked track taskId and its current check method,Checked parameter 
  will be opposite to current checked state as passed by child component todoItem */
  const onStatusMarked = (taskId, checked) => {
    /* updateCollection  holds latest data from todoCollection state and 
    set todoCollection on user interaction with todoItem */
    const currentStatus = checked;
    const todoid = parseInt(taskId);
    const updatedCollection = todoCollection;
    updatedCollection[todoid]['completed'] = currentStatus;
    setTodoCollection((prevState) => ({
      ...prevState,
      ...updatedCollection,
    }));
  };

  /* deleteTask is responsible for filtering task from the collections 
  and set updated collection to todoCollection State */
  const deleteTask = (taskId) => {
    if (window.confirm(`Delete ${todoCollection[taskId]['task']} ?`)) {
      const updatedCollection = Object.keys(todoCollection)
        .filter((key) => key !== taskId)
        .reduce((obj, key) => {
          obj[key] = todoCollection[key];
          return obj;
        }, {});

      setTodoCollection((prevState) => ({
        ...updatedCollection,
      }));
    }
  };

  /* addNewTaskFn Prompt user to add new task which will be added to todoCollection */
  const addNewTaskFn = () => {
    let newTask = prompt('Please add new task:');
    if (newTask != null && newTask.match(/.*\S+.*/i)) {
      let lastId = parseInt(Object.keys(todoCollection).slice(-1)[0]);
      let newTaskItem = {
        task: newTask,
        completed: false,
      };
      const updatedCollection = todoCollection;
      updatedCollection[lastId + 1] = newTaskItem;
      setTodoCollection((prevState) => ({
        ...prevState,
        ...updatedCollection,
      }));
    }
  };
  /* Wrapper component acts as a main Container component that propoagate states to 
  structural components: Title todoList, ProgessFooter */

  return (
    <div className='mainDiv'>
      <AppTitle />
      <AddNewTask addNewTaskFn={addNewTaskFn} />
      <OnStatusMarkedContext.Provider value={onStatusMarked}>
        <DeleteContext.Provider value={deleteTask}>
          <TodoList todoCollection={todoCollection} />
        </DeleteContext.Provider>
      </OnStatusMarkedContext.Provider>
      <ProgressFooter
        activeTasks={activeTasks}
        totalNumberOfTasks={Object.keys(todoCollection).length}
      />
    </div>
  );
};
export default Wrapper;
