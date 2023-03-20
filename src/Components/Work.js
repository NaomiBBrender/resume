import React, { useState, useRef } from 'react';
import Coffee from './Coffee';
import Code from './Code';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Work = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='workPage'>
      <Container>
        <Row>
          <Col>
            <Card id='work-card'>
              <Card.Body id='work-body'>
                <Card.Title>CODE</Card.Title>
                <a href='/code'>
                  <Image
                    // width='400'
                    src='/images/graceShopperCodephoto.png'
                    rounded
                    fluid
                  />
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card id='work-card'>
              <Card.Body id='work-body'>
                <Card.Title>COFFEE</Card.Title>
                <a href='/coffee'>
                  <Image width='400' src='/images/coffee.png' rounded fluid />
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
