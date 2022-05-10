import { createGlobalStyle } from 'styled-components';
import { Variables } from './Variables';

export const GlobalStyles = createGlobalStyle`
  ${Variables}
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: #383838;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  .ml-auto {
    margin-left: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .ml-xs {
    margin-left: 1.2rem;
  }

  .mr-xs {
    margin-right: 1.2rem;
  }

  .mt-xs {
    margin-top: 1.2rem;
  }

  .flex-center {
    display: flex;
    align-items: center;
  }

  .icon {
    width: 2.4rem;
    height: 2.4rem;
    fill: currentColor;
  }

  .badge {
    position: absolute;
    top: -0.7rem;
    left: 1.3rem;
    width: 2rem;
    height: 2rem;
    border-radius: var(--b-radius-full);
    background-color: var(--color-primary);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
