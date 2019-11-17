import React, { Component } from "react";

export class SentenceBody extends Component {
  render() {
    const body = this.props.body ? this.props.body : "";

    return (
      <div>
        <div className="row mb-2">
          <h5>Corpo do Processo</h5>
        </div>

        <div className="row">
          <div className="col-md-12">
            {Object.keys(body).map((key, index) => (
              <p key={key}>
                <strong>{key}</strong>: {body[key]}
              </p>
            ))}

            <p className={body ? "" : "d-none"}>
              Nosso algoritmo ainda não é capaz de extrair a sentença deste
              formato de documento =/
            </p>
          </div>
        </div>
      </div>
    );
  }
}
