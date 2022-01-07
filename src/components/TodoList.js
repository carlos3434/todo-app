import React, { useContext } from 'react';
import { TodoContext } from './App';

const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);

  const handleChange = () => {
    dispatch({
      id: todo.id,
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO'
    });
  };
  return (
    <ul>
      <li key={todo.id}>
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handleChange}
          />
          {todo.task}
        </label>
      </li>
    </ul>
  );
};

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoList;
