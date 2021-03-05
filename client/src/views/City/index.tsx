import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
} from 'components/common';
import { useParams } from 'react-router-dom';
import { SimpleCityFetcher } from 'fetchers';

interface Props {
  setTitle: (value: string) => void;
}

function City({ setTitle }: Props) {
  const { key } = useParams();
  const [city, setCity] = useState();

  const getData = async () => {
    const resCity = await SimpleCityFetcher(key);
    setCity(resCity);
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
        <StyledMainContentContainer></StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default City;
