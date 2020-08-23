import React, { useRef, useEffect, useState } from 'react';
import DailyIframe from '@daily-co/daily-js';
import styled from 'styled-components';
import { Form, Card, Button, CardDeck, CardColumns, Container, Row, Col, Modal } from 'react-bootstrap';

const Notes = styled.div`
  display: flex;
  height: 50vh;
  width: 100%;
  background-color: #fffacd;
  border-radius: 15px;
`;

const AddButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
`;

const ChosenRoom = ({ location }) => {
  const url = `https://notate.daily.co/${location && location.state && location.state.roomName}`;
  const [init, setInit] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iframeRef = useRef();
  const dailyRef = useRef();
  const joinedRef = useRef();

  if (location && location.state && location.state.roomName && !init) {
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

  useEffect(() => {
    if (location) {
      setName(location && location.state && location.state.roomName);
    }
  }, [init]);

  return (
    <div>
      <h1>Channel: {name}</h1>
      <h6>Share this channel: {url} </h6>
      <br></br>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <iframe
              style={{ width: '100%', height: '50vh', border: 0 }}
              title="Channel"
              ref={iframeRef}
              allow="camera; microphone; fullscreen"
            />
          </Col>
          <Col xs={6} md={4}>
            <Notes style={{ align: 'center', color: 'red' }}>{name} Notes</Notes>
            <AddButton onClick={handleShow}>Add current session to notes</AddButton>
            <AddButton>View previous notes from this channel</AddButton>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add current session to notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>How much of the session would you like to save to notes?</div>
          <Form.Group>
            <Form.Control as="select">
              <option>10 minutes</option>
              <option>30 minutes</option>
              <option>60 minutes</option>
              <option>All time</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save To Notes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChosenRoom;
