import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../common/header/Header";
import AddProjectForm from "../../components/addProjectForm/AddProjectForm";

const AddProject = () => {
  return (
    <>
      <Header text={"Add Your Project"} />
      <Container fluid className="p-0">
        <AddProjectForm />
      </Container>
    </>
  );
};

export default AddProject;
