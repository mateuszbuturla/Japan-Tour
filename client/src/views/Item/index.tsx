import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  OtherSectionElementsGroup,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
} from 'components/common';
import { NotFound } from 'views';
import { useParams } from 'react-router-dom';
import Api from 'utils/Api';

interface Props {
  api: string;
  setTitle: (value: string) => void;
  locationPathElements: any[];
}

function Item({ api, setTitle, locationPathElements }: Props) {
  const { key } = useParams();
  const [item, setItem] = useState();
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const res = await Api.get(`${api}/${key}`);
      setTitle(res.data.name);
      setItem(res.data);
    } catch (err) {
      if (err.response.status === 404) {
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (!item) {
      getData();
    }
  }, []);

  if (error) {
    return <NotFound setTitle={setTitle} />;
  }

  if (!item) {
    return <>Loading</>;
  }

  return (
    <>
      <PageHeader
        text={item.name}
        img={item.img}
        locationPathElements={[...locationPathElements, { text: item.name }]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <ItemDescription description={item.description} />
        </StyledMainContentContainer>
        <AsideInfo data={item.otherData} />
      </StyledPageContainer>
    </>
  );
}

export default Item;
