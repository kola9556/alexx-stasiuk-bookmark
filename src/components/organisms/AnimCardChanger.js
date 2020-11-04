import React, { useState } from 'react';
import Card from 'components/molecules/Card';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.div`
  width: 30rem;
  height: 8rem;
  display: flex;
  font-weight: 500;
  border-bottom: 2px solid #d1cfcf;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.darkBlue};
    `}

  :hover {
    color: ${({ theme }) => theme.lightRed};
  }
`;

const RedLine = styled.div`
  height: 0.5rem;
  width: 0rem;
  border-radius: 0.2rem;
  position: relative;
  top: 2.9rem;
  background-color: ${({ theme }) => theme.lightRed};
  transition: width 1s;

  &.red {
    width: 15rem;
  }

  @media (min-width: 1200px) {
    &.red {
      width: 100%;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const AnimCardChanger = () => {
  const [click, setClick] = useState({
    clickedFirst: true,
    clickedSecond: false,
    clickedThird: false,
  });

  const handleClickFirst = () => {
    !click.clickedFirst
      ? setClick({
          clickedFirst: true,
          clickedSecond: false,
          clickedThird: false,
        })
      : setClick({
          clickedFirst: false,
          clickedSecond: false,
          clickedThird: false,
        });
  };

  const handleClickSecond = () => {
    !click.clickedSecond
      ? setClick({
          clickedFirst: false,
          clickedSecond: true,
          clickedThird: false,
        })
      : setClick({
          clickedFirst: false,
          clickedSecond: false,
          clickedThird: false,
        });
  };

  const handleClickThird = () => {
    !click.clickedThird
      ? setClick({
          clickedFirst: false,
          clickedSecond: false,
          clickedThird: true,
        })
      : setClick({
          clickedFirst: false,
          clickedSecond: false,
          clickedThird: false,
        });
  };

  return (
    <>
      <ButtonsWrapper>
        <ButtonWrapper isActive={click.clickedFirst} onClick={handleClickFirst}>
          Simple Bookmarking
          <RedLine className={click.clickedFirst ? 'red' : 'RedLine'} />
        </ButtonWrapper>
        <ButtonWrapper isActive={click.clickedSecond} onClick={handleClickSecond}>
          Speedy Searching
          <RedLine className={click.clickedSecond ? 'red' : 'RedLine'} />
        </ButtonWrapper>
        <ButtonWrapper isActive={click.clickedThird} onClick={handleClickThird}>
          Easy Sharing
          <RedLine className={click.clickedThird ? 'red' : 'RedLine'} />
        </ButtonWrapper>
      </ButtonsWrapper>

      <Card displayed={click.clickedFirst} whichCard={Object.keys(click)[0]} />
      <Card displayed={click.clickedSecond} whichCard={Object.keys(click)[1]} />
      <Card displayed={click.clickedThird} whichCard={Object.keys(click)[2]} />
    </>
  );
};

export default AnimCardChanger;
