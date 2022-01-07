import React, { useReducer, createContext } from 'react';
import Filter from './Filter';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import initialTodos from './../InitialTodos';
import filterReducer from './../reducers/FilterReducer'
import todoReducer from './../reducers/TodoReducer'

export const TodoContext = createContext(null);

function App() {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }
    return false;
  });

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <div className="App">
        <h1>Todos app</h1>
        <Filter dispatch={dispatchFilter} />
        <TodoList todos={filteredTodos} />
        <AddTodo />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
