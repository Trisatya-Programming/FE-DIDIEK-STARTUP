import React, { useState } from "react";
import {Button, Form, Modal, Row, Col} from 'react-bootstrap';

const Card = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>SELAMAT DATANG USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="col-md-4 col-12 mx-auto">
        <div className="card animated">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold" style={{fontFamily: 'sans-serif', fontWeight: 'bold'}}>{props.title}</h5>
            <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'sans-serif'}}>
              {props.description}
            </p>
            <Row>
              <Col>
                <h4 style={{fontFamily: 'sans-serif'}}>
                  {props.harga}
                </h4>                            
              </Col>
              <Col>
                <Button onClick={handleShow} className="btn btn-primary" style={{fontFamily: 'sans-serif'}}>
                  BELI SEKARANG
                </Button>  
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
