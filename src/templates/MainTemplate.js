import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/colorTheme';
import GlobalStyle from 'themes/GlobalStyle';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
