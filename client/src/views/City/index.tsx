import React, { useState, useEffect } from 'react';
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
import TypesCity from '../../types/TypesCity';
import TypesAttraction from '../../types/TypesAttraction';

interface Props {
  setTitle: Function;
}

function City({ setTitle }: Props) {
  const { cityurl } = useParams();
  const history = useHistory();
  const [city, setCity] = useState<TypesCity>();
  const [attractions, setAttractions] = useState<TypesAttraction[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getcity/${cityurl}`)
      .then(function (result) {
        if (!result.data.city) return history.push('/404');
        setTitle(result.data.city.name);
        setCity(result.data.city);
        setAttractions(result.data.attractions);
      })
      .catch(() => {
        history.push('/404');
      });
  }, []);

  return (
    <>
      {city && (
        <>
          <PageHeader
            text={city.name}
            img={process.env.PUBLIC_URL + '/images/' + city.img}
          />
          <StyledPageContainer>
            <StyledMainContentContainer>
              <ItemDescription description={city.description} />
              <AttractionsGroup
                header="Najciekawsze atrakcje"
                attractions={attractions.filter(
                  (item: TypesAttraction) => item.bestAttractions,
                )}
              />
              <AttractionsGroup
                header="Pozostałe atrakcje"
                attractions={attractions.filter(
                  (item: TypesAttraction) => !item.bestAttractions,
                )}
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
