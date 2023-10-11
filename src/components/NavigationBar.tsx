import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";

function NavigationBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState("");

  const closeNavbar = () => {
    setIsExpanded(false);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleLinkMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleLinkMouseLeave = () => {
    setHoveredLink("");
  };

  const styles = {
    navbar: {
      display: "flex",
      transition: "0.2s ease",
      backgroundColor: isExpanded ? "var(--medium-gray)" : "",
      backdropFilter: "blur(10px)",
    },
    toggler: {
      border: "none",
      boxShadow: "none",
      width: "20px",
      transition: "0.3s ease",
    },
    icon: {
      display: "block",
      height: isExpanded ? "4px" : "24px",
      top: isExpanded ? "40%" : "-100%",
      width: "100%",
      backgroundColor: "var(--text-dark)",
      left: 0,
      borderRadius: isExpanded ? "0" : "20px",
      transition: "0.3s ease",
    },
    topBar: {
      transform: isExpanded ? "rotate(135deg)" : "rotate(0deg)",
    },
    botBar: {
      transform: isExpanded ? "rotate(225deg)" : "rotate(180deg)",
    },
    brand: {
      color: "var(--text-dark)",
      margin: "0.5rem",
      padding: 0,
    },
    link: {
      color: "var(--text-dark)",
      transition: "color 0.3s ease",
    },
    linkUnderline: {
      content: '""',
      display: "block",
      width: "0",
      height: "2px",
      backgroundColor: "var(--text-dark)",
      left: 0,
      transition: "width 0.3s ease",
    },
  };

  return (
    <Navbar expand="sm" expanded={isExpanded} style={styles.navbar}>
      <Container>
        <Navbar.Brand style={styles.brand} href="/">
          <h1 style={{ margin: 0 ,fontWeight:'bolder'}}>boyzwhocried</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ ...styles.toggler, position: "relative" }}
          aria-controls="basic-navbar-nav"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span
            className={`toggler-icon top-bar ${isExpanded ? "rotate-top" : ""}`}
            style={{ ...styles.icon, ...styles.topBar, position: "absolute" }}
          ></span>
          <span
            className={`toggler-icon bot-bar ${isExpanded ? "rotate-bot" : ""}`}
            style={{ ...styles.icon, ...styles.botBar, position: "absolute" }}
          ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" style={{ margin: "0.5rem", padding: 0 }}>
          <Nav className="ms-auto">
            {[
              { label: "explore", link: "#explore" },
              { label: "about", link: "#about" },
            ].map((item) => (
              <Nav.Link
                key={item.label}
                onClick={() => {
                  closeNavbar();
                  handleLinkClick(item.label);
                }}
                href={item.link}
                style={{ ...styles.link, position: "relative" }}
                onMouseEnter={() => handleLinkMouseEnter(item.label)}
                onMouseLeave={handleLinkMouseLeave}
              >
                {item.label}
                <span
                  style={{
                    ...styles.linkUnderline,
                    width: hoveredLink === item.label || activeLink === item.label ? "100%" : "0",
                  }}
                ></span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
