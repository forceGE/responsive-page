import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Modal from './Modal/index.js';
import Todos from './Todos/Todos.jsx';

const Content = () => (
  <Container fluid className="p-4">
    <Row>
      <Todos />
    </Row>
    <Modal />
  </Container>
);

export default Content;
