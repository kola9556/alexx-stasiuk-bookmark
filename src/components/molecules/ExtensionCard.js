import React from 'react';
import dots from 'assets/images/bg-dots.svg';
import chrome from 'assets/images/logo-chrome.svg';
import firefox from 'assets/images/logo-firefox.svg';
import opera from 'assets/images/logo-opera.svg';
import Button from 'components/atoms/Button';
import StyledPara from 'components/atoms/StyledPara';
import StyledSecondHeader from 'components/atoms/StyledSecondHeader';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ExtCardWrapper = styled.div`
  width: 28rem;
  height: 38rem;
  margin-top: 4rem;
  border-radius: 3rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    position: relative;

    ${({ type }) =>
      type === 'chrome' &&
      css`
        right: 2rem;
      `}

    ${({ type }) =>
      type === 'firefox' &&
      css`
        top: 3rem;
      `}

      
    ${({ type }) =>
      type === 'opera' &&
      css`
        top: 6rem;
        left: 2rem;
      `}
  }
`;

const Icon = styled.img``;

const StyledForCardSecondHeader = styled(StyledSecondHeader)`
  font-size: 2.3rem;
  margin-bottom: 1rem;
`;

const Dots = styled.img`
  width: 100%;
  margin: 3rem 0;
`;
const StyledButton = styled(Button)`
  width: 22rem;
`;

const ExtensionCard = ({ type }) => {
  const handleWhichCard = () => {
    switch (type) {
      case 'chrome':
        return (
          <>
            <Icon src={chrome} />
            <StyledForCardSecondHeader>Add to Chrome</StyledForCardSecondHeader>
            <StyledPara>Minimum version 62</StyledPara>
            <Dots src={dots} />
            <StyledButton buttonColor="blue">Add & Install Extension</StyledButton>
          </>
        );
      case 'firefox':
        return (
          <>
            <Icon src={firefox} />
            <StyledForCardSecondHeader>Add to Firefox</StyledForCardSecondHeader>
            <StyledPara>Minimum version 55</StyledPara>
            <Dots src={dots} />
            <StyledButton buttonColor="blue">Add & Install Extension</StyledButton>
          </>
        );
      case 'opera':
        return (
          <>
            <Icon src={opera} />
            <StyledForCardSecondHeader>Add to Opera</StyledForCardSecondHeader>
            <StyledPara>Minimum version 46</StyledPara>
            <Dots src={dots} />
            <StyledButton buttonColor="blue">Add & Install Extension</StyledButton>
          </>
        );
      default:
        return <></>;
    }
  };
  return <ExtCardWrapper type={type}>{handleWhichCard()}</ExtCardWrapper>;
};

ExtensionCard.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ExtensionCard;
