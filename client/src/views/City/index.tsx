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
  const { cityurl } = useParams();
  const history = useHistory();
  const [city, setCity] = useState<TypesCity>();
  const [attractions, setAttractions] = useState<TypesAttraction[]>([]);

  const getData = async () => {
    try {
      let res = await Api.get(`/getcity/${cityurl}`);
      if (!res.data.city) return history.push('/404');
      setTitle(res.data.city.name);
      setCity(res.data.city);
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
      {city && (
        <>
          <PageHeader text={city.name} img={process.env.PUBLIC_URL + '/images/' + city.img} />
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
