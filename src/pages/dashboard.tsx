import { Button } from '@paljs/ui/Button';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const Home = () => {
  // TEMPORARY: create room to test
  var data = JSON.stringify({
    name: 'testthis',
  });

  var xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open('POST', 'https://api.daily.co/v1/rooms');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.setRequestHeader('authorization', `Bearer ${process.env.API_KEY}`);

  xhr.send(data);

  // const sendRequest = () => {

  // }

  return (
    <>
      <SEO title="Home" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>rooms</header>
            <CardBody>
              <Button>click</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Home;
