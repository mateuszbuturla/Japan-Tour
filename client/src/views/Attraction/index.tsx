import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  PageHeader,
  ItemDescription,
  AttractionsGroup,
  AsideInfo,
} from '../../components/common';
import axios from 'axios';
import TypesAttraction from '../../types/TypesAttraction';

interface Props {
  attractionUrl: string;
  setTitle: Function;
}

function Attraction({ attractionUrl, setTitle }: Props) {
  const { attractionurl } = useParams();
  const history = useHistory();
  const [attraction, setAttraction] = useState<TypesAttraction>();
  const [otherAttractions, setOtherAttractions] = useState<TypesAttraction[]>(
    [],
  );

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/getattraction/${attractionurl}`)
      .then(function (result) {
        setTitle(result.data.attraction.name);
        setAttraction(result.data.attraction);
        setOtherAttractions(result.data.otherAttractions);
      })
      .catch(() => {
        history.push('/404');
      });
  }, []);

  return (
    <>
      {attraction && (
        <>
          <PageHeader
            text={attraction.name}
            img={[process.env.PUBLIC_URL + '/images/' + attraction.img]}
          />
          <StyledPageContainer>
            <ItemDescription description={attraction.description} />
            <AttractionsGroup
              header="Polecane podobne obiekty"
              attractions={otherAttractions}
            />
            <AsideInfo data={attraction.otherData} />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default Attraction;
