import React from "react";
import "./Home.css";
// import Container from "@material-ui/core/Container";
import { Row, Col, Card, Container } from "react-bootstrap";
import { ArrowBarRight } from "react-bootstrap-icons";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="homeComponent">
      <Container className="homeContainer">
        <Row>
          <Col md={6} lg={6} className="d-none d-lg-block">
            <Card style={{ width: "auto" }} className="cardDescription">
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  <h2>Hello, I'm Erlens.</h2>
                </Card.Title>

                <Card.Title className="d-flex justify-content-center">
                  <h4>
                    This is my story of how I studied to become a software
                    developer: <strong>"One day at Strive School!"</strong>
                  </h4>
                </Card.Title>

                <h2 className="d-flex justify-content-end">
                  {" "}
                  {"Play video"}
                  <ArrowBarRight className="arrowBarRight " text="Play video" />
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="player-wrapper">
            <ReactPlayer
              className="react-video"
              url="https://www.youtube.com/watch?v=aY_7ngpzj-o"
              width="100%"
              height="100%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
