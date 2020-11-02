import React from 'react';
import bookMarkLogo from 'assets/images/logo-bookmark.svg';
import Hamburger from 'components/atoms/Hamburger';
import Logo from 'components/atoms/Logo';
import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 100%;
  height: 10rem;
  background-color: transparent;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  margin-left: 2rem;
`;

const NavigationBar = () => {
  return (
    <>
      <NavWrapper>
        <LogoWrapper>
          <Logo logo={bookMarkLogo} />
        </LogoWrapper>
        <Hamburger />
      </NavWrapper>
    </>
  );
};

export default NavigationBar;
