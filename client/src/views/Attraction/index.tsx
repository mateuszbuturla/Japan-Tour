import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
} from 'components/common';
import { useParams } from 'react-router-dom';
import { AttractionSimpleFetcher } from 'fetchers';

interface Props {
  setTitle: (value: string) => void;
}

function Attraction({ setTitle }: Props) {
  const { key } = useParams();
  const [attraction, setAttraction] = useState();

  const getData = async () => {
    const resAttraction = await AttractionSimpleFetcher(key);
    setAttraction(resAttraction);
  };

  useEffect(() => {
    if (!attraction) {
      getData();
    }
  }, []);

  if (!attraction) {
    return <>Loading</>;
  }

  return (
    <>
      <PageHeader
        text={attraction.name}
        img={attraction.img}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          { text: 'Atrakcje', url: `/podroze/atrakcje` },
          { text: attraction.name },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <ItemDescription description={attraction.description} />
        </StyledMainContentContainer>
        <AsideInfo data={attraction.otherData} />
      </StyledPageContainer>
      <StyledPageContainer>
        <StyledMainContentContainer></StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default Attraction;
