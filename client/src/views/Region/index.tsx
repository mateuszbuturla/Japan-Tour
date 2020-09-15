import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  StyledMainContentContainer,
  PageHeader,
  ItemDescription,
  AttractionsGroup,
  AsideInfo,
} from '../../components/common';
import axios from 'axios';
import TypesRegion from '../../types/TypesRegion';

interface Props {
  setTitle: Function;
}

function Region({ setTitle }: Props) {
  const { regionurl } = useParams();
  const history = useHistory();
  const [region, setRegion] = useState<TypesRegion>();
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
            img={process.env.PUBLIC_URL + '/images/' + region.img}
          />
          <StyledPageContainer>
            <StyledMainContentContainer>
              <ItemDescription description={region.description} />
              <AttractionsGroup
                header="Najciekawsze atrakcje"
                attractions={attractions}
              />
            </StyledMainContentContainer>
            <AsideInfo data={region.otherData} />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default Region;
