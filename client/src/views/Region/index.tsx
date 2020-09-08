import React, { useEffect, useState } from 'react';
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

interface Props {
  setTitle: Function;
}

function Region({ setTitle }: Props) {
  const { regionurl } = useParams();
  const history = useHistory();
  const [region, setRegion] = useState();
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getregion/${regionurl}`)
      .then(function (result) {
        if (!result.data.region) return history.push('/404');
        setTitle(result.data.region.name);
        setRegion(result.data.region);
        setAttractions(result.data.attractions);
      })
      .catch(() => {
        history.push('/404');
      });
  }, []);

  return (
    <>
      {region && (
        <>
          <PageHeader
            text={region.name}
            images={[process.env.PUBLIC_URL + '/images/' + region.img]}
          />
          <StyledPageContainer>
            <ItemDescription description={region.description} />
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
