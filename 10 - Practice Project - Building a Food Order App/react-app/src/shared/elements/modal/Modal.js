import React from 'react';
import ReactDOM from 'react-dom';
import {
  StyledBackdrop,
  StyledModal,
} from 'shared/styles/componentStyles/modalStyles';

const Backdrop = props => {
  return <StyledBackdrop onClick={props.onHideCart} />;
};

const ModalOverlay = props => {
  return <StyledModal>{props.children}</StyledModal>;
};

const portalElement = document.getElementById('overlay');

export const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
