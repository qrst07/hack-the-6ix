import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO title="Home" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Input status</header>
            <CardBody>
              <div>here</div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Home;
