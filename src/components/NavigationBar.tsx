import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import "./NavigationBar.css";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="sm"
      expanded={expanded}
      style={{
        backgroundColor: expanded ? "rgba(245, 245, 245, 0.5)" : "",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container>
        <Navbar.Brand style={{ margin: "0.5rem", padding: 0 }} href="/">
          <h1 style={{ margin: 0 }}>boyzwhocried</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ margin: "0.5rem" }}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <span
            className={`toggler-icon top-bar ${expanded ? "rotate-top" : ""}`}
          ></span>
          <span
            className={`toggler-icon bot-bar ${expanded ? "rotate-bot" : ""}`}
          ></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ margin: "0.5rem", padding: 0 }}
        >
          <Nav className="ms-auto">
            <Nav.Link onClick={closeNavbar} href="#explore">
              explore
            </Nav.Link>
            <Nav.Link onClick={closeNavbar} href="#about">
              about
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
