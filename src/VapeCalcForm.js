import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class VapeCalcForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 'Submit values below:',
        desired: 7,
        concentrate: 72,
        concType: 'vg',
        totalVol: 10,
        vgRatio: 30,
        pgRatio: 70,
        flavRatio: 20,
        flavType: 'pg'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'select' ? target.select : target.value;
    const name = target.name;

    this.setState({ [name]: value }, () => this.handleSubmit(value));    
  }

  handleSubmit(event) {
    
    var nicotine = (this.state.desired / this.state.concentrate) * this.state.totalVol;
    var vg = (this.state.totalVol / 100) * this.state.vgRatio;
    var pg = (this.state.totalVol / 100) * this.state.pgRatio;
    var flav = (this.state.totalVol / 100) * this.state.flavRatio;
    
    if (this.state.concType === 'vg') {
        vg -= nicotine;
    } else if (this.state.concType === 'pg') {
        pg -= nicotine;
    }

    if (this.state.flavType === 'vg') {
        vg -= flav;
    } else if (this.state.flavType === 'pg') {
        pg -= flav;
    }

    this.setState({ result: 'Flavour: ' + flav + 'ml | Nicotine: ' + nicotine + 'ml | PG: ' + pg + 'ml | VG: ' + vg + 'ml' });    
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <Alert color="info">
          {this.state.result}
        </Alert>
        <Form onSubmit={this.handleSubmit} onChange={this.handleSubmit}>
          <FormGroup>
            <Label>Desired Nicotine Strength (mg):</Label>            
            <Input type="number" name="desired" value={this.state.desired} onChange={this.handleInputChange} />          
          </FormGroup>
          <FormGroup>
            <Label>Nicotine Concentrate Base:</Label>            
            <Input type="select" name="concType" value={this.state.concType} onChange={this.handleInputChange}>
              <option value="pg">PG</option>
              <option value="vg">VG</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Flavour Base:</Label>            
            <Input type="select" name="flavType" value={this.state.flavType} onChange={this.handleInputChange}>
              <option value="pg">PG</option>
              <option value="vg">VG</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Nicotine Concentrate Strength (mg):</Label>            
            <Input name="concentrate" type="number" value={this.state.concentrate} onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label>Total Bottle Volume (ml):</Label>            
            <Input name="totalVol" type="number" value={this.state.totalVol} onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label>Desired VG Ratio (%):</Label>            
            <Input name="vgRatio" type="number" value={this.state.vgRatio} onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label>Desired PG Ratio (%):</Label>            
            <Input name="pgRatio" type="number" value={this.state.pgRatio} onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label>Desired Flavour Ratio (%):</Label>            
            <Input name="flavRatio" type="number" value={this.state.flavRatio} onChange={this.handleInputChange} />
          </FormGroup>

          <Button type="submit" value="Submit" color="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default VapeCalcForm;