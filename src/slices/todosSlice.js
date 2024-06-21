/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter();

export const stateTodo = {
  done: 'done',
  notDone: 'notDone',
};

const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
    removeTodo: (state, { payload }) => todosAdapter.removeOne(state, payload.id),
    removeTodos: todosAdapter.removeAll,
    changeState: (state, { payload }) => {
      if (payload.state === stateTodo.done) {
        state.entities[payload.id].state = stateTodo.notDone;
      } else {
        state.entities[payload.id].state = stateTodo.done;
      }
    },
  },
});

export const { actions } = todosSlice;
const selectors = todosAdapter.getSelectors((state) => state.todos);
export const customSelectors = {
  allTodos: selectors.selectAll,
  doneTodos: (state) => selectors.selectAll(state).filter(({ state }) => state === stateTodo.done),
  notDoneTodos: (state) => selectors.selectAll(state)
    .filter(({ state }) => state === stateTodo.notDone),
  todosBody: (state) => selectors.selectAll(state).map(({ body }) => body),
};

export default todosSlice.reducer;
