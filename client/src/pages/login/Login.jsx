import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp = await res.json();
    console.log("Project add form >> ", resp);
    localStorage.setItem("User", JSON.stringify(resp.data.user));
    navigate("/");
  };
  return (
    <Container fluid className="min-vh-100">
      <div className="min-vh-100 form-container d-flex align-items-center justify-content-center">
        <Form onSubmit={handleSubmit} className="py-5 border w-100 rounded-4">
          <h2 className="mb-4 fw-bold text-center">Login</h2>
          <Form.Group
            className="mb-3 text-start w-100"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              placeholder=""
              className="py-2"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-start w-100"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="text-end mb-3">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Form.Group>
          <Form.Group>
            <Button type="submit" className="w-100 py-2">
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
