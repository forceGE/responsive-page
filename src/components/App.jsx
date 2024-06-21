import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Buttons from './Buttons.jsx';
import Content from './Content.jsx';

const App = () => (
  <>
    <Container fluid className="p-4">
      <Row>
        <Buttons />
      </Row>
    </Container>
    <Content />
  </>
);

export default App;
