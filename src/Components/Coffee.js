import { React } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Coffee = () => {
  return (
    <div>
      <Image
        className="coffee-image"
        width="300"
        src="/images/coffee.png"
        rounded
      />
    </div>
  );
};

export default Coffee;
