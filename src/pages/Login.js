import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
  Container, Row, Col
} from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = localStorage.getItem("user");
    const { email, password } = this.state;

    if (email === "") {
      alert("Email tidak boleh kosong");
    } else if (password === "") {
      alert("Password tidak boleh kosong");
    } else if (email === user.email && password === user.password) {
      alert("Login Sukses");
      window.location = './index.html';
    } else {
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      localStorage.setItem("login", JSON.stringify(user));
      localStorage.setItem("status", true);
      // let errorMessage = alert("Login Gagal");
      window.location = './';
    }
  }

  render() {
    return (
      <Container style={{ width: "500px", marginTop: "75px" }}>
        <h4 style={{ fontWeight: "bold" }}>LOGIN</h4>
        <Row>
          <Col md="12" xs="12" className="box-fromlogin">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
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