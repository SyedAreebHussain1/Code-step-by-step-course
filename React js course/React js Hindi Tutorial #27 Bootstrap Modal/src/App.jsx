import "./App.css";
import React from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Modals from "./Component/Home/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand style={{ color: "white" }} href="#">
              Navbar scroll
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" style={{ color: "white" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" style={{ color: "white" }}>
                  Link
                </Nav.Link>
                <NavDropdown
                  style={{ color: "white" }}
                  title="options"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" style={{ color: "white" }} disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Modals />
        </div>
      </div>
    );
  }
}
export default App;
