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
`;

const HeroImg = styled.img`
  width: 90vw;
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
