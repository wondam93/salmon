import React from 'react';
import {Nav, Button} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { ArrowBarUp } from "react-bootstrap-icons";
import sushi from "../assets/sushi.svg";
import classNames from "classnames";
import '../styles/sidebar.scss';

// import { withRouter } from "react-router";

type SidebarProps = {
  isOpen: boolean,
  toggle: () => void,
}

const logoStyles = {
  display:'flex',
  padding:'1rem',
  alignItems: 'center',
}

const Sidebar: React.FC<SidebarProps> = ({isOpen, toggle}) => {
  const activeStyle = {
    color: 'green',
    backgroundColor: '#ff922b',
  };
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <Button
          variant="link"
          onClick={toggle}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <ArrowBarUp/>
        </Button>
        <div className="logo" style={logoStyles}>
          <img src={sushi} />
          <h5>salmon</h5>
        </div>
      </div>

      <Nav className="flex-column pt-2">
        <p className="ml-3">안녕하세요.</p>

        <Nav.Item className="active">
          <Nav.Link>
            <NavLink exact to="/" activeStyle={activeStyle}>
              <ArrowBarUp/>
              Home
            </NavLink>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <NavLink exact to="/feature" activeStyle={activeStyle}>
              <ArrowBarUp/>
              Feature
            </NavLink>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/">
            <ArrowBarUp/>
            Portfolio
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/">
            <ArrowBarUp/>
            FAQ
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/">
            <ArrowBarUp/>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
// const Sidebar = withRouter(Sidebar);
// const Sidebar = Sidebar;
export default Sidebar
