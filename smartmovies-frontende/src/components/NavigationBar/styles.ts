import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  background: var(--primary);
`;

export const Tab = styled.button`
  width: 100%;
  padding: 11px 0 15px;
  margin: 0;
  border: 0;

  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);
  
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;