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

  @media (min-width: 1200px) {
    margin: 10rem 0 15rem;
    width: 80vw;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledImage = styled.img`
  width: 80vw;
  margin-bottom: 6rem;

  @media (min-width: 1200px) {
    width: 40vw;
  }
`;

const StyledBlueShape = styled.div`
  height: 33vh;
  width: 77vw;
  position: absolute;
  left: 0;
  top: 143rem;
  border-radius: 0 0 8rem 0;
  background-color: ${({ theme }) => theme.lightBlue};
  z-index: -100;

  @media (min-width: 1200px) {
    position: absolute;
    top: 120rem;
    left: 0;
    width: 40vw;
    border-radius: 0 0 12rem 0;
    height: 38vh;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

const FeaturesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    margin-left: 8rem;
  }
`;

const CardStyledPara = styled(StyledPara)`
  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const CardStyledSecondHeader = styled(StyledSecondHeader)`
  @media (min-width: 1200px) {
    text-align: lef;
  }
`;

const Card = ({ displayed, whichCard }) => {
  const handleCardChange = () => {
    switch (whichCard) {
      case 'clickedFirst':
        return (
          <>
            <StyledImage src={simple} />
            <FeaturesContentWrapper>
              <StyledBlueShape />
              <CardStyledSecondHeader>Bookmark in one click</CardStyledSecondHeader>
              <CardStyledPara>
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives
                you complete control over how you manage your favourite sites.
              </CardStyledPara>
              <StyledButton buttonColor="blue">More Info</StyledButton>
            </FeaturesContentWrapper>
          </>
        );
      case 'clickedSecond':
        return (
          <>
            <StyledImage src={speedy} />
            <FeaturesContentWrapper>
              <StyledBlueShape />
              <CardStyledSecondHeader>Inteligent search</CardStyledSecondHeader>
              <CardStyledPara>
                Our powerful search feature will help you find saved sites in no time at all. No
                need to trawl through all of your bookmarks.
              </CardStyledPara>
              <StyledButton buttonColor="blue">More Info</StyledButton>
            </FeaturesContentWrapper>
          </>
        );
      case 'clickedThird':
        return (
          <>
            <StyledImage src={easy} />
            <FeaturesContentWrapper>
              <StyledBlueShape />
              <CardStyledSecondHeader>Share your bookmarks</CardStyledSecondHeader>
              <CardStyledPara>
                Easily share your bookmarks and collections with others. Create a sherable link that
                can send at the click of a button.
              </CardStyledPara>
              <StyledButton buttonColor="blue">More Info</StyledButton>
            </FeaturesContentWrapper>
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
