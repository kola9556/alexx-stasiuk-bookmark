import React from 'react';
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

  @media (min-width: 1200px) {
    margin: 0;
    margin-top: 15rem;
  }
`;

const ButtonsWrapper = styled.div`
  margin: 3rem 0 10rem;
`;

const Line = styled.div`
  width: 30rem;
  height: 2rem;
  margin-top: 3rem;
  border-bottom: 2px solid #d1cfcf;

  @media (min-width: 1200px) {
    visibility: hidden;
  }
`;

const MarginStyledSecondHeader = styled(StyledSecondHeader)`
  margin-top: 12rem;
`;

const HeroSecWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    margin: 0 5rem;
    margin-bottom: 10rem;
    align-items: center;
    justify-content: center;
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    margin-left: 10rem;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
  }
`;

const AppStyledTitle = styled(StyledTitle)`
  @media (min-width: 1200px) {
    width: 50%;
    text-align: left;
  }
`;

const AppStyledPara = styled(StyledPara)`
  @media (min-width: 1200px) {
    text-align: left;
    width: 70%;
  }
`;

const FeaturesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    width: 60vw;
  }
`;

const FeaturesStyledPara = styled(StyledPara)`
  @media (min-width: 1200px) {
    width: 60%;
  }
`;

const ExtensionsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    width: 60vw;
    margin-bottom: 7rem;
  }
`;

const ExtensionsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    width: 50vw;
    margin-bottom: 7rem;
  }
`;

const FaqStyledPara = styled(StyledPara)`
  @media (min-width: 1200px) {
    width: 70%;
  }
`;

function App() {
  return (
    <>
      <MainTemplate>
        <>
          <Popup />
          <NavigationBar />
          <ContenWrapper>
            <HeroSecWrapper>
              <HeroSection />
              <HeroContentWrapper>
                <AppStyledTitle>A Simple Bookmark Manager</AppStyledTitle>
                <AppStyledPara>
                  A clean and simple interface to organize your favourite websites. Open a new
                  browser tab and see your site load instantly. Try it for free.
                </AppStyledPara>
                <ButtonsWrapper>
                  <Button buttonColor="blue">Get it on Chrome</Button>
                  <Button buttonColor="white">Get it on Firefox</Button>
                </ButtonsWrapper>
              </HeroContentWrapper>
            </HeroSecWrapper>
            <FeaturesSection>
              <StyledSecondHeader>Features</StyledSecondHeader>
              <FeaturesStyledPara>
                Our aim is to make it quick and easy for you to access your favourite website. Your
                bookmark sync between your devices so you can access them on the go.
              </FeaturesStyledPara>
              <Line />
              <AnimCardChanger />
            </FeaturesSection>
            <ExtensionsSection>
              <StyledSecondHeader>Download the extension</StyledSecondHeader>
              <FeaturesStyledPara>
                We‘ve got more browsers in the pipeline. Please do let us know if you‘ve got a
                favourite you‘d like us to prioritize.
              </FeaturesStyledPara>
              <ExtensionsCardWrapper>
                <ExtensionCard type="chrome" />
                <ExtensionCard type="firefox" />
                <ExtensionCard type="opera" />
              </ExtensionsCardWrapper>
            </ExtensionsSection>
            <FaqSection>
              <MarginStyledSecondHeader>Frequently Asked Questions</MarginStyledSecondHeader>
              <FaqStyledPara>
                Here are some of our FAQs. If you have any other questions you‘d like answered pease
                feel free to email us.
              </FaqStyledPara>
              <Collapse />
              <Button buttonColor="blue">More Info</Button>
            </FaqSection>
          </ContenWrapper>
          <ContactSection />
          <Footer />
        </>
      </MainTemplate>
    </>
  );
}

export default App;
