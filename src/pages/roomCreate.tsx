import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import { Card, CardBody } from '@paljs/ui/Card';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Link } from 'gatsby';

const CreateCard = styled(Card)`
  height: 400px;
`;

const RoomCreate = () => {
  let [input, setInput] = useState('');
  let [error, setError] = useState('');
  let [success, setSuccess] = useState(false);

  let onCreate = () => {
    var data = JSON.stringify({
      name: input,
    });

    fetch('https://api.daily.co/v1/rooms', {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      }),
      body: data,
    }).then((response) => {
      if (response.ok) {
        setSuccess(true);
        setError('');
      } else {
        setSuccess(false);
        setError('Could not create your room. A room with that name may already exist.');
        return Promise.reject(response);
      }
    });
  };
  return (
    <div>
      <Row>
        <h1>Create a Room</h1>
      </Row>
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <CreateCard>
            <CardBody>
              <form>
                <h6>Enter your room name:</h6>
                <InputGroup>
                  <input
                    type="email"
                    placeholder="Room Name"
                    value={input}
                    onInput={(e) => {
                      setInput(e.target.value);
                      setError('');
                      setSuccess(false);
                    }}
                  />
                </InputGroup>
                {error ? <div>{error}</div> : null}
                <Button
                  status="Success"
                  type="button"
                  shape="SemiRound"
                  onClick={() => {
                    onCreate();
                  }}
                >
                  Create
                </Button>
                {success ? (
                  <div>
                    <div>Your room was successfully created!</div>
                    <Link to={`/chosenRoom`} state={{ roomName: `${input}` }}>
                      Take me there
                    </Link>
                  </div>
                ) : null}
              </form>
            </CardBody>
          </CreateCard>
        </Col>
      </Row>
    </div>
  );
};

export default RoomCreate;
