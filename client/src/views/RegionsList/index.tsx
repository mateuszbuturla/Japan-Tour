import {
  ItemsTile,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
} from 'components/common';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TypesRegion from 'types/TypesRegion';
import { RegionsFetcher } from 'fetchers';

import HeaderBg from 'assets/regions/kanto.jpg';

interface Props {
  setTitle: (title: string) => void;
}

function RegionsList({ setTitle }: Props) {
  const { key } = useParams();
  const [regions, setRegions] = useState();

  const getData = async () => {
    const resRegions = await RegionsFetcher();
    setRegions(resRegions);
  };

  useEffect(() => {
    if (!regions) {
      getData();
    }
    setTitle('Lista regionów');
  }, []);

  return (
    <>
      <PageHeader
        text={'Lista regionów'}
        img={HeaderBg}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          { text: 'Lista regionów' },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          {regions && (
            <ItemsTile
              data={regions.map((item: TypesRegion) => ({
                name: item.name,
                img: item.img,
                shortDescription: 'krotki opis regionu',
                url: `/podroze/regiony/${item.key}`,
                highlighted: true,
              }))}
            />
          )}
        </StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default RegionsList;
