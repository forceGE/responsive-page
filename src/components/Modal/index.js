import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { selectors, actions } from '../../slices/modalSlice.js';

import ModalAdd from './ModalAdd.jsx';
import ModalRemove from './ModalRemove.jsx';

const modals = {
  adding: ModalAdd,
  removing: ModalRemove,
};

const ModalRoot = () => {
  const dispatch = useDispatch();

  const modalType = useSelector(selectors.getModalType);
  const isOpen = useSelector(selectors.isModalOpen);

  const handleClose = () => dispatch(actions.close());

  const CurrentModal = modals[modalType];

  return (
    <Modal show={isOpen} onHide={handleClose} centered>
      {CurrentModal && <CurrentModal handleClose={handleClose} />}
    </Modal>
  );
};

export default ModalRoot;
