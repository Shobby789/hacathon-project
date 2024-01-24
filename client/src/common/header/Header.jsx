import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";

const Header = ({ text }) => {
  return (
    <Container
      fluid
      className="common-header bg-light d-flex justify-content-center align-items-center"
    >
      <h2 className="fw-semibold">{text}</h2>
    </Container>
  );
};

export default Header;
