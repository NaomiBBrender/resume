import { React } from "react";
import Coffee from "./Coffee";
import Code from "./Code";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Work = () => {
  return (
    <div className="workPage">
      <Container>
        <Row>
          <Col>
            <a href="/code">
              <Image width="300" src="/images/chefhopperbakery.png" rounded />
            </a>
          </Col>

          <Col>
            <Coffee />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
