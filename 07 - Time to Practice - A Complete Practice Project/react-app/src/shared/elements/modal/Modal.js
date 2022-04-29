import React from 'react';
import { styled } from 'shared/theme';
import { Card } from '../card/Card';
import { Button } from '../button/Button';

export const Modal = props => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm}></div>
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
    </>
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
