import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";

import "./style.scss";

export const SingleCard = ({ car }) => (
  <Card className="Single-card">
    <Carousel interval={false}>
      {car.nuotraukos.map((image, ind) => (
        <Carousel.Item key={ind} className="Carousel-item">
          <img className="d-block w-100" src={image} alt={`${ind} slide`} />
        </Carousel.Item>
      ))}
    </Carousel>
    <Card.Body>
      <Card.Title>{car.marke}</Card.Title>
      <Card.Text>Modelis: {car.modelis}</Card.Text>
      <Card.Text>Metai: {car.metai}</Card.Text>
      <Card.Text className="Price">{car.kaina} €</Card.Text>
    </Card.Body>
  </Card>
);
