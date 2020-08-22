import React, { useState, useEffect } from 'react';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import SEO from '../components/SEO';
import svg from '../images/undraw_online_learning_ao11.svg';
import 'bootstrap/dist/css/bootstrap.css';
import pic2 from '../images/undraw_taking_notes_tjaf.png';
import pic3 from '../images/undraw_group_hangout_5gmq.png';
import pic4 from '../images/undraw_online_learning_ao11.png';

import styled from 'styled-components';
import { Form, Card, Button, CardDeck } from 'react-bootstrap';
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
      <h1>Home Page</h1>
      <br></br>
      <CardDeck>
        <Card>
          {/* wrap entire card with anchor and link page*/}
          <a href="/rooms">
            <Card.Img variant="top" src={pic4} />
            <Card.Body>
              <Card.Title>Start a Call</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </a>
        </Card>

        <Card>
          <Card.Img variant="top" src={pic2} />
          <br></br>
          <Card.Body>
            <Card.Title>Explore Notes</Card.Title>

            <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={pic3} />
          <br></br>
          <br></br>
          <br></br>

          <Card.Body>
            <Card.Title>Join a Call</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Home;
