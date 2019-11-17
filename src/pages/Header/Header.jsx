import React, { Component } from "react";

// React-Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={require("../../assets/logo.png")}
            alt="o-cientista"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>

        <Nav className="mr-auto">
          <NavDropdown title="Linguagem Formais e Autômatos">
            <NavDropdown.Item href="/cykParser">Algoritmo CYK</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Forma normal de Chosmky
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Simplificação de Gramática
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.4">
              Autômato Finito Deterministico
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Simplificação de autômatos
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Teoria dos Grafos">
            <NavDropdown.Item href="#action/3.1">
              Algoritmo de Busca (Djikstra)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Arvore Geradora Mínima
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Busca de Articulação
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Busca Fortemente Conexo
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Ordenação Topológica
            </NavDropdown.Item>
          </NavDropdown>
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
