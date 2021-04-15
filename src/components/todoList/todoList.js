
import React from 'react';
import {useSelector} from "react-redux";
import Todo from '../todo';


const TodoList = () => {
    const status = useSelector(s => s.todo.status);
    const todo = useSelector(s => s.todo.todos);
    return (
        <ul>
            {todo.filter((todo) => {
                switch (status) {
                    case 'active': {
                        return !todo.isActive
                    }
                    case 'done': {
                        return  !todo.isDone
                    }
                    case 'recently': {
                        return todo.isDeleted && !todo.isActive
                    }
                    default: {
                        return todo && !todo.isDone
                    }
                }
            }).map((todoObj) => (
                <Todo todoObj={todoObj} />
            ))}
        </ul>
    );
};
export default TodoList;