import React, { Component } from "react";

export class Matrix extends Component {
  render() {
    return (
      <div className="mt-3">
        <p>Matrix Gerada</p>
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
              {this.props.result
                .slice(0)
                .reverse()
                .map((item, index) => (
                  <th key={item + index} scope="col">
                    {index}
                  </th>
                ))}
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
