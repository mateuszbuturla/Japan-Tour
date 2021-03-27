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
import { AttractionSimpleFetcher } from 'fetchers';
import TypesAttraction from 'types/TypesAttraction';

interface Props {
  setTitle: (value: string) => void;
}

function Attraction({ setTitle }: Props) {
  const { key } = useParams();
  const [attraction, setAttraction] = useState();
  const [similaryAttraction, setSimilaryAttraction] = useState();

  const getData = async () => {
    const resAttraction = await AttractionSimpleFetcher(key, true);
    setAttraction(resAttraction.attraction);
    setSimilaryAttraction(resAttraction.similaryAttractions);
    console.log(resAttraction);
    console.log(resAttraction.similaryAttractions);
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
        <StyledMainContentContainer>
          {similaryAttraction && (
            <>
              <StyledSubHeader>Podobne atrakcje</StyledSubHeader>
              <ItemsTile
                data={similaryAttraction
                  .filter((item: TypesAttraction) => item._id !== attraction._id)
                  .map((item: TypesAttraction) => ({
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

export default Attraction;
