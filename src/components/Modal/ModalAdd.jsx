import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import ModalForm from './ModalForm.jsx';

const ModalAdd = ({ handleClose }) => {
  const { t } = useTranslation();

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modal.addTodo')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalForm handleClose={handleClose} />
      </Modal.Body>
    </>
  );
};

export default ModalAdd;
