import {
  ItemsTile,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
  StyledSubHeader,
} from 'components/common';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AttractionsCategoriesFetcher } from 'fetchers';

import HeaderBg from 'assets/attractions.jpg';
import TypesAttraction from 'types/TypesAttraction';

interface Props {
  setTitle: (title: string) => void;
}

function AttractionsList({ setTitle }: Props) {
  const { key } = useParams();
  const [attractions, setAttractions] = useState();
  const [categories, setCategories] = useState();

  const getData = async () => {
    const resAttractionsCategories = await AttractionsCategoriesFetcher();
    if (resAttractionsCategories) {
      setAttractions(resAttractionsCategories.attractions);
      setCategories(resAttractionsCategories.categories);
    } else {
      console.log(404);
    }
  };

  useEffect(() => {
    if (!attractions || !categories) {
      getData();
    }
    setTitle('Lista atrakcji');
  }, []);

  return (
    <>
      <PageHeader
        text={'Lista atrakcji'}
        img={HeaderBg}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          { text: 'Lista atrakcji' },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <>
            {categories &&
              attractions &&
              categories.map((category: any) => (
                <>
                  <StyledSubHeader>{category.name}</StyledSubHeader>
                  <ItemsTile
                    data={attractions
                      .filter((attraction: TypesAttraction) => attraction.category == category._id)
                      .map((attraction: TypesAttraction) => ({
                        name: attraction.name,
                        img: attraction.img,
                        shortDescription: attraction.shortDescription,
                        url: `/podroze/atrakcje/${attraction.key}`,
                      }))}
                  />
                </>
              ))}
          </>
        </StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default AttractionsList;
