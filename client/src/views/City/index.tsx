import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  PageHeader,
  ItemDescription,
  AttractionsGroup,
} from '../../components/common';
import axios from 'axios';

interface Props {
  setTitle: Function;
}

function City({ setTitle }: Props) {
  const { cityurl } = useParams();
  const history = useHistory();
  const [city, setCity] = useState();
  const [attractions, setAttractions] = useState([]);

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
            images={[process.env.PUBLIC_URL + '/images/' + city.img]}
          />
          <StyledPageContainer>
            <ItemDescription description={city.description} />
            <AttractionsGroup
              header="Najciekawsze atrakcje"
              attractions={attractions.filter(
                (item: any) => item.bestAttractions,
              )}
            />
            <AttractionsGroup
              header="Pozostałe atrakcje"
              attractions={attractions.filter(
                (item: any) => !item.bestAttractions,
              )}
            />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default City;
