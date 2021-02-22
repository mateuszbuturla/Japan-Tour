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
  setTitle: Function;
}

function Attraction({ setTitle }: Props) {
  const { attractionKey } = useParams();
  const history = useHistory();
  const [attraction, setAttraction] = useState<TypesAttraction>();
  const [similarAttractions, setSimilarAttractions] = useState<TypesAttraction[]>([]);

  const getAttraction = async () => {
    try {
      let res = await Api.get(`/attractions/${attractionKey}`);
      setTitle(res.data.name);
      setAttraction(res.data);
      getAllAttractionsFromCategory(res.data);
    } catch (e) {
      console.log(e);
      //history.push('/404');
    }
  };

  const getAllAttractionsFromCategory = async (thisAttraction: TypesAttraction) => {
    let res = await Api.get(`/attractions/allFromCategory/${thisAttraction.category}`);
    setSimilarAttractions(
      res.data.filter((item: TypesAttraction) => item.key !== thisAttraction.key),
    );
  };

  useEffect(() => {
    getAttraction();
  }, []);

  return (
    <>
      {attraction && (
        <>
          <PageHeader
            text={attraction.name}
            img={attraction.img}
            locationPathElements={[
              { text: 'Strona główna', url: '/' },
              { text: 'Podróże', url: '/podroze' },
              { text: attraction.region, url: `/podroze/${attraction.region}` },
              { text: attraction.city, url: `/podroze/${attraction.region}/${attraction.city}` },
              {
                text: attraction.name,
                url: `/podroze/${attraction.region}/${attraction.city}/${attraction.name}`,
              },
            ]}
          />
          <StyledPageContainer>
            <StyledMainContentContainer>
              <ItemDescription description={attraction.description} />
              <AttractionsGroup
                header="Polecane podobne obiekty"
                attractions={similarAttractions}
              />
            </StyledMainContentContainer>
            <AsideInfo data={attraction.otherData} />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default Attraction;
