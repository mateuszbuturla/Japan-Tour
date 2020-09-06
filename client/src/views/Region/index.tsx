import React, { useEffect, useState } from 'react';
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

function Region() {
  const { regionurl } = useParams();
  const [region, setRegion] = useState();
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getregion/${regionurl}`)
      .then(function (result) {
        setRegion(result.data.region);
        setAttractions(result.data.attractions);
      });
  }, []);

  return (
    <>
      {region && (
        <>
          <PageHeader text={region.name} images={region.img} />
          <StyledPageContainer>
            <StyledText>{region.description}</StyledText>
            <StyledSubHeader>Najciekawsze atrakcje</StyledSubHeader>
            <StyledAttractionTilesContainer>
              {attractions.map((item: any) => (
                <AttractionTile attraction={item} />
              ))}
            </StyledAttractionTilesContainer>
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default Region;
