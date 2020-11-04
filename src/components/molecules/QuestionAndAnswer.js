import React, { useRef } from 'react';
import arrow from 'assets/images/icon-arrow.svg';
import StyledPara from 'components/atoms/StyledPara';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuestionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: ${({ theme }) => theme.darkBlue};
  font-size: 1.6rem;
  font-weight: 700;
  width: 100%;
  height: 6rem;
  text-decoration: none;
  outline: none;
  border: none;
  border-bottom: 2px solid #d1cfcf;
  margin-bottom: 3rem;

  :hover {
    color: ${({ theme }) => theme.lightRed};
  }
`;

const AnswerCard = styled(StyledPara)`
  text-align: left;
  display: none;
`;

const ArrowIcon = styled.img``;

const QuestionAndAnswer = ({ text, question }) => {
  const myAnswer = useRef(null);

  const myIcon = useRef(null);

  const handleClick = () => {
    myAnswer.current.style.display !== 'inline'
      ? (myAnswer.current.style.display = 'inline')
      : (myAnswer.current.style.display = 'none');

    myIcon.current.style.transform !== 'rotate(180deg)'
      ? (myIcon.current.style.transform = 'rotate(180deg)')
      : (myIcon.current.style.transform = 'rotate(0deg)');

    myIcon.current.style.filter !==
    'invert(53%) sepia(49%) saturate(2877%) hue-rotate(323deg) brightness(98%) contrast(120%)'
      ? (myIcon.current.style.filter =
          'invert(53%) sepia(49%) saturate(2877%) hue-rotate(323deg) brightness(98%) contrast(120%)')
      : (myIcon.current.style.filter =
          'invert(34%) sepia(79%) saturate(2122%) hue-rotate(220deg) brightness(94%) contrast(85%)');
  };

  return (
    <>
      <QuestionButton onClick={handleClick}>
        {question}
        <ArrowIcon src={arrow} ref={myIcon} />
      </QuestionButton>
      <AnswerCard ref={myAnswer}>{text}</AnswerCard>
    </>
  );
};

QuestionAndAnswer.propTypes = {
  text: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default QuestionAndAnswer;
