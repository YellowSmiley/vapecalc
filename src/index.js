import React from 'react';
import ReactDOM from 'react-dom';
import VapeCalcForm from './VapeCalcForm';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <h2>Welcome to VapeCalc</h2>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <p>
            To get started, fill out the below fields and click Submit:          
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <VapeCalcForm />      
        </Col>
      </Row>
    </Container>
  );
}

//Render App element
ReactDOM.render(
  <App />,
  document.getElementById('root')
);