import React, { useRef, useEffect, useState } from 'react';
import DailyIframe from '@daily-co/daily-js';
import styled from 'styled-components';
<<<<<<< HEAD
import { Form, Card, Button, CardDeck, CardColumns, Container, Row, Col } from 'react-bootstrap';

const Notes = styled.div`
  display: flex;
  height: 50vh;
  width: 100%;
  background-color: #fffacd;
  border-radius: 15px;
=======
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';

const Notes = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  border-radius: 32px;
  padding: 30px;
>>>>>>> 961947a940dc8012d91492725e818428503d5841
`;

const ChosenRoom = ({ location }) => {
  const url = `https://notate.daily.co/${location.state.roomName}`;
  const [init, setInit] = useState(false);
  const iframeRef = useRef();
  const dailyRef = useRef();
  const joinedRef = useRef();

  if (location.state.roomName && !init) {
    setInit(true);
  }

  useEffect(() => {
    dailyRef.current = DailyIframe.wrap(iframeRef.current, {
      showLeaveButton: false,
    });
    dailyRef.current.on('left-meeting', () => {
      joinedRef.current = false;
    });
    dailyRef.current.on('joining-meeting', () => {
      joinedRef.current = true;
    });
    console.log('mounted');
    return () => {
      dailyRef.current.destroy();
      console.log('unmount');
    };
  }, []);
  useEffect(() => {
    (async () => {
      if (joinedRef.current) {
        // This is needed due to it never returning
        // if there wasn't a meeting joined first...
        await dailyRef.current.leave();
      }
      if (!url) {
        console.error('please set an url!');
        return;
      }
      await dailyRef.current.join({ url });
    })();
  }, [url, init]);

  return (
    <div>

      <h1>Room: {location.state.roomName}</h1>
      <body>Share this room: {url} </body>
      <br></br>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <iframe
              style={{ width: '100%', height: '50vh', border: 0 }}
              title="Room"
              ref={iframeRef}
              allow="camera; microphone; fullscreen"
            />
          </Col>
          <Col xs={6} md={4}>
            <Notes style={{ align: 'center', color: 'red' }}>{location.state.roomName} Notes</Notes>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChosenRoom;
