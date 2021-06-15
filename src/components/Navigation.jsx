import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import { scroller } from "react-scroll";

export default function Navigation() {
  const scrollToHome = () => {
    scroller.scrollTo("homeComponent", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToAbout = () => {
    scroller.scrollTo("aboutComponent", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToPortfolio = () => {
    scroller.scrollTo("portfolioComponent", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo("contactComponent", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <Navbar className="navBar" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navBar pr-5 ">
            <Nav.Item>
              <Nav.Link className="navItem mr-1" onClick={scrollToHome}>
                <h1>.Home</h1>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navItem mr-1" onClick={scrollToAbout}>
                <h1>.About</h1>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navItem mr-1" onClick={scrollToPortfolio}>
                <h1>.Portfolio</h1>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navItem mr-1" onClick={scrollToContact}>
                <h1>.Contact</h1>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
