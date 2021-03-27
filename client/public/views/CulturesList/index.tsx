import {
  ItemsTile,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
  StyledSubHeader,
} from 'components/common';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CulturesCategoriesFetcher } from 'fetchers';

import HeaderBg from 'assets/culture.jpg';
import TypesCulture from 'types/TypesCulture';

interface Props {
  setTitle: (title: string) => void;
}

function CulturesList({ setTitle }: Props) {
  const { key } = useParams();
  const [cultures, setCultures] = useState();
  const [categories, setCategories] = useState();

  const getData = async () => {
    const resCulturesCategories = await CulturesCategoriesFetcher();
    if (resCulturesCategories) {
      setCultures(resCulturesCategories.cultures);
      setCategories(resCulturesCategories.categories);
    } else {
      console.log(404);
    }
  };

  useEffect(() => {
    if (!cultures || !categories) {
      getData();
    }
    setTitle('Kultura Japońska');
  }, []);

  return (
    <>
      <PageHeader
        text={'Kultura Japońska'}
        img={HeaderBg}
        locationPathElements={[{ text: 'Strona główna', url: '/' }, { text: 'Kultura' }]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <>
            {categories &&
              cultures &&
              categories.map((category: any) => (
                <>
                  <StyledSubHeader>{category.name}</StyledSubHeader>
                  <ItemsTile
                    data={cultures
                      .filter((culture: TypesCulture) => culture.category == category._id)
                      .map((culture: TypesCulture) => ({
                        name: culture.name,
                        img: culture.img,
                        shortDescription: culture.shortDescription,
                        url: `/kultura/${culture.key}`,
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

export default CulturesList;
