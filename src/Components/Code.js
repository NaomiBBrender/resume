import { React } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const Code = () => {
  return (
    <div className="codePage">
      <Container >
        <Row>
          <Col>
            <Card id="code-card">
              <a href="./chefHopper">
              <Card.Img src="/images/chefhopperbakery.png"
              rounded />
              </a>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col>
            <Card id="code-card">
              <a href="./lisaQust">
              <Card.Img src="/images/PlayLisaQuest.png"
              rounded />
              </a>
            </Card>
          </Col>

        </Row>


      </Container>
    </div>
  );
};

export default Code;
