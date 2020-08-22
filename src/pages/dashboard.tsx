import React, { useState, useEffect } from 'react';
import { Button } from '@paljs/ui/Button';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import styled from 'styled-components';
import SEO from '../components/SEO';

class Home extends React.Component {
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
        <SEO title="Home" keywords={['OAH', 'application', 'react']} />
        <Row>
          <Col breakPoint={{ xs: 12, md: 6 }}>
            <div>load</div>
            {fetchedData.map((room) => (
              <Card key={room.id}>
                <CardBody>Room: {room.name}</CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </>
    );
  }
}
export default Home;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
