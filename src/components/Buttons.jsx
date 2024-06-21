import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { actions } from '../slices/modalSlice.js';

const Buttons = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(actions.open({ type: 'adding' }));
  };

  const handleRemove = () => {
    dispatch(actions.open({ type: 'removing' }));
  };

  return (
    <Col md="10" className="mx-auto text-white">
      <h1 className="display-3 mb-0">{t('ui.title')}</h1>
      <p className="lead">{t('ui.subtitle')}</p>
      <Button
        variant="outline-success"
        onClick={handleAdd}
      >
        {t('buttons.add')}
      </Button>
      {' '}
      <Button
        variant="outline-danger"
        onClick={handleRemove}
      >
        {t('buttons.clear')}
      </Button>
    </Col>
  );
};

export default Buttons;
