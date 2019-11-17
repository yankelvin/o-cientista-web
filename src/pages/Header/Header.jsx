import React, { Component } from "react";

// React-Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">IA&Law</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Buscar informações"
            className="mr-sm-2"
          />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
    );
  }
}
