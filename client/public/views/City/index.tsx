import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
  StyledSubHeader,
  ItemsTile,
} from 'components/common';
import { useParams } from 'react-router-dom';
import { SimpleCityFetcher } from 'fetchers';
import TypesAttraction from 'types/TypesAttraction';

interface Props {
  setTitle: (value: string) => void;
}

function City({ setTitle }: Props) {
  const { key } = useParams();
  const [city, setCity] = useState();
  const [attractions, setAttractions] = useState();

  const getData = async () => {
    const resCity = await SimpleCityFetcher(key, true);
    setCity(resCity.city);
    setAttractions(resCity.attractions);
  };

  useEffect(() => {
    if (!city) {
      getData();
    }
  }, []);

  if (!city) {
    return <>Loading</>;
  }

  return (
    <>
      <PageHeader
        text={city.name}
        img={city.img}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          { text: 'Miasta', url: `/podroze/miasta` },
          { text: city.name },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <ItemDescription description={city.description} />
        </StyledMainContentContainer>
        <AsideInfo data={city.otherData} />
      </StyledPageContainer>
      <StyledPageContainer>
        <StyledMainContentContainer>
          {attractions && (
            <>
              <StyledSubHeader>Atrakcje</StyledSubHeader>
              <ItemsTile
                data={attractions.map((item: TypesAttraction) => ({
                  name: item.name,
                  img: item.img,
                  shortDescription: item.shortDescription,
                  url: `/podroze/atrakcje/${item.key}`,
                  highlighted: item.highlighted,
                }))}
              />
            </>
          )}
        </StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default City;
