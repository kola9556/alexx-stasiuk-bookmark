import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 3rem;
  color: ${({ theme }) => theme.darkBlue};
`;

export default StyledTitle;
