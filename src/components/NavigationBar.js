import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container, NavDropdown, Nav, Form, Button } from 'react-bootstrap'
import About from '../components/About/About'
import Home from '../components/Home/Home'
import Hobies from '../components/Skills/Hobies'
import Projects from '../components/Skills/Projects'
import Contact from '../components/Contact/Contact'

const NavigationBar = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">AufaPort</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                <NavDropdown title="Skill" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to={"/Hobies"}>Hobies</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/Projects"}>
                    Projects
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/Contact"}>
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="primary">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Hobies" element={<Hobies />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default NavigationBar