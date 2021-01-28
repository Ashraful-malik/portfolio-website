import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Pages() {
  const [IsOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar IsOpen={IsOpen} toggle={toggle} />
    </>
  );
}

export default Pages;
