import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Button, Wrapper, ContentArea, CastContainer, CastPerson } from './styles';

const SingleContent: React.FC = (props: any) => {
  const contentId = props.match.params.contentId;
  const [isLoading, setIsLoading] = useState(true);
  const [isRetrievingData, setIsRetrievingData] = useState(true);
  const [isPrefetching, setIsPrefetching] = useState(false);


  const [pageContent, setPageContent] = useState(
    {
      id: '',
      title: '',
      overview: '',
      poster_path: '',
      backdrop_path: '',
      credits: {
        cast: [
          {
            name: '',
            character: '',
            profile_path:''
          }
        ]
      }
    }
  );

  async function randomMoviesInspect(){
    try {
      setIsRetrievingData(true);
      const reponse = await api.get(`/filmes/${contentId}`);
      if(reponse){
        // console.log('response', reponse);
        setPageContent(reponse.data);
        setIsRetrievingData(false);
      } else {
        console.log('No response')
      }
    } catch(err) {
      console.log(err)
    }
  }

  async function randomSeriesInspect(){
    try {
      setIsRetrievingData(true);
      const reponse = await api.get(`/series/${contentId}`);
      if(reponse){
        // console.log('response', reponse);
        setPageContent(reponse.data);
        setIsRetrievingData(false);
      } else {
        console.log('No response')
      }
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(props.match.path.slice(0, 13) === '/inspectSerie'){
      randomSeriesInspect();
    } else {
      randomMoviesInspect();
    }
  }, []);

  useEffect(() =>{
    if(!isRetrievingData){
      setIsPrefetching(true);
    }
  }, [isRetrievingData]);

  useEffect(() => {
    if(!isPrefetching && !isRetrievingData){
      setIsLoading(false);
    }
  }, [isPrefetching, isRetrievingData]);

  return (
    <Container >
      {isLoading && <div className="loader"></div>}
      {isPrefetching &&(
        <img 
          src={pageContent.backdrop_path} 
          alt=""
          style={{visibility: 'hidden', width: 0, height: 0}}
          onLoad={() => setIsPrefetching(false)}
        />
      )}
      {!isLoading && (
        <>
          <Button as={Link} to='/'>Voltar</Button>
          <Wrapper style={{backgroundImage: `url(${pageContent.backdrop_path})`}}>
            <div>
              <img src={pageContent.poster_path} alt=""/>
              <ContentArea>
                <h3>{pageContent.title}</h3>
                <strong>Sinopse</strong>
                <p>{pageContent.overview || ' No content '}</p>
                <strong>Elenco</strong>
                <CastContainer>
                  {pageContent.credits.cast.map(actor => {
                    if(pageContent.credits.cast.indexOf(actor) < 6){
                      return(
                        <CastPerson key={actor.name}>
                          <img src={actor.profile_path} alt=""/>
                          <strong>{actor.name}</strong>
                          <p>{actor.character}</p>
                        </CastPerson>
                      )
                    } else {
                      return ;
                    }                
                  })}
                  
                </CastContainer>
              </ContentArea>
            </div>
          </Wrapper>
        </>
      )}
    </Container>
  );
}

export default SingleContent;