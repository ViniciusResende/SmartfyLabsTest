import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, PageSwitcher, ContentWrapper, ContentArea  } from './styles';

import api from '../../services/api';

const Content: React.FC = (props: any) => {
  const right = '>';
  const left = '<';  

  const [pageContent, setPageContent] = useState([{
    id: '',
    title: '',
    name: '',
    poster_path: '',
    overview: '',
  }]);
  const [actualPage, setActualPage] = useState(1);
  const [inspectPath, setInspectPath] = useState('');

  async function randomMovies(){
    try {
      const reponse = await api.get('/filmes')
      if(reponse){
        // console.log(reponse);
        setPageContent(reponse.data.results);
        setInspectPath('inspectMovie');
      } else {
        console.log('No response')
      }
    } catch(err) {
      console.log(err)
    }
  }

  async function randomSeries(){
    try {
      const reponse = await api.get('/series')
      if(reponse){
        // console.log(reponse);
        setPageContent(reponse.data.results);
        setInspectPath('inspectSerie');
      } else {
        console.log('No response')
      }
    } catch(err) {
      console.log(err)
    }
  }

  function backPageHandler(){
    if(actualPage > 1){
      setActualPage(actualPage - 1)
    } else {
      console.log('Não há pagina anterior');
    }
  }

  function towardPageHandler(){
    if(actualPage < (pageContent.length/4)){
      setActualPage(actualPage + 1)
    } else {
      console.log('Não há pagina posterior');
    }
  }

  useEffect(() => {
    if(props.match.path === '/series'){
      randomSeries();
    } else {
      randomMovies();
    }
  }, []);

  return (
    <Container>
      <PageSwitcher>
        <button onClick={backPageHandler}>{left}</button>
        <p>{actualPage}</p>
        <button className="secondButton" onClick={towardPageHandler}>{right}</button>
      </PageSwitcher>
      <ContentWrapper>
        {pageContent.map(item => {
          if(pageContent.indexOf(item) < (4 * actualPage) && pageContent.indexOf(item) >= ((actualPage - 1) * 4)){
            return (
              <ContentArea key={item.id} as={Link} to={`/${inspectPath}/${item.id}`}>
                <img src={item.poster_path} alt=""/>
                <div>
                  <h3>{item.title}</h3>
                  <h3>{item.name}</h3>
                  <p>{item.overview}</p>
                </div>
              </ContentArea>
            )
          } else {
            return ;
          }          
        })}        
      </ContentWrapper>
    </Container>
  );
}

export default Content;