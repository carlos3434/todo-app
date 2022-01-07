import React, { useState, useContext } from 'react';
import uuid from 'uuid/v4';
import { TodoContext } from './App';

const AddTodo = () => {
  const dispatch = useContext(TodoContext);
  const [task, setTask] = useState('');

  const handleChangeInput = e => setTask(e.target.value);

  const handleSubmit = e => {
    if (task) {
      dispatch({ type: 'ADD_TODO', task, id: uuid() });
    }
    setTask('');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChangeInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
