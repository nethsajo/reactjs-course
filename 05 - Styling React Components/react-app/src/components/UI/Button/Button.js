import React from 'react';
import classnames from 'classnames';
// import styled from 'styled-components';
import styles from './Button.module.css';

const Button = function ({ children, className = styles.button }) {
  const buttonClass = classnames('__button', className);
  return <button className={buttonClass}>{children}</button>;
};

export default Button;

// const ButtonWrapper = styled.button`
//   width: 100%;
//   font-family: inherit;
//   font-size: 14px;
//   padding: 0.8rem 1.6rem;
//   border: 1px solid #8b005d;
//   color: #fff;
//   background: #8b005d;
//   box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
