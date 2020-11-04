import React, { useRef } from 'react';
import alert from 'assets/images/icon-error.svg';
import Counter from 'components/atoms/Counter';
import StyledSecondHeader from 'components/atoms/StyledSecondHeader';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  margin-top: 6rem;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.lightBlue};
`;

const CounterStyledSecHeader = styled(StyledSecondHeader)`
  color: white;
  font-size: 2.5rem;
  margin-top: 0.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSubmit = styled.input`
  width: 80vw;
  height: 5rem;
  margin: 0.6rem;
  border: none;
  border-radius: 0.7rem;
  background: ${({ theme }) => theme.lightRed};
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
`;

const Input = styled.input`
  margin: 0;
  width: 80vw;
  height: 5rem;
  border: none;
  border-radius: 0.7rem;
  outline: none;
  z-index: 10;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InvalidLabel = styled.div`
  width: calc(80vw + 0.8rem);
  height: 3.5rem;
  margin: 0;
  border: none;
  border-radius: 0.7rem;
  background: ${({ theme }) => theme.lightRed};
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  display: none;
  position: relative;
  bottom: 1rem;
  z-index: 5;
`;
const StyledMessage = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  position: relative;
  margin-left: 1rem;
  font-style: italic;
`;

const AlertIcon = styled.img`
  position: relative;
  bottom: 7rem;
  left: 13rem;
  z-index: 20;
  display: none;
`;

const ContactSection = () => {
  const myInput = useRef(null);
  const myIcon = useRef(null);
  const myForm = useRef(null);
  const myInvalid = useRef(null);

  const handleInvalid = () => {
    const inputValue = myForm.current['mail'].value;
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputValue)) {
      myInvalid.current.style.display = 'inline';
      myInput.current.style.border = '0.3rem solid hsl(0, 94%, 66%)';
      myIcon.current.style.display = 'inline';
    } else {
      myInvalid.current.style.display = 'none';
      myInput.current.style.border = 'none';
      myIcon.current.style.display = 'none';
    }
  };

  return (
    <ContactWrapper>
      <Counter />
      <CounterStyledSecHeader>Stay up-to-date with what we‘re doing</CounterStyledSecHeader>

      <StyledForm ref={myForm}>
        <InputWrapper>
          <Input
            onChange={handleInvalid}
            ref={myInput}
            type="email"
            name="mail"
            id="mailLabel"
            placeholder="email"
            required
          />
          <InvalidLabel ref={myInvalid}>
            <StyledMessage>Whoops, make sure it‘s an email</StyledMessage>
          </InvalidLabel>
          <AlertIcon ref={myIcon} src={alert} />
        </InputWrapper>

        <StyledSubmit type="submit" value="Contact Us" />
      </StyledForm>
    </ContactWrapper>
  );
};

export default ContactSection;
