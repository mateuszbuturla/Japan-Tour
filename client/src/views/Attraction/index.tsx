import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  PageHeader,
  ItemDescription,
  StyledSubHeader,
  StyledAttractionTilesContainer,
  AttractionTile,
} from '../../components/common';
import axios from 'axios';

import ff33 from '../../assets/regions/chubu.jpg';

interface Props {
  attractionUrl: string;
  setTitle: Function;
}

function Attraction({ attractionUrl, setTitle }: Props) {
  const { attractionurl } = useParams();
  const history = useHistory();
  const [attraction, setAttraction] = useState();
  const [otherAttractions, setOtherAttractions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getattraction/${attractionurl}`)
      .then(function (result) {
        setTitle(result.data.attraction.name);
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
            <ItemDescription description={attraction.description} />
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
