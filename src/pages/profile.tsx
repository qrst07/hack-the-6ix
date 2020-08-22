import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import ExAvatar from '../images/calvin_and_hobbes.jpeg';

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
  font-size: 20px;
`;

const ClassList = styled.div`
  height: 300px;
  width: 200px;
  background-color: rgb(0, 0, 0, 0.05);
`;

const sampleClasses = ['Algebra', 'English', 'History', 'Science'];

const Profile = () => {
  return (
    <div>
      <SEO title="Profile" keywords={['OAH', 'application', 'react']} />

      <ProfileContainer>
        <Avatar src={ExAvatar} />
        <Name>Calvin &amp; Hobbes</Name>
        <Position>Boss</Position>
        <ClassList>
          {sampleClasses.map((c) => {
            return <Position key={c}>{c}</Position>;
          })}
        </ClassList>
      </ProfileContainer>
    </div>
  );
};
export default Profile;
