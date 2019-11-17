import React from "react";
import { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small unique-color-dark mt-3">
        <div className="container">
          <hr />
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <h5 className="mb-0">IA&Law</h5>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center mb-3">
          © 2019 Data2Learning:
          <a href="http://www.data2learning.com/"> data2learning.com</a>
        </div>
      </footer>
    );
  }
}
