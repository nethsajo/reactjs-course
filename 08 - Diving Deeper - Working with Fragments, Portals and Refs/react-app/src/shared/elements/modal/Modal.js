import React from 'react';
import ReactDOM from 'react-dom';
import { styled } from 'shared/theme';
import { Card } from '../card/Card';
import { Button } from '../button/Button';

const Backdrop = props => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};

const ModalOverlay = props => {
  return (
    <Card className="modal">
      <ModalHeader>
        <h2>{props.title}</h2>
      </ModalHeader>
      <ModalContent>
        <p>{props.message}</p>
      </ModalContent>
      <ModalFooter>
        <div className="footer__actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </div>
      </ModalFooter>
    </Card>
  );
};

const ModalHeader = styled.header`
  background-color: royalblue;
  padding: 1.2rem 2.4rem;

  & h2 {
    font-size: 2rem;
    font-weight: 500;
    color: ${props => props.theme.colors.white};
  }
`;

const ModalContent = styled.div`
  padding: 3.2rem 2.4rem;

  & p {
    font-size: 1.6rem;
  }
`;

const ModalFooter = styled.footer`
  & .footer__actions {
    display: flex;
    justify-content: flex-end;
    padding: 1.6rem 3.2rem;
  }

  & button {
    width: auto;
  }
`;

export const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

/**
 * Portals - provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * Portals need two things; We need a place that we want to port the component to.
 * We need to let the component know that it should have a portal to that place
 * To mark that place. We go into the public folder and navigate to the index.html. We need to add a div with an id.
 * ReactDOM is kind of the adapter for React to the browser
 * createPortal method takes two arguments. The first one is the React node that should be rendered
 * The second argument of createPortal is a pointer to that container in the real DOM where this elements should be rendered in
 * We really need to select the element where it should be rendered to
 * Whenever we would normally just use the component, we can use createPortal to portal.
 * To move that component's html content somewhere else only in the actual DOM that is being rendered.
 */
