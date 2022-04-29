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

  .mb-8 {
    margin-bottom: 3.2rem;
  }

  .btn__icon {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .icon {
    width: 2rem;
    height: 2rem;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60rem;
    overflow: hidden;
    z-index: 100;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
`;

export { theme, ThemeProvider, styled, GlobalStyle };
