import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import { Route } from 'react-router-dom';
import { Home, Feature } from '../pages';

type ContentProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Content: React.FC<ContentProps> = ({isOpen, toggle}) => {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": isOpen })}
      >
        <NavBar toggle={toggle} />
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/feature" component={Feature}/>
        </div>
      </Container>
    );
}

export default Content;