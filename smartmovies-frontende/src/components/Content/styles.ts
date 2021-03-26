import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--primary);
`;

export const PageSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  background: var(--twitter-dark-hover);
  border: 1px solid var(--twitter);
  border-radius: 2rem;

  > button {
    color: var(--twitter);
    font-size: 1.5rem;
    padding: 0.3rem 1rem;
    outline: 0;

    text-align: center;

    border: 1px solid var(--twitter);
    border-radius: 2rem 0rem 0rem 2rem;

    transition: all 0.2s ease;
    
    &:hover{
      filter: brightness(0.8);
    }

    cursor: pointer;
  }

  > button.secondButton{
    border-radius: 0rem 2rem 2rem 0rem;
  }

  > p {
    color: var(--twitter);
    font-size: 1.5rem;
    padding: 0;
    margin: 0 1rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 50%;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  grid-gap: 1.25rem;

  @media(max-width: 1730px){
    width: 70%;
  }

  @media(max-width: 1300px){
    width: 90%;
  }
`;

export const ContentArea = styled.div`
  width: 100%;
  max-width: 12.5rem;
  text-decoration: none;

  justify-self: center;
  position: relative;

  > div {
    padding: 0 0.5rem;
    > h3 {
      font-family: 'Roboto';
      text-align: start;
      color: var(--white);
      margin-top: 0.3125rem;
    }

    > p {
      font-family: 'Roboto';
      text-align: justify;
      color: var(--gray);
      height: 100%;
      max-height: 12.5rem;
      overflow-y: auto;
      padding: 0 0.15rem;
      
      /* width */
      ::-webkit-scrollbar {
        width: 1px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: var(--twitter-dark-hover);
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--twitter);
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
`;
