import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navigation.css";
import { scroller } from "react-scroll";
// import Container from "@material-ui/core/Container";

export default function Navigation() {
  const scrollToHome = () => {
    scroller.scrollTo("homeComponent", {
      duration: 800,
      delay: 0,
      smooth: true,
    });
  };

  const scrollToAbout = () => {
    scroller.scrollTo("aboutComponent", {
      duration: 800,
      delay: 0,
      smooth: true,
    });
  };

  const scrollToPortfolio = () => {
    scroller.scrollTo("portfolioComponent", {
      duration: 800,
      delay: 0,
      smooth: true,
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo("contactComponent", {
      duration: 800,
      delay: 0,
      smooth: true,
    });
  };

  return (
    <div className="navbarComponent">
      <Container>
        <Navbar
          className="navBar"
          collapseOnSelect
          fixed="top"
          expand="lg"
          // bg="rgb(152, 190, 211)"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav className="mt-2 align-items-center">
              <Nav.Link className="navItem mr-1" onClick={scrollToHome}>
                <h1>.Home</h1>
              </Nav.Link>

              <Nav.Link className="navItem mr-1" onClick={scrollToAbout}>
                <h1>.About</h1>
              </Nav.Link>

              <Nav.Link className="navItem mr-1" onClick={scrollToPortfolio}>
                <h1>.Portfolio</h1>
              </Nav.Link>

              <Nav.Link className="navItem mr-1" onClick={scrollToContact}>
                <h1>.Contact</h1>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>{" "}
      </Container>
    </div>
  );
}
