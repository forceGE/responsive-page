import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';
import * as yup from 'yup';
import _ from 'lodash';

import { stateTodo, actions, customSelectors } from '../../slices/todosSlice.js';

const schema = (todos) => yup.object().shape({
  body: yup
    .string()
    .required('errors.required')
    .min(3, 'errors.rangeLetter')
    .max(45, 'errors.rangeLetter')
    .notOneOf(todos, 'errors.notOneOf'),
});

const ModalForm = ({ handleClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const todosBody = useSelector(customSelectors.allTodos)
    .reduce((acc, todo) => [...acc, todo.body], []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    validationSchema: schema(todosBody),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      try {
        const todo = {
          body: values.body,
          id: _.uniqueId(),
          state: stateTodo.notDone,
        };

        dispatch(actions.addTodo(todo));
        handleClose();
      } catch (error) {
        formik.setSubmitting(false);

        inputRef.current.select();
      }
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
    >
      <Form.Group
        controlId="body"
      >
        <Form.Control
          className="mb-2"
          name="body"
          ref={inputRef}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.body}
          isInvalid={formik.errors.body && formik.touched.body}
          disabled={formik.isSubmitting}
        />
        <Form.Label
          visuallyHidden
        >
          {t('modal.todo')}
        </Form.Label>
        <Form.Control.Feedback
          type="invalid"
        >
          {t(formik.errors.body)}
        </Form.Control.Feedback>
        <div
          className="d-flex justify-content-end"
        >
          <Button
            className="me-2"
            variant="secondary"
            type="button"
            onClick={handleClose}
          >
            {t('buttons.cancel')}
          </Button>
          <Button
            variant="primary"
            type="submit"
          >
            {t('buttons.submit')}
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default ModalForm;
