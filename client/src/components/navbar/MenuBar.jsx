import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MenuBar.css";
import { Link, useNavigate } from "react-router-dom";

function CollapsibleExample() {
  const user = JSON.parse(localStorage.getItem("User"));
  console.log("logged in user >> ", user);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("User");
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="menubar py-3">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-2">
              <Link to={"/"} className="text-decoration-none text-dark">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="mx-2">
              <Link
                to={"/add-project"}
                className="text-decoration-none text-dark"
              >
                Add Project
              </Link>
            </Nav.Link>
            <NavDropdown
              title={user?.name}
              className="fw-semibold mx-2"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link>Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
