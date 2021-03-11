import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  ItemsTile,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
  StyledSubHeader,
} from 'components/common';
import { useParams } from 'react-router-dom';
import { RegionSimpleFetcher } from 'fetchers';
import TypesCity from 'types/TypesCity';
import TypesAttraction from 'types/TypesAttraction';
import TypesPrefecture from 'types/TypesPrefecture';

interface Props {
  setTitle: (value: string) => void;
}

function Region({ setTitle }: Props) {
  const { key } = useParams();
  const [prefectures, setPrefectures] = useState();
  const [region, setRegion] = useState();
  const [cities, setCities] = useState();
  const [attractions, setAttractions] = useState();

  const getData = async () => {
    const resRegion = await RegionSimpleFetcher(key, true, true, true);
    setRegion(resRegion.region);
    setCities(resRegion.cities);
    setAttractions(resRegion.attractions);
    setPrefectures(resRegion.prefectures);
  };

  useEffect(() => {
    if (!region) {
      getData();
    }
  }, []);

  if (!region) {
    return <>Loading</>;
  }

  return (
    <>
      <PageHeader
        text={region.name}
        img={region.img}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          { text: 'Regiony', url: `/podroze/regiony` },
          { text: region.name },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <ItemDescription description={region.description} />
        </StyledMainContentContainer>
        <AsideInfo data={region.otherData} />
      </StyledPageContainer>
      <StyledPageContainer>
        <StyledMainContentContainer>
          {prefectures && (
            <>
              <StyledSubHeader>Prefektury</StyledSubHeader>
              <ItemsTile
                data={prefectures.map((item: TypesPrefecture) => ({
                  name: item.name,
                  img: item.img,
                  shortDescription: item.shortDescription,
                  url: `/podroze/prefektury/${item.key}`,
                  highlighted: true,
                }))}
              />
            </>
          )}
          {cities && (
            <>
              <StyledSubHeader>Miasta</StyledSubHeader>
              <ItemsTile
                data={cities.map((item: TypesCity) => ({
                  name: item.name,
                  img: item.img,
                  shortDescription: item.shortDescription,
                  url: `/podroze/miasta/${item.key}`,
                  highlighted: true,
                }))}
              />
            </>
          )}
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

export default Region;
