import React, { Component } from "react";

// Utils
import api from "../../services/api";

// Components
import { Matrix } from "./components/Matrix";

export class CykParser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palavra: "",
      input: "",
      gramatica: "",
      result: [],
      found: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(`${event.target.name}: ${event.target.value}`);
  };

  gerarGramatica = async arr => {
    if (this.state.input) {
      let gramatica = this.state.input.split("\n");
      const objeto = {};
      let re = new RegExp(/[a-zA-Z]+\s=>/);
      gramatica.forEach(value => {
        let left = re.exec(value)[0];
        let key = left.replace("=>", "");
        let producao = value
          .replace(left, "")
          .trim()
          .split("|");
        objeto[key] = producao;
      });

      this.state.gramatica = objeto;
    }
  };

  parser = async event => {
    this.gerarGramatica(null);
    if (this.state.palavra && this.state.gramatica) {
      const response = await api.post("cykParser", {
        word: this.state.palavra,
        grammar: this.state.gramatica
      });

      this.setState({ result: response.data });
      this.verificarResult();
    }
  };

  verificarResult = e => {
    if (this.state.result && this.state.gramatica) {
      let simboloInicial = Object.keys(this.state.gramatica)[0].trim();
      let topoMatriz = this.state.result[this.state.result.length - 1][0].split(
        " "
      );
      let found = false;
      topoMatriz.forEach(value => {
        if (value.trim() === simboloInicial) {
          found = true;
        }
      });
      console.log(found);
      this.setState({ found });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="mt-5">
          <h4 className="text-center">CYK Parser</h4>

          <div className="row mt-5">
            <div className="form-group col-md-6 text-center">
              <label className="col-form-label font-weight-bold">
                Insira a gramática normalizada (Chomsky):
              </label>
              <div className="col-sm-10" style={{ margin: "0px auto" }}>
                <textarea
                  type="text"
                  name="input"
                  className="form-control"
                  id="inputGramatica"
                  placeholder="Ex.: &#10;S => A|B|a|b&#10;A => a&#10;B => b"
                  rows="6"
                  onChange={this.handleChange}
                />
              </div>

              <button
                className="btn btn-sm btn-secondary mt-3"
                onClick={this.parser}
              >
                Realizar parser
              </button>
            </div>

            <div className="form-group col-md-6 text-center">
              <label
                htmlFor="inputPalavra"
                className="col-form-label font-weight-bold"
              >
                Insira a palavra:
              </label>
              <div className="col-sm-10" style={{ margin: "0px auto" }}>
                <input
                  type="text"
                  name="palavra"
                  className="form-control"
                  id="inputPalavra"
                  placeholder="Palavra"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className={this.state.result.length > 0 ? "row" : "d-none"}>
            <Matrix
              result={this.state.result}
              palavra={this.state.palavra}
              found={this.state.found}
            ></Matrix>
          </div>
        </div>
      </div>
    );
  }
}
