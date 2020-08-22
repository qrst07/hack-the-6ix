import React, { useState, useEffect } from 'react';
import { Button } from '@paljs/ui/Button';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import styled from 'styled-components';
import SEO from '../components/SEO';

class Home extends React.Component {
  render() {
    return (
      <>
        <SEO title="Home" keywords={['OAH', 'application', 'react']} />
        <Row>
          <Col breakPoint={{ xs: 12, md: 6 }}>
            <div>home</div>
          </Col>
        </Row>
      </>
    );
  }
}
export default Home;
