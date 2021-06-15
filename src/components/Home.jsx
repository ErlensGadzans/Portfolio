import React from "react";
import "./Home.css";
import Container from "@material-ui/core/Container";
import { Row, Col, Card } from "react-bootstrap";
import { ArrowBarLeft } from "react-bootstrap-icons";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="homeComponent">
      <Container className="containerHome">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="player-wrapper">
            <ReactPlayer
              className="react-video"
              url="https://www.youtube.com/watch?v=hKfWEnIpCcg"
              width="100%"
              height="100%"
            />
          </Col>
          <Col md={6} lg={6} className="d-none d-md-block">
            <Card style={{ width: "auto" }} className="cardDescription ">
              <Card.Body>
                <Card.Title>
                  <h2>
                    Hello,<br></br> I'm Erlens.
                  </h2>
                </Card.Title>
                <Card.Subtitle className="mt-5 mb-5">
                  This is my story of how I studied to become a software
                  developer. <b>"One day at Strive School!"</b>
                </Card.Subtitle>

                <h2>
                  <ArrowBarLeft className="arrowBarLeft " text="Play video" />
                  {"Play video"}
                </h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
