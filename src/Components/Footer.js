import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="App-footer">
      <Container>
        <Row>
          <Col>
            <p id="footer-author">made in Brooklyn by Naomi </p>
          </Col>
          <Col>
            <p className="footer-links">
              <a href="https://www.linkedin.com/in/naomibrender?trk=profile-badge">
                <i className="fa-brands fa-linkedin" id="linkedin"></i>
              </a>
              <a href="https://github.com/NaomiBBrender">
                <i className="fa-brands fa-github" id="linkedin"></i>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
