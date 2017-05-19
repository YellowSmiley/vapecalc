import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Alert color="info">
        {this.state.result}
      </Alert>
    );
  }
}

export default Results;