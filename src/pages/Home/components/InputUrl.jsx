import React, { Component, Fragment } from "react";

// Utils
import api from "../../../services/api";

// Components
import { SentenceHeader } from "./SentenceHeader";
import { SentenceBody } from "./SentenceBody";

export class InputUrl extends Component {
  constructor(props) {
    super(props);
    this.state = { url: null, data: null };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(`${event.target.name}: ${event.target.value}`);
  };

  sendUrl = async event => {
    event.preventDefault();

    if (this.state.url) {
      var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
      var regex = new RegExp(expression);

      if (this.state.url.match(regex)) {
        const response = await api.post("extrairInformacoes", {
          url: this.state.url
        });

        if (response.status === 200) {
          this.setState({ data: response.data });
          console.log(response.data);
        } else {
          alert("Houve algum problema com o servidor =/");
        }
      } else {
        alert("Url inválida!");
      }
    }
  };

  render() {
    return (
      <Fragment>
        <div
          className="row input-group mb-3 mt-3"
          style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
        >
          <input
            type="text"
            name="url"
            onChange={this.handleChange}
            className="form-control"
            placeholder="Cole a URL aqui"
          />

          <div className="input-group-append">
            <button
              onClick={this.sendUrl}
              className="btn btn-dark"
              type="button"
            >
              Enviar
            </button>
          </div>
        </div>

        <br />

        <div className={this.state.data ? "" : "d-none"}>
          <SentenceHeader
            header={this.state.data ? this.state.data.cabecalho : null}
          ></SentenceHeader>

          <hr />

          <SentenceBody
            body={this.state.data ? this.state.data.corpo : null}
          ></SentenceBody>
        </div>
      </Fragment>
    );
  }
}
