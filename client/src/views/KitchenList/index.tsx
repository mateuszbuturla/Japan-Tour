import {
  ItemsTile,
  PageHeader,
  StyledMainContentContainer,
  StyledPageContainer,
  StyledSubHeader,
} from 'components/common';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { KitchenCategoriesFetcher } from 'fetchers';

import HeaderBg from 'assets/sushi.jpg';
import TypesDish from 'types/TypesDish';

interface Props {
  setTitle: (title: string) => void;
}

function KitchenList({ setTitle }: Props) {
  const { key } = useParams();
  const [kitchens, setCultures] = useState();
  const [categories, setCategories] = useState();

  const getData = async () => {
    const resCulturesCategories = await KitchenCategoriesFetcher();
    if (resCulturesCategories) {
      setCultures(resCulturesCategories.kitchens);
      setCategories(resCulturesCategories.categories);
    } else {
      console.log(404);
    }
  };

  useEffect(() => {
    if (!kitchens || !categories) {
      getData();
    }
    setTitle('Kuchnia Japońska');
  }, []);

  return (
    <>
      <PageHeader
        text={'Kuchnia Japońska'}
        img={HeaderBg}
        locationPathElements={[{ text: 'Strona główna', url: '/' }, { text: 'Kuchnia' }]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <>
            {categories &&
              kitchens &&
              categories.map((category: any) => (
                <>
                  <StyledSubHeader>{category.name}</StyledSubHeader>
                  <ItemsTile
                    data={kitchens
                      .filter((kitchen: TypesDish) => kitchen.category == category._id)
                      .map((kitchen: TypesDish) => ({
                        name: kitchen.name,
                        img: kitchen.img,
                        shortDescription: kitchen.shortDescription,
                        url: `/kuchnia/${kitchen.key}`,
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

export default KitchenList;
