import styled from 'styled-components';

export const Container = styled.header`
  background: var(--secondary);
  border-bottom: 2px solid var(--twitter);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 20%;
  font-family: 'Roboto';
`;

export const LogoContainer = styled.div`
  text-decoration: none;
  
  > h3 {
    color: var(--twitter);
    font-weight: bold;
    letter-spacing: 0.0625rem;
    padding: 0;
    margin: 0;

    user-select: none;   
    transition: color 0.4s ease;
    
    &:hover {
      color: var(--twitter-light-hover);
    }

    cursor: pointer;
  }
`;