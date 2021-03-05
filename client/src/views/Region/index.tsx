import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
} from 'components/common';
import { useParams } from 'react-router-dom';
import { RegionSimpleFetcher } from 'fetchers';

interface Props {
  setTitle: (value: string) => void;
}

function Region({ setTitle }: Props) {
  const { key } = useParams();
  const [region, setRegion] = useState();

  const getData = async () => {
    const resRegion = await RegionSimpleFetcher(key);
    setRegion(resRegion);
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
        <StyledMainContentContainer></StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default Region;
