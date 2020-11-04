import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button';
import StyledPara from 'components/atoms/StyledPara';
import StyledSecondHeader from 'components/atoms/StyledSecondHeader';
import StyledTitle from 'components/atoms/StyledTitle';
import ExtensionCard from 'components/molecules/ExtensionCard';
import Footer from 'components/molecules/Footer';
import HeroSection from 'components/molecules/HeroSection';
import Popup from 'components/molecules/Popup';
import AnimCardChanger from 'components/organisms/AnimCardChanger';
import Collapse from 'components/organisms/Collapse';
import ContactSection from 'components/organisms/ContactSection';
import NavigationBar from 'components/organisms/NavigationBar';
import styled from 'styled-components';

import MainTemplate from './templates/MainTemplate';

const ContenWrapper = styled.div`
  margin: 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const ButtonsWrapper = styled.div`
  margin: 3rem 0 10rem;
`;

const Line = styled.div`
  width: 30rem;
  height: 2rem;
  margin-top: 3rem;
  border-bottom: 2px solid #d1cfcf;
`;

const MarginStyledSecondHeader = styled(StyledSecondHeader)`
  margin-top: 12rem;
`;

function App() {
  return (
    <>
      <MainTemplate>
        <>
          <Popup />
          <NavigationBar />
          <HeroSection />
          <ContenWrapper>
            <StyledTitle>A Simple Bookmark Manager</StyledTitle>
            <StyledPara>
              A clean and simple interface to organize your favourite websites. Open a new browser
              tab and see your site load instantly. Try it for free.
            </StyledPara>
            <ButtonsWrapper>
              <Button buttonColor="blue">Get it on Chrome</Button>
              <Button buttonColor="white">Get it on Firefox</Button>
            </ButtonsWrapper>
            <StyledSecondHeader>Features</StyledSecondHeader>
            <StyledPara>
              Our aim is to make it quick and easy for you to access your favourite website. Your
              bookmark sync between your devices so you can access them on the go.
            </StyledPara>
            <Line />
            <AnimCardChanger />
            <StyledSecondHeader>Download the extension</StyledSecondHeader>
            <StyledPara>
              We‘ve got more browsers in the pipeline. Please do let us know if you‘ve got a
              favourite you‘d like us to prioritize.
            </StyledPara>
            <ExtensionCard type="chrome" />
            <ExtensionCard type="firefox" />
            <ExtensionCard type="opera" />
            <MarginStyledSecondHeader>Frequently Asked Questions</MarginStyledSecondHeader>
            <StyledPara>
              Here are some of our FAQs. If you have any other questions you‘d like answered pease
              feel free to email us.
            </StyledPara>
            <Collapse />
            <Button buttonColor="blue">More Info</Button>
            <ContactSection />
          </ContenWrapper>
          <Footer />
        </>
      </MainTemplate>
    </>
  );
}

export default App;
