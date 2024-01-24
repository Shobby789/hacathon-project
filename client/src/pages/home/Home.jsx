import React, { useEffect, useState } from "react";
import "./Home.css";
import Button from "../../components/button/Button";
import { Container } from "react-bootstrap";
import ProjectCard from "../../components/card/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState(null);
  const fetchProjects = async () => {
    const res = await fetch("http://localhost:1000/api/get-projects", {
      method: "GET",
    });

    const resp = await res.json();
    console.log("Projects >> ", projects);
    setProjects(resp.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <Container fluid className="min-vh-100 px-0">
      <Container
        fluid
        className="home-hero d-flex justify-content-center align-items-center bg-light py-5 text-center"
      >
        <h1 className="fw-semibold">Welcome To Home Page</h1>
      </Container>
      <Container className="pt-5 mb-3">
        <h3 className="fw-semibold">Projects</h3>
      </Container>
      <Container className="border border-seconcdary d-flex flex-wrap justify-content-start align-items-center gap-3 pt-3 pb-5 ">
        {projects?.map((p) => {
          return (
            <ProjectCard
              key={p._id}
              title={p.project_title}
              image={p.project_url}
              description={p.description}
              url={p.project_url}
            />
          );
        })}
      </Container>
    </Container>
  );
}
