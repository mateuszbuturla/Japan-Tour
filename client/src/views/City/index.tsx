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
import TypesCity from 'types/TypesCity';
import TypesAttraction from 'types/TypesAttraction';

interface Props {
  setTitle: Function;
}

function City({ setTitle }: Props) {
  const { cityKey } = useParams();
  const history = useHistory();
  const [city, setCity] = useState<TypesCity>();
  const [attractions, setAttractions] = useState<TypesAttraction[]>([]);

  const getCity = async () => {
    try {
      let res = await Api.get(`/cities/${cityKey}`);
      if (!res.data) return history.push('/404');
      setTitle(res.data.name);
      setCity(res.data);
      getAttractions(res.data._id);
    } catch (e) {
      history.push('/404');
    }
  };

  const getAttractions = async (cityId: string) => {
    let res = await Api.get(`/attractions/allFromCity/${cityId}`);
    setAttractions(res.data);
  };

  useEffect(() => {
    getCity();
  }, []);

  return (
    <>
      {city && (
        <>
          <PageHeader
            text={city.name}
            img={city.img}
            locationPathElements={[
              { text: 'Strona główna', url: '/' },
              { text: 'Podróże', url: '/podroze' },
              { text: city.region, url: `/podroze/${city.region}` },
              { text: city.name, url: `/podroze/${city.region}/${city.name}` },
            ]}
          />
          <StyledPageContainer>
            <StyledMainContentContainer>
              <ItemDescription description={city.description} />
              <AttractionsGroup
                header="Najciekawsze atrakcje"
                attractions={attractions.filter((item: TypesAttraction) => item.bestAttractions)}
              />
              <AttractionsGroup
                header="Pozostałe atrakcje"
                attractions={attractions.filter((item: TypesAttraction) => !item.bestAttractions)}
              />
            </StyledMainContentContainer>
            <AsideInfo data={city.otherData} />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default City;
