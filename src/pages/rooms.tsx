import React, { useState, useEffect } from 'react';

import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { Link } from 'gatsby';
import { Form, Card, Button, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const rowStyle = { backgroundColor: '#c8e6c9', height: '70px', padding: '5px 0' };
class RoomsHomepage extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  };
  // // fetch all rooms
  componentDidMount() {
    fetch('https://api.daily.co/v1/rooms', {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          fetchedData: json.data,
          loading: false,
        });
      });
  }

  render() {
    const { loading, fetchedData } = this.state;

    return (
      <>
        <SEO title="Rooms Homepage" keywords={['OAH', 'application', 'react']} />
        <div>
          <h1>Join a room</h1>
        </div>

        <Row>
          <br></br>
          {loading ? <div>Loading...</div> : null}
          {fetchedData.map((room) => (
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>
                  Learn more about {room.name}
                  <br></br>
                  <br></br>
                  <Button variant="primary">
                    <Link
                      to={`/chosenRoom`}
                      style={{ textDecoration: 'none', color: 'white' }}
                      state={{ roomName: `${room.name}` }}
                    >
                      Click here
                    </Link>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </>
    );
  }
}
export default RoomsHomepage;
