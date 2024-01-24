import React from "react";
import MenuBar from "./components/navbar/MenuBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const Root = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
