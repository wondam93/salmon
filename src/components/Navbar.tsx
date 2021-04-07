import React from "react";
import { ArrowBarUp } from "react-bootstrap-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

type NavbarProps = {
  toggle: () => void;
};

const NavBar: React.FC<NavbarProps> = ({toggle}) => {
    return (
      <Navbar
        bg="light"
        className="navbar shadow-sm p-3 mb-5 bg-white rounded"
        expand
      >
        <Button variant="outline-info" onClick={() => toggle()}>
          <ArrowBarUp />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Nav.Link href="#">page</Nav.Link>
            <Nav.Link href="#">page</Nav.Link>
            <Nav.Link href="#">page</Nav.Link>
            <Nav.Link href="#">page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBar;