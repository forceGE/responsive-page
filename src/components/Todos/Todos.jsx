import React from 'react';
import { Col, Card } from 'react-bootstrap';

import TodosTabs from './TodosTabs.jsx';

const Todos = () => (
  <Col md="10" className="mx-auto text-white">
    <Card className="border-0 bg-dark" style={{ width: '35rem' }}>
      <Card.Body className="border-0 bg-dark p-0" style={{ width: '35rem' }}>
        <TodosTabs />
      </Card.Body>
    </Card>
  </Col>
);

export default Todos;
