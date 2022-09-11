import React, {useState} from "react";
import icon from "../src/images/icon.png";
import {Button, Form, Modal, Container, Nav, Navbar} from 'react-bootstrap';

const Navbars = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };  

  const formLogin = (e) => {
    e.preventDefault();
    alert(
      `Email ${data.email}. Password ${data.password}`
    );
  };  

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>SELAMAT DATANG USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formLogin}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                name="password"
                value={data.password}
                onChange={InputEvent}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Modal.Footer>
      </Modal>

    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" id="navbar">
      <Container style={{ paddingTop: '20px', marginTop: '-8px', paddingBottom: '30px' }}>
        <Nav.Link className="navbar-brand" href="#header-scroll"><h4 className="text-white" style={{ paddingTop: '5px', fontFamily: 'sans-serif', fontWeight: 'bold'}}>                   <img
                    src={icon} 
                    className="img-fluid animated"
                    alt="Commom img"
                  /> HOME</h4></Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="navbar-brand" href="#about"><h4 style={{ paddingTop: '5px', fontFamily: 'sans-serif', fontWeight: 'bold', color: 'black'}}>ABOUT</h4></Nav.Link>
            <Nav.Link className="navbar-brand" href="#pricing"><h4 style={{ paddingTop: '5px', fontFamily: 'sans-serif', fontWeight: 'bold', color: 'black'}}>PRICING</h4></Nav.Link> 
            <Nav.Link className="navbar-brand" href="#contact"><h4 style={{ paddingTop: '5px', fontFamily: 'sans-serif', fontWeight: 'bold', color: 'black'}}>CONTACT</h4></Nav.Link>                       
            <Button
              activeClassName="menu_active"
              aria-current="page" size="lg"
              variant="outline-info" onClick={handleShow} style={{ paddingRight: '60px', paddingLeft: '60px'}}
            >
              <h6 style={{ paddingTop: '5px', fontFamily: 'sans-serif', fontWeight: 'bold'}}>LOGIN</h6>
            </Button>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navbars;
