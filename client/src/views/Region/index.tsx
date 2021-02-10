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
  const { regionKey } = useParams();
  const history = useHistory();
  const [region, setRegion] = useState<TypesRegion>();
  const [attractions, setAttractions] = useState([]);

  const getRegion = async () => {
    try {
      let res = await Api.get(`/regions/${regionKey}`);
      console.log(res.data);
      if (!res.data) return history.push('/404');
      setTitle(res.data.name);
      setRegion(res.data);
      // setAttractions(res.data.attractions);
    } catch (e) {
      history.push('/404');
    }
  };

  const getAttractions = async () => {
    let res = await Api.get(`/attractions/bestFromRegion/${regionKey}`);
    setAttractions(res.data);
  };

  useEffect(() => {
    getRegion();
    getAttractions();
  }, []);

  return (
    <>
      {region && (
        <>
          <PageHeader text={region.name} img={region.img} />
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
