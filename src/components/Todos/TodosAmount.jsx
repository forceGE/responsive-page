import React from 'react';

const TodosAmount = ({ todos }) => (
  <span className="amount">
    {todos.length}
  </span>
);

export default TodosAmount;
