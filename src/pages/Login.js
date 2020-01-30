import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
  Container, Row, Col
} from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    const { email, password } = this.state;
    let userSave = JSON.parse(localStorage.getItem('user'));

    if (userSave == null) {
      alert("Anda Belum Register");
      window.location = './registration';
    } else if (email === "") {
      alert("Email tidak boleh kosong");
    } else if (password === "") {
      alert("Password tidak boleh kosong");
    } else if (user.email === userSave.email && user.password === userSave.password) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      localStorage.setItem("login", JSON.stringify(user));
      localStorage.setItem("status", true);
      alert("Login Sukses");
      window.location = './index.html';
    } else {
      alert("Login Gagal");
      window.location = './';
    }
  }

  render() {
    return (
      <Container style={{ width: "500px", marginTop: "75px", minHeight: "60vh" }}>
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