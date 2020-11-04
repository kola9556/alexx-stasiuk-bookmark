import React from 'react';
import facebook from 'assets/images/icon-facebook.svg';
import twitter from 'assets/images/icon-twitter.svg';
import bookMarkWhite from 'assets/images/logo-bookmark-white.svg';
import Logo from 'components/atoms/Logo';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 100%;
  height: 65vh;
  background-color: ${({ theme }) => theme.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    height: 10vh;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.6rem;
  margin: 2rem 0;

  @media (min-width: 1200px) {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.3rem;
    margin: 0 1rem;
  }

  :hover {
    color: ${({ theme }) => theme.lightRed};
  }
`;

const LinksWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    position: relative;
    right: 15rem;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
  }
`;

const IconsWrpper = styled.div`
  margin-top: 3rem;
  @media (min-width: 1200px) {
    margin: 0;
  }
`;

const Icon = styled.img`
  width: 3.5rem;
  margin: 0 3rem;
  @media (min-width: 1200px) {
    width: 2.5rem;
    margin: 0 1.5rem;
  }

  :hover {
    filter: invert(47%) sepia(18%) saturate(1826%) hue-rotate(314deg) brightness(99%) contrast(108%);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo logo={bookMarkWhite} />
      <LinksWrapper>
        <StyledLink to="/">features</StyledLink>
        <StyledLink to="/">pricing</StyledLink>
        <StyledLink to="/">contact</StyledLink>
      </LinksWrapper>
      <IconsWrpper>
        <Icon src={facebook} />
        <Icon src={twitter} />
      </IconsWrpper>
    </FooterWrapper>
  );
};

export default Footer;
