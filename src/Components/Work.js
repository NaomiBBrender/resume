import React, { useState, useRef } from 'react';
// import Coffee from './Coffee';
// import Code from './Code';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';

const Work = () => {
  // const [show, setShow] = useState(false);

  let workArray = [
    {
      id: 1,
      title: 'Stoop Friends',
      image: '',
    },
    {
      id: 2,
      title: 'Lisa Quest',
      image: '/images/PlayLisaQuest.png',
    },
    {
      id: 3,
      title: 'Chef Hopper',
      image: '/images/chefhopperbakery.png',
    },
    {
      id: 4,
      title: 'Coffee',
      image: '/images/coffee.png',
    },
  ];

  return (
    <div className='workPage'>
      <Container clasName='workCards'>
        <Row>
          {workArray.map((job) => {
            return (
              <Card key={job.id}>
                <Card.Body id='work-body'>
                  <Image
                    // width='400'
                    height='200'
                    // alt='400x300'
                    src={job.image}
                  />
                </Card.Body>
              </Card>
            );
          })}

          {/* <Card.Body id='work-body'>
              <Card.Img
                variant='left'
                width='200'
                src='/images/graceShopperCodephoto.png'
                rounded
              />
              <Card.Title variant='right'>CODE</Card.Title>
              <a href='/code'>
                  <Image
                    width='400'
                    src='/images/graceShopperCodephoto.png'
                    rounded
                    fluid
                  />
                </a>
            </Card.Body> */}
          {/* </Card> */}
        </Row>
        <Row>
          <Card>
            <Card.Body id='work-body'>
              <Card.Title>COFFEE</Card.Title>
              <a href='/coffee'>
                <Image width='400' src='/images/coffee.png' rounded fluid />
              </a>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
