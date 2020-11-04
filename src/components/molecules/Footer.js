import React from 'react';
import facebook from 'assets/images/icon-facebook.svg';
import twitter from 'assets/images/icon-twitter.svg';
import bookMarkWhite from 'assets/images/logo-bookmark-white.svg';
import Logo from 'components/atoms/Logo';
import styled from 'styled-components';
const FooterWrapper = styled.div`
  width: 100vw;
  height: 65vh;
  background-color: ${({ theme }) => theme.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.6rem;
  margin: 2rem 0;
`;

const LinksWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconsWrpper = styled.div`
  margin-top: 3rem;
`;

const Icon = styled.img`
  width: 3.5rem;
  margin: 0 3rem;
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
