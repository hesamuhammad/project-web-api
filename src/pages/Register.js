import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
  Container, Row, Col
} from 'reactstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      alamat: "",
      gabung: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      alamat: this.state.name
    };
    // console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("status", false);
    window.location = './login';
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="12" xs="12" className="box-fromlogin">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Nama Lengkap</Label>
                <Input type="text" name="name" id="name" placeholder="Nama Lengkap" onChange={this.handleChange} value={this.state.name} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
              </FormGroup>

              <FormGroup>
                <Label>Alamat</Label>
                <Input type="textarea" name="alamat" id="alamat" placeholder="Alamat" onChange={this.handleChange} value={this.state.alamat} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} value={this.state.password} />
              </FormGroup>
              <p>If you don't have account, you can Registration <a href="/registration/">Here</a>.</p>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}