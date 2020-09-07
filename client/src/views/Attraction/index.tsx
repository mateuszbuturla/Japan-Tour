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
  attractionUrl: string;
}

function Attraction({ attractionUrl }: Props) {
  const { attractionurl } = useParams();
  const history = useHistory();
  const [attraction, setAttraction] = useState();
  const [otherAttractions, setOtherAttractions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getattraction/${attractionurl}`)
      .then(function (result) {
        setAttraction(result.data.attraction);
        setOtherAttractions(result.data.otherAttractions);
      })
      .catch(() => {
        history.push('/404');
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
