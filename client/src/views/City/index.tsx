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
      console.log(res);
      setTitle(res.data.name);
      setCity(res.data);
    } catch (e) {
      history.push('/404');
    }
  };

  const getAttractions = async () => {
    let res = await Api.get(`/attractions/allFromCity/${cityKey}`);
    setAttractions(res.data);
  };

  useEffect(() => {
    getCity();
    getAttractions();
  }, []);

  return (
    <>
      {city && (
        <>
          <PageHeader text={city.name} img={city.img} />
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
