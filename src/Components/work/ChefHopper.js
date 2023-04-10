import { React } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const ChefHopper = () => {
  return (
    <div className='chefHopperPage'>
      <Container>
        <Row>
          {/* <Col> */}
          <Card id='code-card'>
            <Card.Img
              className='code-image'
              // width='100'
              src='/images/chefhopperbakery.png'
              rounded
            />
          </Card>
          {/* </Col> */}
          {/* <Col> */}
          <Card id='code-card'>
            <Card.Body>
              <Card.Text>
                My team and I created and{' '}
                <a href='https://chef-hopper-bakery.onrender.com/login'>
                  <strong id='about-link'>deployed</strong>
                </a>{' '}
                a mock ecom website using PostreSQL, Sequlize, React, and Redux.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* </Col> */}
        </Row>
        <Row>
          <Col>
            <Card id='code-card'>
              <Card.Text>
                talking about our process, talking about our process, talking
                about our process, talking about our process, talking about our
                process, talking about our process
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card id='code-card'>
              <Card.Img src='/images/brainstormingGraceShopper.png' rounded />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card id='code-card'>
              <Card.Img src='/images/brainstormingGraceShopperRoutes.png' />
            </Card>
          </Col>
          <Col>
            <Card id='code-card'>
              <Card.Text>
                talking about our process, talking about our process, talking
                about our process, talking about our process, talking about our
                process, talking about our process
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card id='code-card'>
              <Card.Text>
                talking about our process, talking about our process, talking
                about our process, talking about our process, talking about our
                process, talking about our process
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card id='code-card'>
              <Card.Img src='/images/graceShopperCodePhoto.png' rounded />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChefHopper;
