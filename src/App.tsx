import React, { useState, useEffect } from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import Content from './components/Content';

// import HelloWorld from "./components/HelloWorld";
// import RenderForm from "./components/RenderForm";

const App: React.FC<{}> = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setMobile] = useState(true);
  const prevWidth = -1;

  useEffect(() => {
    // updateWidth();
  })

  const updateWidth = () => {
    const widthLimit = 576;
    const width = window.innerWidth;
    const isMobile = width <= widthLimit;
    // const wasMobile = previousWidth <= widthLimit;

    if (isMobile) {
      setIsOpen(!isOpen);
    }

  }

  const toggle = () => {
    setIsOpen(prevState => {
      return !prevState;
    });
  };
  return (
    <>
      <div className="App wrapper">
        <SideBar toggle={toggle} isOpen={isOpen} />
        <Content toggle={toggle} isOpen={isOpen} />
      </div>
    </>
  );
};

export default App;