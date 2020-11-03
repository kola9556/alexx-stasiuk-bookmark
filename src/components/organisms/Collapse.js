import React, { useRef } from 'react';
import arrow from 'assets/images/icon-arrow.svg';
import StyledPara from 'components/atoms/StyledPara';
import QuestionAndAnswer from 'components/molecules/QuestionAndAnswer';
import styled from 'styled-components';

const CollapseWrapper = styled.div`
  margin: 5rem 0 3rem;
  width: 85vw;
`;

const Collapse = () => {
  return (
    <CollapseWrapper>
      <QuestionAndAnswer
        question="What is Bookmark?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium hendrerit elit at
        ullamcorper. Nunc tincidunt turpis sed nisi tristique congue. Nunc ullamcorper vehicula
        mattis. Ut suscipit semper velit sit amet finibus. Quisque at turpis in ligula consectetur
        pretium ut vel ipsum. Aenean suscipit, erat ac luctus commodo, nibh erat viverra ipsum,
        vehicula ornare lorem ex vitae libero. Cras mollis lectus sed nunc iaculis ultricies. Sed
        orci ligula, semper ut maximus a, tincidunt nec ante. Donec eu rutrum augue, eget tempus
        ipsum. Nunc vel neque posuere, luctus enim vitae, eleifend justo."
      />
      <QuestionAndAnswer
        question="How can I request a new browser?"
        text=" Cras mollis lectus sed nunc iaculis ultricies. Sed
        orci ligula, semper ut maximus a, tincidunt nec ante. Donec eu rutrum augue, eget tempus
        ipsum. Nunc vel neque posuere, luctus enim vitae, eleifend justo."
      />
      <QuestionAndAnswer
        question="Is there a mobile app?"
        text="  Aenean suscipit, erat ac luctus commodo, nibh erat viverra ipsum,
      vehicula ornare lorem ex vitae libero. Cras mollis lectus sed nunc iaculis ultricies. Sed
      orci ligula, semper ut maximus a, tincidunt nec ante. Donec eu rutrum augue, eget tempus
      ipsum. Nunc vel neque posuere, luctus enim vitae, eleifend justo.Ut suscipit semper velit sit amet finibus. Quisque at turpis in ligula consectetur
      pretium ut vel ipsum."
      />
      <QuestionAndAnswer
        question="What about other Chromium browsers?"
        text=" Quisque at turpis in ligula consectetur
    pretium ut vel ipsum. Aenean suscipit, erat ac luctus commodo, nibh erat viverra ipsum,
    vehicula ornare lorem ex vitae libero. Cras mollis lectus sed nunc iaculis ultricies. Sed
    orci ligula, semper ut maximus a, tincidunt nec ante. "
      />
    </CollapseWrapper>
  );
};

export default Collapse;
