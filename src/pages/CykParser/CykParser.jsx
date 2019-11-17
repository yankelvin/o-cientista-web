import React, { Component } from "react";

// Utils
import api from "../../services/api";

export class CykParser extends Component {
  constructor(props) {
    super(props);
    this.state = { palavra: "", gramatica: "" };
    this.gerarGramatica = this.gerarGramatica.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(`${event.target.name}: ${event.target.value}`);
  };

  gerarGramatica = arr => {
    if (this.state.gramatica) {
      let gramatica = this.state.gramatica.split("\n");
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

      this.setState({ gramatica: objeto });
    }
  };

  parser = async event => {
    this.gerarGramatica();
    console.log(this.state.gramatica);
    // if (this.state.palavra && this.state.gramatica) {
    //   api.post("cykParser", {
    //     palavra: this.state.palavra,
    //     gramatica: this.state.gramatica
    //   });
    // }
  };

  render() {
    return (
      <div className="container">
        <div className="mt-5">
          <h4 className="text-center">CYK Parser</h4>

          <div className="row mt-5">
            <div className="form-group col-md-6 text-center">
              <label className="pl-3 col-form-label">
                Insira a gramática no formato do exemplo abaixo
              </label>
              <div className="col-sm-10" style={{ margin: "0px auto" }}>
                <textarea
                  type="text"
                  name="gramatica"
                  className="form-control"
                  id="inputGramatica"
                  placeholder="Ex.: &#10;S => A|B|a|b&#10;A => a&#10;B => b"
                  rows="5"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group col-md-6 text-center">
              <label htmlFor="inputPalavra" className="pl-3 col-form-label">
                Insira a palavra embaixo:
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

          <div className="row">
            <button
              className="btn btn-sm btn-secondary"
              style={{ marginLeft: "75px" }}
              onClick={this.parser}
            >
              Realizar parser
            </button>
          </div>
        </div>
      </div>
    );
  }
}
