import React, { Component } from "react";
import "./Home.css";

// Components
import { Logo } from "./components/Logo";
import { InputUrl } from "./components/InputUrl";

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <Logo id="logo"></Logo>

          <div className="row mt-4 mb-4">
            <h4 className="text-center">
              Envie a URL de um processo e extraíremos as informações mais
              relevantes deste documento para você!
            </h4>
          </div>

          <div className="mt-4 mb-3">
            <InputUrl></InputUrl>
          </div>
        </div>
      </div>
    );
  }
}
