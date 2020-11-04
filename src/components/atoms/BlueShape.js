import styled from 'styled-components';

const BlueShape = styled.div`
  position: absolute;
  right: 0;
  top: 18rem;
  height: 33vh;
  width: 77vw;
  background-color: ${({ theme }) => theme.lightBlue};
  border-radius: 0 0 0 8rem;
  z-index: -100;

  @media (min-width: 1200px) {
    width: 27vw;
    top: 30rem;
    height: 38vh;
  }
`;

export default BlueShape;
