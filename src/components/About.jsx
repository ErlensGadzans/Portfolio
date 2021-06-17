import React, { useEffect } from "react";
// import Container from "@material-ui/core/Container";
import { Row, Col, Card, CardDeck, Container } from "react-bootstrap";
import "./About.css";
import MyPic from "../files/es.png";
import { Github, Linkedin } from "react-bootstrap-icons";
import CV from "../files/cv_erlens_gadzans.pdf";
import NodeJS from "../files/nodejs.png";
import Bootstrap from "../files/bootstrap.png";
import Postgres from "../files/postgresql.png";
import JavaScript from "../files/javascript.png";
import CSS from "../files/css.png";
import ReactIcon from "../files/react.png";
import Express from "../files/express.png";
import MongoDB from "../files/mongodb.png";
import WOW from "wowjs";

export default function About() {
  useEffect(() => {
    new WOW.WOW({
      // live: false,
    }).init();
  });

  return (
    <div className="aboutComponent">
      <Container className="aboutContainer">
        <Row>
          <Col className="columnMe" xs={12} sm={12} md={4} lg={4}>
            <Card className="cardAbout">
              <Card.Img variant="top" src={MyPic} className="myImage mt-3 " />
              <Card.Body>
                <Card.Title className="myName">Erlens Gadzans</Card.Title>
                <Card.Link
                  className="positionDescription"
                  href={
                    "https://strive.school/certificate/607731999566ba00173d7dbe"
                  }
                  target="_blank"
                >
                  Fullstack MERN Grad student
                </Card.Link>
                <Card.Text></Card.Text>
                <h3 className="myIcons">
                  <a
                    href={"https://github.com/ErlensGadzans"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="githubIcon mr-3" />
                  </a>
                  <a
                    href={"https://www.linkedin.com/in/erlensgadzans/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="linkedinIcon mr-3" />
                  </a>
                  <a
                    className="cvIcon mt-1"
                    href={CV}
                    target="_blank"
                    rel="noreferrer"
                  >
                    CV
                  </a>
                </h3>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={8} lg={8}>
            <h3>About me</h3>
            <p>
              {" "}
              I am passionate about thing what I do. I have a steady source of
              motivation that drives me to do my best and I constantly looking
              for new opportunities to expand my knowledge horizon, especially
              in different aspects of information technology. I started Strive
              School in 2020 and now I am strongly confident of being exactly in
              the right place. I've become professional in excellent
              relation-building skills with the successful implementation of
              different projects. Now I'm working with MongoDB, Express, React,
              Node, and more.
            </p>
            <Col className="d-none d-md-block" xs={12} sm={12}>
              <h3>My skills</h3>

              <CardDeck className="skillsIconsAll mt-2 ">
                <Card className="skillsIconsJS text-center wow zoomIn ">
                  <Card.Img className="skillIconImg" src={JavaScript} />
                  <Card.Text>JavaScript</Card.Text>
                </Card>
                <Card className="skillsIconsCSS text-center wow zoomIn">
                  <Card.Img className="skillIconImg" src={CSS} />
                  <Card.Text>CSS</Card.Text>
                </Card>
                <Card className="skillsIconsBootstrap text-center wow zoomIn">
                  <Card.Img className="skillIconImg" src={Bootstrap} />
                  <Card.Text>Bootstrap</Card.Text>
                </Card>
                <Card className="skillsIconsReact text-center wow zoomIn">
                  <Card.Img className="skillIconImg" src={ReactIcon} />
                  <Card.Text>React</Card.Text>
                </Card>
              </CardDeck>

              <CardDeck className="skillsIconsAll mt-5 ">
                <Card className="skillsIconsJS text-center wow zoomIn">
                  <Card.Img className="skillIconImg" src={Express} />
                  <Card.Text>ExpressJS</Card.Text>
                </Card>
                <Card className="skillsIconsCSS text-center wow zoomIn">
                  <Card.Img className="skillIconImg" src={NodeJS} />
                  <Card.Text>NodeJS</Card.Text>
                </Card>
                <Card className="skillsIconsBootstrap text-center wow zoomIn">
                  <Card.Img className="skillIconImg" src={MongoDB} />
                  <Card.Text>MongoDB</Card.Text>
                </Card>
                <Card className="skillsIconsReact text-center wow zoomIn">
                  <Card.Img className="skillIconImg" src={Postgres} />
                  <Card.Text>PostgreSQL</Card.Text>
                </Card>
              </CardDeck>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
