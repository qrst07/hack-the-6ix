import React, { useState, useEffect } from 'react';
import { Button } from '@paljs/ui/Button';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { Link } from 'gatsby';

const ChosenRoom = ({ location }) => {
  if (location.state.roomName) {
    return <div>room: {location.state.roomName}</div>;
  }
};

export default ChosenRoom;
