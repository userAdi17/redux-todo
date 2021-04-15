const initialState = {
    todos: [],
    status: 'all'
};
const UPDATE_TODOS = 'UPDATE_TODOS';

export const changeStatus = (value) => {
    return {
        type: 'UPDATE_STATUS', status:value
    }
};

const func = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TODOS:
            return {...state, todos: [...state.todos, action.todo]};
        case 'IS_ACTIVE':
            return {
                ...state, todos: action.todos
            };
        case 'IS_DELETED':
            return {...state, todos: action.todos};
        case 'IS_IMPORTANT':
            return {...state, todos: action.todos};
        case 'UPDATE_STATUS':
        return{...state,status:action.status};
        default:
            return state
    }
};
export default func;
export const updateTodos = (inputValue) => {
    return {
        type: UPDATE_TODOS, todo: {
            id: Math.random() * 1000,
            todoName: inputValue,
            isActive: false,
            isDeleted: false,
            isDone:false,
            isImportant: false,
        }
    }
};
export const activeTodo = (todo) => {
    return {
        type: 'IS_ACTIVE', todos: todo
    }
};
export const deletedTodo = (todo) => {
    return {
        type: 'IS_DELETED', todos: todo
    }
};
export const importantTodo = (todo) => {
    return {
        type: 'IS_IMPORTANT', todos: todo
    }
};



