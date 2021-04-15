import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {deletedTodo, activeTodo, importantTodo} from '../../redux/reducers/todo/todo';

const Todo = ({todoObj}) => {
    const status=useSelector(s=>s.todo.status);
    const dispatch = useDispatch();
    const todo = useSelector(
        s => s.todo.todos);
    const activeHandler = () => {
        dispatch(activeTodo(todo.map((el) => el.id === todoObj.id ? ({...el, isActive: !todoObj.isActive}) : el)
        ))
    };
    const deleteHandler = () => {
        dispatch(deletedTodo
        (todo.map((el) => el.id === todoObj.id ?
            ({...el, isDeleted: !todoObj.isDeleted}) : el)))
    };
    const importantHandler = () => {
        dispatch(importantTodo
        (todo.map((el) => el.id === todoObj.id ?
            ({...el, isImportant: !todoObj.isImportant}) : el)))
    };
    return (
        <li className=
                {`list-group-item
                 justify-content-between 
                 align-items-center todo-name 
                d-flex
                 `}>
            <span className={`${todoObj.isDone && todo`oObj.isDeleted? '': 'active_todo'} ${todoObj.isImportant === false ? '': 'important_todo'}  
`}>{todoObj.todoName}</span>
            <div>
                <button onClick={activeHandler} className='btn btn-outline-success'>
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={importantHandler} onChange={importantHandler?'important_todo':''}
                        className={`btn-outline-warning starBtn ${todoObj.isImportant === false ? '' : 'active'} `}>
                    <i className="fas fa-star"></i>
                </button>
                {status==='recently' ? <button>restore</button>:
                    <button onClick={deleteHandler} className='btn-outline-danger'><i className="fas fa-trash"></i></button>
                }
            </div>
        </li>
    );
};

export default Todo;