import defaultStyled, {
  createGlobalStyle,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

const colors = {
  primary: {
    500: '#3b82f6',
    600: '#2563eb',
  },
  neutral: {
    300: '#d4d4d4',
    600: '#525252',
  },
  white: '#fff',
  black: '#000',
};

const screens = {
  xs: '320px',
  sm: '576px',
};

const theme = () => {
  return {
    colors,
    screens,
  };
};

const ThemeProvider = SThemeProvider;

const styled = defaultStyled;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;

    @media (max-width: ${props => props.theme.screens.sm}) {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  ul, ol {
    list-style: none;
  }

  .icon {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }
`;

export { theme, ThemeProvider, styled, GlobalStyle };
