import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  max-width: 120rem;
  margin: 0 auto;
  height: 8rem;
  padding: 0 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-primary);
`;

export const StyledHeaderImage = styled.div`
  position: relative;

  & img {
    width: 100%;
    height: 35rem;
    object-fit: cover;
  }
`;
