import React, { Component } from "react";

export class Matrix extends Component {
  render() {
    return (
      <div className="mt-3">
        <p className="font-weight-bold">Matriz Gerada</p>
        <table className="table table-bordered">
          <tbody>
            {this.props.result
              .slice(0)
              .reverse()
              .map((row, index) => (
                <tr className="table-secondary" key={row}>
                  {row.map((c, ind) => (
                    <td key={ind}>{c}</td>
                  ))}
                </tr>
              ))}
          </tbody>

          <tfoot>
            <tr className="table-success">
              {this.props.palavra.split("").map((item, index) => (
                <th key={item + index} scope="col">
                  {item}
                </th>
              ))}
            </tr>
          </tfoot>
        </table>
        {this.props.found ? (
          <p className="font-weight-bold text-success">
            A palavra pertence a esta gramática!
          </p>
        ) : (
          <p className="font-weight-bold text-danger">
            A palavra não pertence a esta gramática!
          </p>
        )}
      </div>
    );
  }
}
