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
              <h5 className="mb-0">O-Cientista</h5>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center mb-3">
          © 2019 meu github:
          <a
            style={{ color: "gray", fontWeight: "bold" }}
            href="https://github.com/yankelvin"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            github.com/yankelvin
          </a>
        </div>
      </footer>
    );
  }
}
