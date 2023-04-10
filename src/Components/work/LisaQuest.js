import { React } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const LisaQuest = () => {
  return (
    <div className='lisaQuestPage'>
      <h1>Check out Lisa Quest!</h1>
      <a id='about-link' href='https://lisaquest.onrender.com/'>
        <strong id='about-link'>
          {' '}
          {'--> CLICK HERE TO PLAY LISA QUEST <--'}
        </strong>
      </a>
      <div>
        <iframe
          src='https://giphy.com/embed/uk7idkHsu5se8R4zuS'
          width='480'
          height='384'
          // frameBorder='0'
          class='giphy-embed'
          // allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href='https://giphy.com/gifs/game-hearts-lisa-uk7idkHsu5se8R4zuS'>
          via GIPHY
        </a>
      </p>
      <div>
        A classic platformer game in space. Technologies Used: Javascript,
        HTML/CSS, Redux, Phaser3, Tiled, OnRender, Bit.io.
      </div>
    </div>
  );
};

export default LisaQuest;
