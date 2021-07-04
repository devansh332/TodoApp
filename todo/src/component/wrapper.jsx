import React from 'react';
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

    return (
        <React.Fragment>
            <h1 id="id_title" class="title">Todo List</h1>
            <TodoList todoCollection={todoCollectionArray} />
            <ProgressFooter />
        </React.Fragment>


    )
}
export default Wrapper;