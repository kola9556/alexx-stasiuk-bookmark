import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.button`
  margin-right: 3rem;
  text-decoration: none;
  border: none;
  background-color: transparent;
  display: inline-block;
  outline: none;
  cursor: pointer;

  @media (minwidth: '1000px') {
    display: none;
  }
`;

const HamburgerBar = styled.div`
  width: 3rem;
  height: 0.4rem;
  border-radius: 2rem;
  background-color: black;
  margin: 0.4rem 0;
  transition: 0.4s;

  :first-child {
    &.change {
      transform: rotate(-45deg) translate(-0.5rem, 0.6rem);
    }
  }
  :nth-child(2) {
    &.change {
      opacity: 0;
    }
  }

  :last-child {
    &.change {
      transform: rotate(45deg) translate(-0.4rem, -0.8rem);
    }
  }
`;

const Hamburger = () => {
  const [click, setClick] = useState({ clicked: false });

  const handleHamClick = () =>
    click.clicked === false ? setClick({ clicked: true }) : setClick({ clicked: false });

  return (
    <>
      <HamburgerWrapper onClick={handleHamClick}>
        <HamburgerBar className={click.clicked ? 'change' : 'HamburgerBar'} />
        <HamburgerBar className={click.clicked ? 'change' : 'HamburgerBar'} />
        <HamburgerBar className={click.clicked ? 'change' : 'HamburgerBar'} />
      </HamburgerWrapper>
    </>
  );
};

export default Hamburger;
