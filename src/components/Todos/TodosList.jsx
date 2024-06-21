/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { GiCheckMark } from 'react-icons/gi';

import cn from 'classnames';

import ButtonsList from './ButtonsList.jsx';

import { stateTodo } from '../../slices/todosSlice.js';

const TodosList = ({ todos }) => {
  const hiddenClass = (state) => ({
    'd-none': state === stateTodo.notDone,
  });

  return (
    <ListGroup
      as="ul"
      variant="flush"
    >
      {todos.map(({ id, body, state }) => (
        <ListGroup.Item
          as="li"
          key={id}
          className="align-items-center border-0 bg-dark d-flex"
        >
          {(state === stateTodo.notDone)
            ? <div className="check" />
            : (
              <GiCheckMark
                className={cn(hiddenClass(state), { 'icon-check': true })}
              />
            )}
          <ButtonsList values={{ id, body, state }} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodosList;
