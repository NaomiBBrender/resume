import { React } from "react";
import Container from "react-bootstrap/Container";
import About from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Nav,
  Navbar,
  // NavDropdown,
} from "react-bootstrap";

// import About from "./About";

function Header() {
  return (
    <div className="App-header">
      <Router>
        <Navbar>
          <Container>
            <Row>
              <Col id="header-name">
                <a className="linkText" href="/">
                  NAOMI
                </a>
              </Col>
            </Row>
            <Row id="header-links">
              <Col>
                <a className="linkText" href="./about">
                  About
                </a>
              </Col>
              <Col>
                <a className="linkText" href="./work">
                  Work
                </a>
              </Col>
              <Col>
                <a className="linkText" href="./play">
                  Play
                </a>
              </Col>
              <Col>
                <a className="linkText" href="./contact">
                  Contact
                </a>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Router>
    </div>
  );
}

export default Header;
