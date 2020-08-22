import React, { useRef, useEffect, useState } from 'react';
import DailyIframe from '@daily-co/daily-js';
import styled from 'styled-components';

const Notes = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
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
      showLeaveButton: true,
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
      <body>share this room: {url} </body>
      <iframe
        style={{ width: '100%', height: '50vh', border: 0 }}
        title="Room"
        ref={iframeRef}
        allow="camera; microphone; fullscreen"
      />
      <Notes>notes go here</Notes>
    </div>
  );
};

export default ChosenRoom;
