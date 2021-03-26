import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--primary);
  font-family: 'Roboto';

  padding: 3rem 0;
  > h1 {
    padding: 0 0.5rem;
    margin: 0;
    color: var(--twitter);
  }

  > p {
    padding: 0 0.5rem;
    color: var(--gray);
  }
`;

