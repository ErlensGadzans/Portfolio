import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import {
  Card,
  Badge,
  Button,
  Row,
  Modal,
  Container,
  Col,
} from "react-bootstrap";
// import Container from "@material-ui/core/Container";
import Covid from "../files/covidTracker.png";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";
import WOW from "wowjs";
import Weather from "../files/weatherApp.jpeg";
import LatviaGuide from "../files/LatviaGuide.png";

export default function Portfolio() {
  useEffect(() => {
    new WOW.WOW({}).init();
  });

  const [smShow, setSmShow] = useState(false);

  return (
    <div className="portfolioComponent">
      <Container className="portfolioContainer">
        <Row>
          <Col className="col-12 mt-3 col-sm-12 mt-3 col-md-12 mt-3 col-lg-4">
            <Card className="cardPortfolioCovid text-white text-center wow fadeInDownv">
              <Card.Img className="portfolioImg" src={Covid} />
              <Card.ImgOverlay className="cardImgOverelay">
                <Card.Title className="cardTitle">COVID-19 Tracker</Card.Title>
                <Row className="d-flex justify-content-between">
                  <Button
                    className="cardButton"
                    href={"https://covid19-healthdata.herokuapp.com/"}
                    target="_blank"
                  >
                    <BoxArrowUpRight className="mr-2" />
                    Project
                  </Button>
                  <Button
                    className="cardButton"
                    href={
                      "https://github.com/ErlensGadzans/Covid-19-tracker-FE"
                    }
                    target="_blank"
                  >
                    <Github className="mr-2" />
                    Code
                  </Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="col-12 mt-3 col-sm-12 mt-3 col-md-12 mt-3 col-lg-4">
            <Card className="cardPortfolioWeatherApp text-white text-center wow fadeInDown">
              <Card.Img className="portfolioImg" src={Weather} />
              <Card.ImgOverlay className="cardImgOverelay">
                <Card.Title className="cardTitle">Weather App </Card.Title>
                <Row className="d-flex justify-content-between">
                  <Button
                    className="cardButton"
                    onClick={() => setSmShow(true)}
                  >
                    <BoxArrowUpRight className="mr-2" />
                    Project
                  </Button>
                  <Modal
                    className="modal"
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                  >
                    <Modal.Header closeButton className="modalHeader">
                      <Modal.Title>
                        <small>The project is under construction</small>
                      </Modal.Title>
                    </Modal.Header>
                  </Modal>

                  <Button
                    className="cardButton"
                    onClick={() => setSmShow(true)}
                  >
                    <Github className="mr-2" />
                    Code
                  </Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="col-12 mt-3 col-sm-12 mt-3 col-md-12 mt-3 col-lg-4">
            <Card className="cardPortfolioSocialMedia text-white text-center wow fadeInDown">
              <Card.Img className="portfolioImg" src={LatviaGuide} />
              <Card.ImgOverlay className="cardImgOverelay">
                <Card.Title className="cardTitle">Tour operator</Card.Title>
                <Row className="d-flex justify-content-between">
                  <Button
                    className="cardButton"
                    onClick={() => setSmShow(true)}
                  >
                    <BoxArrowUpRight className="mr-2" />
                    Project
                  </Button>
                  <Button
                    className="cardButton"
                    onClick={() => setSmShow(true)}
                  >
                    <Github className="mr-2" />
                    Code
                  </Button>
                </Row>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
