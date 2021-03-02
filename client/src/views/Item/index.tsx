import React, { useEffect, useState } from 'react';
import {
  AsideInfo,
  ItemDescription,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
} from 'components/common';
import { NotFound } from 'views';
import { useParams } from 'react-router-dom';
import Api from 'utils/Api';
import { LoadingOut, LoadingIn } from 'animations';

interface Props {
  api: string;
  setTitle: (value: string) => void;
  locationPathElements: any[];
  additionalElements?: React.FunctionComponent[];
}

function Item({ api, setTitle, locationPathElements, additionalElements }: Props) {
  const { key } = useParams();
  const [item, setItem] = useState();
  const [error, setError] = useState(false);

  if (!item) {
    LoadingIn();
  }

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
    LoadingOut();
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
      <StyledPageContainer>
        <StyledMainContentContainer>
          {additionalElements &&
            additionalElements.map(
              (Component: React.FunctionComponent<{ aboveItemKey: string }>) => (
                <Component aboveItemKey={key} />
              ),
            )}
        </StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default Item;
