import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
} from 'components/common';
import { useParams } from 'react-router-dom';
import { KitchenSimpleFetcher } from 'fetchers';
import { NotFound } from 'views';

interface Props {
  setTitle: (value: string) => void;
}

function Kitchen({ setTitle }: Props) {
  const { key } = useParams();
  const [kitchen, setKitchen] = useState();
  const [error, setError] = useState();

  const getData = async () => {
    const resKitchen = await KitchenSimpleFetcher(key);
    if (resKitchen === 404) {
      setError(404);
      return;
    }
    setKitchen(resKitchen);
  };

  useEffect(() => {
    if (!kitchen) {
      getData();
    }
  }, []);

  if (error === 404) {
    return <NotFound setTitle={setTitle} />;
  }

  if (!kitchen) {
    return null;
  }

  return (
    <>
      <PageHeader
        text={kitchen.name}
        img={kitchen.img}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Kuchnia', url: `/kuchnia` },
          { text: kitchen.name },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <ItemDescription description={kitchen.description} />
        </StyledMainContentContainer>
        <AsideInfo data={kitchen.otherData} />
      </StyledPageContainer>
      <StyledPageContainer>
        <StyledMainContentContainer></StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default Kitchen;
