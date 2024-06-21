import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { BsTrash3 } from 'react-icons/bs';

import { actions } from '../../slices/todosSlice.js';

const ButtonsList = ({ values }) => {
  const { id, body, state } = values;
  const dispatch = useDispatch();

  const handleRemove = (idTodo) => () => {
    dispatch(actions.removeTodo({ id: idTodo }));
  };

  const changeState = (idTodo, stateTodo) => () => {
    dispatch(actions.changeState({ id: idTodo, state: stateTodo }));
  };

  return (
    <>
      <Button
        className="todo-body border-0"
        variant="group-vertical"
        type="button"
        onClick={changeState(id, state)}
      >
        {body}
      </Button>
      <Button
        className="border-0"
        variant="group-vertical"
        type="button"
        onClick={handleRemove(id)}
      >
        <BsTrash3 className="icon-trash ms-auto" />
      </Button>
    </>
  );
};

export default ButtonsList;
