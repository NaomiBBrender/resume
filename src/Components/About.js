import { React } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className='aboutPage'>
      <Container>
        <Row>
          <Col>
            <Card id='about-card'>
              <Card.Body id='about-photo'>
                <Card.Img src='/images/Naomi Player.png' />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id='about-card'>
              <Card.Body id='about-body'>
                <Card.Title id='about-greeting'>HI, I'M NAOMI</Card.Title>
                <Card.Text id='about-body'>
                  I'm a software engineer living in Brooklyn. I spent many years
                  working in specialty coffee mostly with&nbsp;
                  <a id='about-link' href='https://www.stumptowncoffee.com'>
                    <strong id='about-link'>Stumptown Coffee Roasters</strong>
                  </a>
                  . I can crush a rush a like no one's business.
                </Card.Text>
                <Card.Text id='about-body'>
                  I love solving puzzles. Whether it's code, a boulder problem,
                  or you know, an actual puzzle, I'm there.
                </Card.Text>
                <Card.Text id='about-body'>
                  When I'm not working you can find me reading a book, climbing
                  rocks or exploring the city on hot pink vintage peugeot mixte.
                </Card.Text>
                <Card.Text id='contact-button'>
                  <Button
                    variant='custom'
                    id='about-button'
                    onClick={(e) => {
                      window.open('mailto:NaomiBBrender@gmail.com');
                    }}
                  >
                    LET'S WORK TOGETHER
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
