import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 10;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 90rem;
  border-radius: var(--b-radius-base);
  background-color: var(--color-white);
  z-index: 20;

  @media (min-width: 768px) {
    width: 60rem;
  }
`;
