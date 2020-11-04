import React from 'react';
import hero from 'assets/images/illustration-hero.svg';
import BlueShape from 'components/atoms/BlueShape';
import styled from 'styled-components';

const TopWrapper = styled.div`
  width: 100%;
  height: 55vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

const HeroImg = styled.img`
  width: 100%;
`;

const HeroSection = () => (
  <>
    <TopWrapper>
      <HeroImg src={hero} />
      <BlueShape />
    </TopWrapper>
  </>
);

export default HeroSection;
