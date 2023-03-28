import { React } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Coffee = () => {
  return (
    <div className="coffeePage">
      <Container>
        <Row>
          <Col id="coffee-page">
            <Image
              width="300"
              className="coffee-image"
              src="/images/coffee.png"
              rounded
            />
          </Col>
          <Col id="coffee-page">
            <Image width="300" src="/images/palateDev.png" rounded />
          </Col>
          <Col id="coffee-page">
            <Image width="300" src="/images/learningWithMoises.png" rounded />
          </Col>
          <Col id="coffee-page">
            <Image width="300" src="/images/hotCocoa.png" rounded />
          </Col>
        </Row>
        <Row>
          <Col id="coffee-page">
            <Image width="300" src="/images/coffeeBush.png" rounded />
          </Col>
          <Col id="coffee-page">
            <Image width="300" src="/images/coffeeSeedlings.png" rounded />
          </Col>
          <Col id="coffee-page">
            <Image width="300" src="/images/feltCute.png" rounded />
          </Col>
          <Col id="coffee-page">
            <Image width="300" src="/images/espressoMachine.png" rounded />
          </Col>
          <Col id="coffee-page">
            <Image width="300" src="/images/moreCoffeeSeedlings.png" rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Coffee;
