import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoWrapper = styled.img`
  height: 2.9rem;
`;

const Logo = ({ logo }) => (
  <>
    <a href="/">
      <LogoWrapper src={logo} />
    </a>
  </>
);

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};
export default Logo;
