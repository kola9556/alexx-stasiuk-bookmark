import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import StyledPara from './StyledPara';

const CounterStyledPara = styled(StyledPara)`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.4rem;
`;
const duration = 20000,
  intervalTime = duration / Math.abs(35000 / 100);

const Counter = () => {
  const [counter, setCounter] = useState(35000);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 100), intervalTime);
  }, [counter]);

  return (
    <>
      <CounterStyledPara>{counter}+ ALREADY JOINED</CounterStyledPara>
    </>
  );
};

export default Counter;
