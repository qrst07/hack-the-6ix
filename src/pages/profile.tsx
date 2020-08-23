import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import ExAvatar from '../images/calvin_and_hobbes.jpeg';
import PlusSign from './images/OCR-A_char_Plus_Sign.png';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin: auto;
`;

const Name = styled.h3`
  margin-bottom: 0px;
`;

const Position = styled.p`
  margin-top: 5px;
  font-size: 18px;
`;

const Position1 = styled.p`
  margin-top: 5px;
  margin-left: 10px;
  font-size: 16px;
`;

const ClassList = styled.div`
  flex 1;
  order: 1;
  height: 450px;
  width: 300px;
  background-color: rgb(0, 0, 0, 0.05);
`;

const AboutMe = styled.div`
  flex: 2;
  order: 2;
  height: 450px;
  width: 300px;
  background-color: rgb(0, 0, 0, 0.05);
`;

const Settings = styled.div`
  flex: 3;
  order: 3;
  height: 450px;
  width: 300px;
  background-color: rgb(0, 0, 0, 0.05);
`;

const sampleClasses = ['Algebra', 'English', 'History', 'Science'];
const sampleInfo = ['Name', 'School', 'Graduation Year', 'LinkedIn'];
const sampleSettings = ['Camera', 'Microphone', 'Volume', 'Privacy'];

const Profile = () => {
  return (
    <div>
      <SEO title="Profile" keywords={['OAH', 'application', 'react']} />

      <ProfileContainer>
        <Avatar src={ExAvatar} />
        <Name>Calvin &amp; Hobbes</Name>
        <Position>Student</Position>

        <ClassList>
          <center>
            <h3> Courses</h3>
          </center>
          {sampleClasses.map((c) => {
            return (
              <center>
                <Position key={c}>{c}</Position>
              </center>
            );
          })}
          <center>
            <p>Add Course </p>
          </center>
        </ClassList>

        <AboutMe>
          <center>
            <h3> About Me</h3>
          </center>
          {sampleInfo.map((c) => {
            return <Position1 key={c}>{c}</Position1>;
          })}
        </AboutMe>

        <Settings>
          <center>
            <h3> Settings</h3>
          </center>
          {sampleSettings.map((c) => {
            return <Position1 key={c}>{c}</Position1>;
          })}
        </Settings>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
