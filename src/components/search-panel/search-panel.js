import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeStatus} from "../../redux/reducers/todo/todo";

const SearchPanel = () => {
    const status = useSelector(s => s.todo.status);
    const dispatch = useDispatch();
    const statusHandler = (e) => {
        dispatch(changeStatus(e.target.value));
    };
    return (
        <div className='search-panel'>
            <input type="text" placeholder='type a todo'/>
            <button className={`${status === 'all' ? 'active' : ''} btn btn-outline-info`} value='all'
                    onClick={statusHandler}>All
            </button>
            <button className={`${status === 'active' ? 'active' : ''} btn btn-outline-info`} value='active'
                    onClick={statusHandler}>Active
            </button>


            <button className={`${status === 'done' ? 'active' : ''} btn btn-outline-info `} value='done' onClick={statusHandler}>Done</button>
            <button className='btn btn-outline-info' value='recently' onClick={statusHandler}>Recently</button>
        </div>
    );
};
export default SearchPanel;