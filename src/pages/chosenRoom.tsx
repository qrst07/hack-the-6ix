import React, { useRef, useEffect, useState } from 'react';
import DailyIframe from '@daily-co/daily-js';
import styled from 'styled-components';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';

const Notes = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  border-radius: 32px;
  padding: 30px;
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
      <Row>
        <h1>Room: {location.state.roomName}</h1>
      </Row>
      <Row>
        <h6>share this room: {url} </h6>
      </Row>
      <Row>
        <Col breakPoint={{ xs: 12, md: 8 }}>
          <iframe
            style={{ width: '100%', height: '100vh', border: 0 }}
            title="Room"
            ref={iframeRef}
            allow="camera; microphone; fullscreen"
          />
        </Col>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Notes>notes go here</Notes>
        </Col>
      </Row>
    </div>
  );
};

export default ChosenRoom;
