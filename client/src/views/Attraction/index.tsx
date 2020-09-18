import React, { useState, useEffect } from 'react';
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
import TypesAttraction from 'types/TypesAttraction';

interface Props {
  attractionUrl: string;
  setTitle: Function;
}

function Attraction({ attractionUrl, setTitle }: Props) {
  const { attractionurl } = useParams();
  const history = useHistory();
  const [attraction, setAttraction] = useState<TypesAttraction>();
  const [otherAttractions, setOtherAttractions] = useState<TypesAttraction[]>([]);

  const getData = async () => {
    try {
      let res = await Api.get(`/getattraction/${attractionurl}`);
      setTitle(res.data.attraction.name);
      setAttraction(res.data.attraction);
      setOtherAttractions(res.data.otherAttractions);
    } catch (e) {
      history.push('/404');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {attraction && (
        <>
          <PageHeader
            text={attraction.name}
            img={process.env.PUBLIC_URL + '/images/' + attraction.img}
          />
          <StyledPageContainer>
            <StyledMainContentContainer>
              <ItemDescription description={attraction.description} />
              <AttractionsGroup header="Polecane podobne obiekty" attractions={otherAttractions} />
            </StyledMainContentContainer>
            <AsideInfo data={attraction.otherData} />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default Attraction;
