import {
  ItemsTile,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
  StyledSubHeader,
} from 'components/common';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TypesRegion from 'types/TypesRegion';
import { RegionsCitiesFetcher } from 'fetchers';

import HeaderBg from 'assets/city.jpg';
import TypesCity from 'types/TypesCity';

interface Props {
  setTitle: (title: string) => void;
}

function CitiesList({ setTitle }: Props) {
  const { key } = useParams();
  const [cities, setCities] = useState();
  const [regions, setRegions] = useState();

  const getData = async () => {
    const resCitiesRegions = await RegionsCitiesFetcher();
    if (resCitiesRegions) {
      setCities(resCitiesRegions.cities);
      setRegions(resCitiesRegions.regions);
    } else {
      console.log(404);
    }
  };

  useEffect(() => {
    if (!regions || !cities) {
      getData();
    }
    setTitle('Lista miast');
  }, []);

  return (
    <>
      <PageHeader
        text={'Lista miast'}
        img={HeaderBg}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          { text: 'Lista miast' },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <>
            {regions &&
              cities &&
              regions.map((region: any) => (
                <>
                  <StyledSubHeader>{region.name}</StyledSubHeader>
                  <ItemsTile
                    data={cities
                      .filter((city: any) => city.region == region._id)
                      .map((city: TypesCity) => ({
                        name: city.name,
                        img: city.img,
                        shortDescription: city.shortDescription,
                        url: `/podroze/miasta/${city.key}`,
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

export default CitiesList;
