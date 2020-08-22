import React from 'react';
import SEO from '../components/SEO';
import svg from '../images/undraw_online_learning_ao11.svg';

import styled from 'styled-components';
import { Form, Card, Button } from 'react-bootstrap';
const HomeEdit = styled.div`
  display: flex;
  background-color: grey;
  border-radius: 10px;
  allign-content: center;
  height: 100px;
  padding: 100px;
  color: white;
`;
const Home = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Welcome</Card.Header>
        <Card.Body>
          <Card.Title>Video Conferencing Software</Card.Title>
          <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          <br />
          <img src={svg} />
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <SEO title="Home" keywords={['OAH', 'application', 'react']} />

      <h1>Sign Up</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Home;
