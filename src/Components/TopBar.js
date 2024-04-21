import { NavbarCollapse, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import instacartLogo from "../instacartLogo.png";

function TopBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ margin: "0px 0 0 20px" }} href="#home">
          <img src={instacartLogo} alt="instacartLogo" style={{ height: '75px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="ms-auto px-1" style={{ lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default TopBar;