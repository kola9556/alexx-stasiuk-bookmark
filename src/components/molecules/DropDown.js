import React from 'react';
import facebook from 'assets/images/icon-facebook.svg';
import twitter from 'assets/images/icon-twitter.svg';
import bookMark from 'assets/images/logo-bookmark.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(37, 43, 70, 0.92);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  transform: translate(${({ isVisible }) => (isVisible ? '0, -3' : '0, -100vh')});
  transition: transform 0.75s ease-in-out;
`;

const StyledLogo = styled.img`
  position: relative;
  top: 2rem;
  right: 8rem;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(179deg) brightness(104%) contrast(102%);
`;

const LinksWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNavLink = styled.a`
  width: 85vw;
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.6rem;
  padding: 2rem 0;
  border-bottom: 2px solid grey;
  text-align: center;
`;

const Line = styled.div`
  width: 85vw;
  height: 2px;
  border-bottom: 2px solid grey;
`;

const LoginButton = styled.button`
  margin-top: 2rem;
  width: 85vw;
  height: 4rem;
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.4rem;
  background: transparent;
  border: 4px solid white;
  outline: none;
  border-radius: 0.5rem;

  :hover {
    background-color: ${({ theme }) => theme.lightRed};
    border: 4px solid ${({ theme }) => theme.lightRed};
  }
`;

const IconsWrpper = styled.div`
  position: relative;
  top: 23rem;
`;

const Icon = styled.img`
  width: 2.5rem;
  margin: 0 2rem;

  :hover {
    filter: invert(47%) sepia(18%) saturate(1826%) hue-rotate(314deg) brightness(99%) contrast(108%);
  }
`;

const DropDown = ({ isVisible }) => {
  return (
    <DropWrapper isVisible={isVisible}>
      <StyledLogo src={bookMark} />
      <LinksWrapper>
        <Line />
        <StyledNavLink>features</StyledNavLink>
        <StyledNavLink>pricing</StyledNavLink>
        <StyledNavLink>contact</StyledNavLink>
      </LinksWrapper>
      <LoginButton>login</LoginButton>
      <IconsWrpper>
        <Icon src={facebook} />
        <Icon src={twitter} />
      </IconsWrpper>
    </DropWrapper>
  );
};

DropDown.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default DropDown;
