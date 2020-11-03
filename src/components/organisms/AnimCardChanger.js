import React, { useState } from 'react';
import Card from 'components/molecules/Card';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 30rem;
  height: 8rem;
  display: flex;
  font-weight: 500;
  border-bottom: 2px solid #d1cfcf;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      <ButtonWrapper onClick={handleClickFirst}>
        Simple Bookmarking
        <RedLine className={click.clickedFirst ? 'red' : 'RedLine'} />
      </ButtonWrapper>
      <ButtonWrapper onClick={handleClickSecond}>
        Speedy Searching
        <RedLine className={click.clickedSecond ? 'red' : 'RedLine'} />
      </ButtonWrapper>
      <ButtonWrapper onClick={handleClickThird}>
        Easy Sharing
        <RedLine className={click.clickedThird ? 'red' : 'RedLine'} />
      </ButtonWrapper>
      <Card displayed={click.clickedFirst} whichCard={Object.keys(click)[0]} />
      <Card displayed={click.clickedSecond} whichCard={Object.keys(click)[1]} />
      <Card displayed={click.clickedThird} whichCard={Object.keys(click)[2]} />
    </>
  );
};

export default AnimCardChanger;
