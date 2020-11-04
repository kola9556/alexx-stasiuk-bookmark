import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 15.3rem;
  height: 5rem;
  margin: 0.6rem;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 0.7rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  ${({ buttonColor }) =>
    buttonColor === 'blue' &&
    css`
      background: ${({ theme }) => theme.lightBlue};
      color: white;
    `}

  ${({ buttonColor }) =>
    buttonColor === 'white' &&
    css`
      background: ${({ theme }) => theme.almostWhite};
      color: grey;
    `}

    ${({ buttonColor }) =>
    buttonColor === 'red' &&
    css`
      background: ${({ theme }) => theme.lightRed};
      color: white;
    `}
`;

export default Button;
