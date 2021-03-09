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
import { PrefectureSimpleFetcher } from 'fetchers';
import TypesCity from 'types/TypesCity';
import TypesAttraction from 'types/TypesAttraction';

interface Props {
  setTitle: (value: string) => void;
}

function Prefecture({ setTitle }: Props) {
  const { key } = useParams();
  const [prefecture, setPrefecture] = useState();
  const [cities, setCities] = useState();
  const [attractions, setAttractions] = useState();

  const getData = async () => {
    const resPrefecture = await PrefectureSimpleFetcher(key, true, true);
    setPrefecture(resPrefecture.prefecture);
    setCities(resPrefecture.cities);
    setAttractions(resPrefecture.attractions);
  };

  useEffect(() => {
    if (!prefecture) {
      getData();
    }
  }, []);

  if (!prefecture) {
    return <>Loading</>;
  }

  return (
    <>
      <PageHeader
        text={prefecture.name}
        img={prefecture.img}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          { text: 'Prefektury', url: `/podroze/prefektury` },
          { text: prefecture.name },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <ItemDescription description={prefecture.description} />
        </StyledMainContentContainer>
        <AsideInfo data={prefecture.otherData} />
      </StyledPageContainer>
      <StyledPageContainer>
        <StyledMainContentContainer>
          {cities && (
            <>
              <StyledSubHeader>Miasta</StyledSubHeader>
              <ItemsTile
                data={cities.map((item: TypesCity) => ({
                  name: item.name,
                  img: item.img,
                  shortDescription: 'krotki opis miasta',
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

export default Prefecture;
