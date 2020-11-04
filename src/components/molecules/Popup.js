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
  right: 0;
  margin: 6rem 0 10rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: white;
`;

const StyledImage = styled.img`
  margin-top: 1rem;
  width: 50vw;
  margin-bottom: 2rem;
`;

const StyledBlueShape = styled.div`
  height: 33vh;
  width: 77vw;
  position: absolute;
  top: 137rem;
  left: 0;
  border-radius: 0 0 8rem 0;
  background-color: ${({ theme }) => theme.lightBlue};
  z-index: -100;
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
      <StyledBlueShape />
      <StyledSecondHeader>Inteligent search</StyledSecondHeader>
      <StyledPara>
        Our powerful search feature will help you find saved sites in no time at all. No need to
        trawl through all of your bookmarks.
      </StyledPara>
      <StyledButton buttonColor="blue">More Info</StyledButton>
    </CardWrapper>
  );
};

export default Popup;
