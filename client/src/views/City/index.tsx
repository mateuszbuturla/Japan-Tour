import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  PageHeader,
  StyledText,
  StyledSubHeader,
  StyledAttractionTilesContainer,
  AttractionTile,
} from '../../components/common';
import axios from 'axios';

interface Props {
  setTitle: Function;
}

function City({ setTitle }: Props) {
  const { cityurl } = useParams();
  const history = useHistory();
  const [city, setCity] = useState();
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getcity/${cityurl}`)
      .then(function (result) {
        if (!result.data.city) return history.push('/404');
        setTitle(result.data.city.name);
        setCity(result.data.city);
        setAttractions(result.data.attractions);
      })
      .catch(() => {
        history.push('/404');
      });
  }, []);

  return (
    <>
      {city && (
        <>
          <PageHeader
            text={city.name}
            images={[process.env.PUBLIC_URL + '/images/' + city.img]}
          />
          <StyledPageContainer>
            <StyledText>{city.description}</StyledText>
            <StyledSubHeader>Najciekawsze atrakcje</StyledSubHeader>
            <StyledAttractionTilesContainer>
              {attractions
                .filter((item: any) => item.bestAttractions)
                .map((item: any) => (
                  <AttractionTile attraction={item} />
                ))}
            </StyledAttractionTilesContainer>
            <StyledSubHeader>Pozostałe atrakcje</StyledSubHeader>
            <StyledAttractionTilesContainer>
              {attractions
                .filter((item: any) => !item.bestAttractions)
                .map((item: any) => (
                  <AttractionTile attraction={item} />
                ))}
            </StyledAttractionTilesContainer>
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default City;
