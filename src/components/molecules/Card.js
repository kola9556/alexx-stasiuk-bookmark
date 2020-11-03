import React from 'react';
import simple from 'assets/images/illustration-features-tab-1.svg';
import speedy from 'assets/images/illustration-features-tab-2.svg';
import easy from 'assets/images/illustration-features-tab-3.svg';
import Button from 'components/atoms/Button';
import StyledPara from 'components/atoms/StyledPara';
import StyledSecondHeader from 'components/atoms/StyledSecondHeader';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CardWrapper = styled.div`
  margin: 6rem 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ displayed }) =>
    !displayed &&
    css`
      display: none;
    `}
`;

const StyledImage = styled.img`
  width: 80vw;
  margin-bottom: 6rem;
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

const Card = ({ displayed, whichCard }) => {
  const handleCardChange = () => {
    switch (whichCard) {
      case 'clickedFirst':
        return (
          <>
            <StyledImage src={simple} />
            <StyledBlueShape />
            <StyledSecondHeader>Bookmark in one click</StyledSecondHeader>
            <StyledPara>
              Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
              complete control over how you manage your favourite sites.
            </StyledPara>
            <StyledButton buttonColor="blue">More Info</StyledButton>
          </>
        );
      case 'clickedSecond':
        return (
          <>
            <StyledImage src={speedy} />
            <StyledBlueShape />
            <StyledSecondHeader>Inteligent search</StyledSecondHeader>
            <StyledPara>
              Our powerful search feature will help you find saved sites in no time at all. No need
              to trawl through all of your bookmarks.
            </StyledPara>
            <StyledButton buttonColor="blue">More Info</StyledButton>
          </>
        );
      case 'clickedThird':
        return (
          <>
            <StyledImage src={easy} />
            <StyledBlueShape />
            <StyledSecondHeader>Share your bookmarks</StyledSecondHeader>
            <StyledPara>
              Easily share your bookmarks and collections with others. Create a sherable link that
              can send at the click of a button.
            </StyledPara>
            <StyledButton buttonColor="blue">More Info</StyledButton>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <CardWrapper displayed={displayed}>{handleCardChange()}</CardWrapper>
    </>
  );
};

Card.propTypes = {
  displayed: PropTypes.bool.isRequired,
  whichCard: PropTypes.string.isRequired,
};

export default Card;
