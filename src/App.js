import React from 'react';
import HeroSection from 'components/molecules/HeroSection';
import NavigationBar from 'components/organisms/NavigationBar';
import styled from 'styled-components';

import MainTemplate from './templates/MainTemplate';

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 3rem;
  color: black;
`;
const ContenWrapper = styled.div`
  margin: 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
function App() {
  return (
    <>
      <MainTemplate>
        <>
          <NavigationBar />
          <HeroSection />
          <ContenWrapper>
            <Title>A Simple Bookmark Manager</Title>
          </ContenWrapper>
        </>
      </MainTemplate>
    </>
  );
}

export default App;
