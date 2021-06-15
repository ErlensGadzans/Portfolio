import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { Card, CardDeck, Button, Row, Modal } from "react-bootstrap";
import Container from "@material-ui/core/Container";
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
          <h3>Recent projects</h3>

          <CardDeck>
            <Card className="cardPortfolioCovid text-white text-center wow fadeInDown">
              <Card.Img className="portfolioImg" src={Covid} />
              <Card.ImgOverlay className="cardImgOverelay">
                <Card.Title className="cardTitle">COVID-19 Tracker</Card.Title>
                <Button
                  className="cardButton"
                  href={"https://covid19-healthdata.herokuapp.com/"}
                  target="_blank"
                >
                  <BoxArrowUpRight className="mr-2" />
                  View project
                </Button>
                <Button
                  className="cardButton"
                  href={"https://github.com/ErlensGadzans/Covid-19-tracker-FE"}
                  target="_blank"
                >
                  <Github className="mr-2" />
                  See the code
                </Button>
              </Card.ImgOverlay>
            </Card>
            <Card className="cardPortfolioWeatherApp text-white text-center wow fadeInDown ">
              <Card.Img className="portfolioImg" src={Weather} />
              <Card.ImgOverlay className="cardImgOverelay">
                <Card.Title className="cardTitle">Weather App </Card.Title>
                <Button className="cardButton" onClick={() => setSmShow(true)}>
                  <BoxArrowUpRight className="mr-2" />
                  View project
                </Button>
                <Modal
                  className="modal"
                  size="sm"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  // aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton className="modalHeader">
                    <Modal.Title>
                      <small>The project is under construction</small>
                    </Modal.Title>
                  </Modal.Header>
                </Modal>
                <Button className="cardButton" onClick={() => setSmShow(true)}>
                  <Github className="mr-2" />
                  See the code
                </Button>
              </Card.ImgOverlay>
            </Card>
            <Card className="cardPortfolioSocialMedia text-white text-center wow fadeInDown">
              <Card.Img className="portfolioImg" src={LatviaGuide} />
              <Card.ImgOverlay className="cardImgOverelay">
                <Card.Title className="cardTitle">Tour operator</Card.Title>
                <Button className="cardButton" onClick={() => setSmShow(true)}>
                  <BoxArrowUpRight className="mr-2" />
                  View project
                </Button>
                <Button className="cardButton" onClick={() => setSmShow(true)}>
                  <Github className="mr-2" />
                  See the code
                </Button>
              </Card.ImgOverlay>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
}
