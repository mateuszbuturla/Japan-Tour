import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  StyledMainContentContainer,
  PageHeader,
  ItemDescription,
  OtherSectionElementsGroup,
  AsideInfo,
} from 'components/common';
import TypesDish from 'types/TypesDish';
import TypesCulture from 'types/TypesCulture';
import Api from 'utils/Api';

interface Props {
  setTitle: Function;
  categoryUrl: string;
  api: string;
}

function OtherElement({ setTitle, categoryUrl, api }: Props) {
  const { elementSlug } = useParams();
  const history = useHistory();
  const [element, setElement] = useState<TypesDish | TypesCulture>();
  const [similarElement, setSimilarElement] = useState<TypesDish[] | TypesCulture[]>([]);

  const getData = async () => {
    try {
      let res = await Api.get(`/${api}/getone/${elementSlug}`);
      setElement(res.data.data);
      setTitle(res.data.data.name);
    } catch (e) {
      history.push('/404');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {element && (
        <>
          <PageHeader text={element.name} img={process.env.PUBLIC_URL + '/images/' + element.img} />
          <StyledPageContainer>
            <StyledMainContentContainer>
              <ItemDescription description={element.description} />
              <OtherSectionElementsGroup
                header="Inne z tej kategori"
                data={similarElement}
                categoryUrl={categoryUrl}
              />
            </StyledMainContentContainer>
            <AsideInfo data={element.otherData} />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default OtherElement;
