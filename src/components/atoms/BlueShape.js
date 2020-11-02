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
`;

export default BlueShape;
