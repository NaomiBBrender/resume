import React, { useRef, useState }  from "react";
import { Container, Row, Card } from "react-bootstrap";
import emailjs from '@emailjs/browser'

const emailJSAPIKey = process.env.emailJSAPIKey;

const Contact = (props) => {
  const form = useRef();
  const [state, setState] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9y2lq28', 'template_thc56z9', form.current, emailJSAPIKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contactPage'>
      <Container>
        <Row>
          <Card id='contact-card'>
            <form id='contact-form' ref={form} onSubmit={sendEmail}>
            <Card.Text>Let's Connect:</Card.Text>
            <label>Name</label>

            <input type="text" name="user_name" required />

            <label>Email</label>
            <input type="email"  name="user_email" required />
            <label>Message</label>
            <textarea name="message" placeHolder='How Should We Work together?' required />
            <input type="submit" value="Send" />
            </form>

          </Card>
        </Row>
      </Container>

  </div>
  );
};



export default Contact;
