import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  StyledMainContentContainer,
  PageHeader,
  ItemDescription,
  AttractionsGroup,
  AsideInfo,
} from 'components/common';
import Api from 'utils/Api';
import TypesRegion from 'types/TypesRegion';

interface Props {
  setTitle: Function;
}

function Region({ setTitle }: Props) {
  const { regionurl } = useParams();
  const history = useHistory();
  const [region, setRegion] = useState<TypesRegion>();
  const [attractions, setAttractions] = useState([]);

  const getData = async () => {
    try {
      let res = await Api.get(`/getregion/${regionurl}`);
      if (!res.data.region) return history.push('/404');
      setTitle(res.data.region.name);
      setRegion(res.data.region);
      setAttractions(res.data.attractions);
    } catch (e) {
      history.push('/404');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {region && (
        <>
          <PageHeader text={region.name} img={process.env.PUBLIC_URL + '/images/' + region.img} />
          <StyledPageContainer>
            <StyledMainContentContainer>
              <ItemDescription description={region.description} />
              <AttractionsGroup header="Najciekawsze atrakcje" attractions={attractions} />
            </StyledMainContentContainer>
            <AsideInfo data={region.otherData} />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default Region;
