import React from 'react';
import store from '../../redux';
import {Provider} from 'react-redux';
import SearchPanel from "../search-panel";
import AddTodo from "../add-todo";
import TodoList from '../todoList'


const App = () => {
    return (
        <div className='app'>
          <div className='sub_app'>
              <Provider store={store}>
                  <SearchPanel/>
                  <AddTodo/>
                  <TodoList/>
              </Provider>
          </div>
        </div>
    );
};

export default App;