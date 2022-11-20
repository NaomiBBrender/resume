import { React } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div className="aboutPage">
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>inside the card</Card.Body>
            </Card>
          </Col>
          <Col>
            <h1>Hi, I'm Naomi</h1>
            <p>
              I'm currently a software engineering student at The Grace Hopper
              Propgram at Fullstack Academy. I love reading, puzzles and riding
              my bike. I'm also a coffee lover and climber.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
