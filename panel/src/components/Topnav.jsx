import { Navbar, Nav, Container, Form } from "react-bootstrap";

const TopNav = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <Navbar
      expand="md"
      bg={isDark ? "dark" : "white"}
      variant={isDark ? "dark" : "light"}
      className={`border-bottom ${isDark ? "border-secondary" : "navbar-light"}`}
    >
      <Container fluid>
        <Navbar.Brand href="#" className={`fw-bold ${isDark ? "text-white" : "text-primary"}`}>
            <img
              src={isDark ? "/images/logo-inverted.png" : "/images/logo.png"}
              alt="Devio Logo"
              width="50"
              height="50"
              className="d-inline-block align-top me-2"
            />
        </Navbar.Brand>

        <div className="d-flex align-items-center justify-content-center">
          <Form.Check
              type="switch"
              id="dark-mode-toggle"
              checked={isDark}
              onChange={toggleTheme}
              className="ms-3 d-md-none d-block"
            />
          <Navbar.Toggle aria-controls="devio-navbar" className="mt-1" />
        </div>

        <Navbar.Collapse id="devio-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#">Developer Docs</Nav.Link>
            <Nav.Link href="#">Support</Nav.Link>
            <Form.Check
              type="switch"
              id="dark-mode-toggle"
              checked={isDark}
              onChange={toggleTheme}
              className="ms-3 d-md-block d-none"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
