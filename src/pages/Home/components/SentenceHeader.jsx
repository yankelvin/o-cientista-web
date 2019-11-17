import React, { Component } from "react";

export class SentenceHeader extends Component {
  getKeysLeft = e => {
    const header = this.props.header ? this.props.header : "";

    let keysLeft = [];
    let len = Object.keys(header).length;
    len = Math.ceil(len / 2);

    Object.keys(header).forEach((k, index) => {
      if (index < len) {
        keysLeft.push(k);
      }
    });

    return keysLeft;
  };

  getKeysRight = e => {
    const header = this.props.header ? this.props.header : "";

    let keysRight = [];
    let len = Object.keys(header).length;
    len = Math.floor(len / 2);

    Object.keys(header).forEach((k, index) => {
      if (index > len) {
        keysRight.push(k);
      }
    });

    return keysRight;
  };

  render() {
    const header = this.props.header ? this.props.header : "";

    return (
      <div>
        <div className="row mb-2">
          <h5>Dados do Processo</h5>
        </div>

        <div className="row">
          <div className="col-md-6">
            {this.getKeysLeft().map(key => (
              <p key={key}>
                <strong>{key}</strong>: {header[key]}
              </p>
            ))}
          </div>

          <div className="col-md-6">
            {this.getKeysRight().map(key => (
              <p key={key}>
                <strong>{key}</strong>: {header[key]}
              </p>
            ))}
          </div>

          <p className={header ? "" : "d-none"}>
            Nosso algoritmo ainda não é capaz de extrair o cabeçalho deste
            formato de documento =/
          </p>
        </div>
      </div>
    );
  }
}
