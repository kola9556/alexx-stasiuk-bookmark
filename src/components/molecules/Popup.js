import React, { useEffect, useRef } from 'react';
import speedy from 'assets/images/illustration-features-tab-2.svg';
import x from 'assets/images/x-symbol.svg';
import Button from 'components/atoms/Button';
import StyledPara from 'components/atoms/StyledPara';
import StyledSecondHeader from 'components/atoms/StyledSecondHeader';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 85vw;
  position: fixed;
  right: 2rem;
  margin: 6rem 0 10rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 1200px) {
    width: 65vw;
    flex-direction: row;
    height: 40vh;
    bottom: 0rem;
  }
`;

const StyledImage = styled.img`
  margin-top: 1rem;
  width: 50vw;
  margin-bottom: 2rem;

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

const CloseButton = styled.button`
  position: relative;
  top: 2rem;
  right: 13rem;
  background-image: url(${x});
  background-size: 80%;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media (min-width: 1200px) {
    top: -12rem;
    right: 6rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
    justify-content: center;
    width: 40%;
    margin-left: 8rem;
  }
`;

const PopStyledPara = styled(StyledPara)`
  text-align: center;
  margin: 0 1rem;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const Popup = () => {
  const myPop = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      myPop.current.style.display = 'flex';
    }, 5000);
  });

  const handleClose = () => {
    myPop.current.style.display = 'none';
  };
  return (
    <CardWrapper ref={myPop}>
      <CloseButton onClick={handleClose}>&times;</CloseButton>
      <StyledImage src={speedy} />
      <ContentWrapper>
        <StyledSecondHeader>Inteligent search</StyledSecondHeader>
        <PopStyledPara>
          Our powerful search feature will help you find saved sites in no time at all. No need to
          trawl through all of your bookmarks.
        </PopStyledPara>
        <StyledButton buttonColor="blue">More Info</StyledButton>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Popup;
