import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
} from 'components/common';
import { useParams } from 'react-router-dom';
import { CultureSimpleFetcher } from 'fetchers';

interface Props {
  setTitle: (value: string) => void;
}

function Culture({ setTitle }: Props) {
  const { key } = useParams();
  const [culture, setCulture] = useState();

  const getData = async () => {
    const resCulture = await CultureSimpleFetcher(key);
    setCulture(resCulture);
  };

  useEffect(() => {
    if (!culture) {
      getData();
    }
  }, []);

  if (!culture) {
    return <>Loading</>;
  }

  return (
    <>
      <PageHeader
        text={culture.name}
        img={culture.img}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Kultura', url: `/kultura` },
          { text: culture.name },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <ItemDescription description={culture.description} />
        </StyledMainContentContainer>
        <AsideInfo data={culture.otherData} />
      </StyledPageContainer>
      <StyledPageContainer>
        <StyledMainContentContainer></StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default Culture;
