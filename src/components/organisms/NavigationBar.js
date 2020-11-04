import React from 'react';
import bookMarkLogo from 'assets/images/logo-bookmark.svg';
import Hamburger from 'components/atoms/Hamburger';
import Logo from 'components/atoms/Logo';
import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background-color: white;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const LogoWrapper = styled.div`
  margin-left: 2rem;

  @media (min-width: 1200px) {
    margin-left: 5rem;
  }
`;

const LinksWrapper = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: inline;
    margin-right: 5rem;
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
    cursor: pointer;
  }

  :hover {
    color: ${({ theme }) => theme.lightRed};
  }
`;

const LoginButton = styled.button`
  cursor: pointer;
  width: 12rem;
  height: 4rem;
  color: white;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.4rem;
  background: ${({ theme }) => theme.lightRed};
  outline: none;
  border-radius: 1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border: none;
  margin-left: 2rem;

  :hover {
    background-color: white;
    border: 2px solid ${({ theme }) => theme.lightRed};
    color: ${({ theme }) => theme.lightRed};
  }
`;

const NavigationBar = () => {
  return (
    <>
      <NavWrapper>
        <LogoWrapper>
          <Logo logo={bookMarkLogo} />
        </LogoWrapper>
        <LinksWrapper>
          <StyledLink to="/">features</StyledLink>
          <StyledLink to="/">pricing</StyledLink>
          <StyledLink to="/">contact</StyledLink>
          <LoginButton>login</LoginButton>
        </LinksWrapper>
        <Hamburger />
      </NavWrapper>
    </>
  );
};

export default NavigationBar;
