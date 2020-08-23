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

const CardLink = styled.a`
  text-decoration: none;
`;

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br></br>
      <CardDeck>
        <Card>
          {/* wrap entire card with anchor and link page*/}
          <CardLink href="/roomCreate">
            <Card.Img variant="top" src={pic4} />
            <Card.Body>
              <Card.Title>Create a Channel ⚡</Card.Title>
              <Card.Text>
                Start a Channel and connect with your friends and million other students in real time!
              </Card.Text>
            </Card.Body>
            <br></br>
          </CardLink>
        </Card>

        <Card>
          <CardLink href="/notesHome">
            <br></br>
            <Card.Img variant="top" src={pic2} />
            <br></br>
            <Card.Body>
              <Card.Title>Explore Notes 📝</Card.Title>

              <Card.Text> View thousands of transcribed lectures and notes from students across the world</Card.Text>
            </Card.Body>
            <br></br>
            <br></br>
          </CardLink>
        </Card>
        <Card>
          <CardLink href="/rooms">
            <br></br>
            <br></br>
            <br></br>
            <Card.Img variant="top" src={pic3} />
            <Card.Body>
              <Card.Title>Join a Channel🌀</Card.Title>
              <Card.Text>Browse from our extensive list of channels covering many subjects</Card.Text>
            </Card.Body>
            <br></br>
            <br></br>
            <br></br>
          </CardLink>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Home;
