import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export class Carrossel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={require("../../../assets/carousel1.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={require("../../../assets/carousel2.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={require("../../../assets/carousel3.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
