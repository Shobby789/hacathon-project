import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ _id, title, description, image, url }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} id={_id}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="fw-semibold">{title}</Card.Title>
          <Card.Text className="text-secondary">{description}</Card.Text>
          <Link to={url} target="_blank">
            View Project
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
