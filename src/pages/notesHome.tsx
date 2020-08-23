import React, { useState, useEffect } from 'react';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import SEO from '../components/SEO';
import svg from '../images/undraw_online_learning_ao11.svg';
import 'bootstrap/dist/css/bootstrap.css';
import pic5 from '../images/notes_pic.png';
import pic6 from '../images/h8at73ud6zf41.jpg';
import pic7 from '../images/61d73-trig-equations5.jpg';
import styled from 'styled-components';
import { Form, Card, Button, Tabs, Accordion, Dropdown, Modal } from 'react-bootstrap';

const Notes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>My Notes</h1>
      <br></br>
      <h5>Current Subject: Math</h5>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Change subject
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Math</Dropdown.Item>
          <Dropdown.Item>AP Biology</Dropdown.Item>
          <Dropdown.Item>Chemistry</Dropdown.Item>
          <Dropdown.Item>New Section</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Trigonometry
            <br></br>
            Created on: 05/05/20
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <img src={pic5} />
              <br></br>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Trigonometry
            <br></br>
            Created on: 06/05/20
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <img src={pic6} />
              <br></br>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Linear Algebra
            <br></br>
            Created on: 06/05/20
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <img src={pic7} />
              <br></br>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Algebra
            <br></br>
            Created on: 06/05/20
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <img src={pic5} />
              <br></br>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br></br>
      <Button onClick={handleShow}>Create New Note</Button>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Give your note a title" />
            <Form.Label>Note body</Form.Label>
            <Form.Control as="textarea" placeholder="Write notes here" rows="5" />
          </Form.Group>
          <Button>Upload Image</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Notes;
