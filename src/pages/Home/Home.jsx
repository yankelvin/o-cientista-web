import React, { Component } from "react";
import "./Home.css";

// Components
import { Carrossel } from "./components/Carrossel";

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <div className="row mb-4">
            <Carrossel />
            <h6 className="justify-content mt-4">
              Ao longo das disciplinas do meu curso de Ciência da Computação
              venho desenvolvendo os algoritmos propostos pra cada disciplina e
              por conta deles me veio a ideia de criar um site para
              compartilha-los com outros estudantes e/ou entusiastas da área de
              TI. No menu do cabeçalho tem o tema principal (nome da disciplina)
              e em lista tem os algoritmos que desenvolvi até agora. Não estou
              disponibilizando o código dos algoritmos para fomentar a
              curiosidade e estimular que vocês criem os seus próprios
              algoritmos, a ideia é que o site sirva como base para testar e
              comparar enquanto vocês desenvolvem.
              <br />
              <br />
              <p>
                Obs 1.: Meus algoritmos provavelmente não estão otimizados ou
                100% contra falha de erros, não foram testados em casos
                extremos. Se encontrar erros por favor me avise :)
              </p>
              <p>
                Obs 2.: Todos os algoritmos foram desenvolvidos utilizando a
                linguagem{" "}
                <a
                  style={{ color: "gray", fontWeight: "bold" }}
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Python
                </a>
                .
              </p>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
