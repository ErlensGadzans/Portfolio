import React from "react";
import "./Contact.css";
import Container from "@material-ui/core/Container";
import emailjs from "emailjs-com";
import { Form, Col, Button, Row } from "react-bootstrap";
import MapResult from "./MapResult";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contactComponent">
      <Container className="footerContainer">
        <Row>
          <Col className="columnContact col-12 mt-3 col-sm-12 mt-3 col-md-6 col-lg-6">
            <h3>Contact me</h3>
            <Form onSubmit={sendEmail} className="contactForm">
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={7}
                  type="text"
                  placeholder="Message"
                  name="message"
                  required
                />
              </Form.Group>

              <Button
                className="buttonSendMessage"
                type="submit"
                variant="primary"
              >
                Send message
              </Button>
            </Form>
          </Col>
          <Col className="columnMap col-12 mt-3 col-sm-12 mt-3 col-md-6 col-lg-6">
            <MapResult className="map" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
