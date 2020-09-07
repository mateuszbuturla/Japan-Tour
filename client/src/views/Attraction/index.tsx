import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  attractionUrl: string;
}

function Attraction({ attractionUrl }: Props) {
  const { attractionurl } = useParams();
  const [attraction, setAttraction] = useState();
  const [otherAttractions, setOtherAttractions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getattraction/${attractionurl}`)
      .then(function (result) {
        setAttraction(result.data.attraction);
        setOtherAttractions(result.data.otherAttractions);
      });
  }, []);

  return (
    <>
      {attraction && (
        <>
          <PageHeader
            text={attraction.name}
            images={[process.env.PUBLIC_URL + '/images/' + attraction.img]}
          />
          <StyledPageContainer>
            <StyledText>{attraction.description}</StyledText>
            <StyledSubHeader>Polecane podobne obiekty</StyledSubHeader>
            <StyledAttractionTilesContainer>
              {otherAttractions.map((item: any) => (
                <AttractionTile attraction={item} />
              ))}
            </StyledAttractionTilesContainer>
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default Attraction;
