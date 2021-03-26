import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  color: var(--white);

  background: var(--primary);

  > div.loader{
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after{
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: loader 1.2s linear infinite;
    }
  }

  @keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  }
`;

export const Button = styled.button`
  margin: 1rem;
  border: 1px solid var(--twitter-dark-hover);
  border-radius: 0.4rem;

  background: var(--twitter);
  color: var(--twitter-dark-hover);
  text-decoration: none;
  font-size: 0.8rem;

  padding: 0.5rem 1rem;

  cursor: pointer;
  transition: all 0.4s ease;

  &:hover{
    filter: brightness(0.9);
  }
`
export const Wrapper = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 2rem 5rem;

    background: rgba(32, 36, 24, 0.95);

    @media (max-width: 1300px){
      flex-direction: column;
      padding: 2rem 1rem;
    }
  }
  > img {
    margin-right: 4rem;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;

  width: 100%;
  

  > h3 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    margin-bottom: 0.5rem;
  }

  > strong {
    font-size: 1.3rem;
  }

  > p {    
    text-align: justify;
  }
`;

export const CastContainer = styled.div`
  width: 100%;
  margin: 1rem auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  grid-gap: 1.25rem;
`;

export const CastPerson = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-self: center;

  > strong {
    margin-top: 0.3rem;
  }
  > p {
    margin: 0;
  }
`;