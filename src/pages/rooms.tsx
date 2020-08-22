import React, { useState, useEffect } from 'react';
import { Button } from '@paljs/ui/Button';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { Link } from 'gatsby';

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
        <Row>
          <Col breakPoint={{ xs: 12, md: 6 }}>
            {loading ? <div>Loading...</div> : null}
            <div>JOIN A ROOM</div>
            {fetchedData.map((room) => (
              <Card key={room.id}>
                <CardBody>
                  <div>Room: {room.name}</div>
                  <Link to={`/chosenRoom`} state={{ roomName: `${room.name}` }}>
                    click to open
                  </Link>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </>
    );
  }
}
export default RoomsHomepage;
