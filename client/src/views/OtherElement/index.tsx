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
}

function OtherElement({ setTitle, categoryUrl }: Props) {
  const { elementSlug } = useParams();
  const history = useHistory();
  const [element, setElement] = useState<TypesDish | TypesCulture>({
    name: 'Uramaki',
    type: 'sushi',
    img: 'sushi.jpg',
    url: 'uramaki',
    shortDescription: 'Lorem ipsum',
    description: [
      { type: 'text', value: 'Lorem ipsum' },
      { type: 'text', value: 'Lorem ipsum' },
    ],
    otherData: [],
  });
  const [similarElement, setSimilarElement] = useState<TypesDish[] | TypesCulture[]>([]);

  useEffect(() => {
    setTitle('test');
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
