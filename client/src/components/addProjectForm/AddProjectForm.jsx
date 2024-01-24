import React, { useState } from "react";
import "./AddProjectForm.css";
import { Button, Container, Form } from "react-bootstrap";

const AddProjectForm = () => {
  const [data, setData] = useState({
    owner: "",
    project_title: "",
    description: "",
    project_url: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1000/api/add-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp = await res.json();
    console.log("Project add form >> ", resp);
  };
  return (
    <Container fluid className="py-5">
      <Container className="d-flex justify-content-center align-items-center py-5">
        <Form
          onSubmit={handleSubmit}
          className="border rounded-4 add-project-form"
        >
          <Form.Group className="mb-3">
            <Form.Label>Enter Developer Name</Form.Label>
            <Form.Control
              type="text"
              name={"owner"}
              value={data.owner}
              onChange={handleOnChange}
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Project Title</Form.Label>
            <Form.Control
              type="text"
              name={"project_title"}
              value={data.project_title}
              onChange={handleOnChange}
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Hosted URL</Form.Label>
            <Form.Control
              type="text"
              name={"project_url"}
              value={data.project_url}
              onChange={handleOnChange}
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter Project Description</Form.Label>
            <Form.Control
              as="textarea"
              name={"description"}
              value={data.description}
              onChange={handleOnChange}
              rows={3}
            />
          </Form.Group>
          <Form.Group className="text-end">
            <Button type="submit">Add Project</Button>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  );
};

export default AddProjectForm;
