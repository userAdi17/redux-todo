import React from 'react';
import {useDispatch} from "react-redux";
import {updateTodos} from '../../redux/reducers/todo/todo';

const AddTodo = () => {
    const dispatch=useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(updateTodos(e.target.children[0].value));
        e.target.children[0].value ='';
    };
    return (
        <div className='addTodo'>
            <form onSubmit={submitHandler} className='todo-form'>
                <input required type="text" placeholder='what needs to be done'/>
                <button className='btn btn-outline-success'>Add todo</button>
            </form>
        </div>
    );
};

export default AddTodo;