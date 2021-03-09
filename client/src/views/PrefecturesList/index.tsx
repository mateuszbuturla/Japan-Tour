import {
  ItemsTile,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
  StyledSubHeader,
} from 'components/common';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RegionsPrefecturesFetcher } from 'fetchers';

import HeaderBg from 'assets/sushi.jpg';
import TypesPrefecture from 'types/TypesPrefecture';
import TypesRegion from 'types/TypesRegion';

interface Props {
  setTitle: (title: string) => void;
}

function PrefecturesList({ setTitle }: Props) {
  const { key } = useParams();
  const [prefectures, setPrefectures] = useState();
  const [regions, setRegions] = useState();

  const getData = async () => {
    const resPrefecturesRegions = await RegionsPrefecturesFetcher();
    if (resPrefecturesRegions) {
      setPrefectures(resPrefecturesRegions.prefectures);
      setRegions(resPrefecturesRegions.regions);
    } else {
      console.log(404);
    }
  };

  useEffect(() => {
    if (!prefectures || !regions) {
      getData();
    }
    setTitle('Lista prefektur');
  }, []);

  return (
    <>
      <PageHeader
        text={'Lista prefektur'}
        img={HeaderBg}
        locationPathElements={[{ text: 'Strona główna', url: '/' }, { text: 'Kuchnia' }]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <>
            {regions &&
              prefectures &&
              regions.map((region: TypesRegion) => (
                <>
                  <StyledSubHeader>{region.name}</StyledSubHeader>
                  <ItemsTile
                    data={prefectures
                      .filter((prefecture: TypesPrefecture) => prefecture.region == region._id)
                      .map((prefecture: TypesPrefecture) => ({
                        name: prefecture.name,
                        img: prefecture.img,
                        shortDescription: 'krotki opis',
                        url: `/podroze/prefektury/${prefecture.key}`,
                      }))}
                  />
                </>
              ))}
          </>
        </StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default PrefecturesList;
