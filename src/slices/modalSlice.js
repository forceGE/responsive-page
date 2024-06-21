/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = ({
  isOpen: false,
  type: null,
  context: null,
});

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, { payload: { type } }) => {
      state.isOpen = true;
      state.type = type;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

const { actions } = modalSlice;
const selectors = {
  getModalType: (state) => state.modal.type,
  isModalOpen: (state) => state.modal.isOpen,
};

export { actions, selectors };
export default modalSlice.reducer;
