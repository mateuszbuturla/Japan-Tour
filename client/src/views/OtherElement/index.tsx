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
import axios from 'axios';
import TypesDish from 'types/TypesDish';
import TypesCulture from 'types/TypesCulture';

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

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/${api}/getone/${elementSlug}`)
      .then(function (result) {
        setElement(result.data.data);
        console.log(result.data);
        setTitle(result.data.data.name);
      })
      .catch(() => {
        history.push('/404');
      });
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
