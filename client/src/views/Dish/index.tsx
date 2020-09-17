import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  StyledMainContentContainer,
  PageHeader,
  ItemDescription,
  DishsGroup,
  AsideInfo,
} from 'components/common';
import axios from 'axios';
import TypesDish from 'types/TypesDish';

interface Props {
  setTitle: Function;
  categoryUrl: string;
}

function Dish({ setTitle, categoryUrl }: Props) {
  const { dishSlug } = useParams();
  const history = useHistory();
  const [dish, setDish] = useState<TypesDish>({
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
  const [otherDishs, setOtherDishs] = useState<TypesDish[]>([
    {
      name: 'Uramaki',
      type: 'sushi',
      img: 'sushi.jpg',
      url: 'uramaki',
      shortDescription: 'Lorem ipsum',
      description: [],
      otherData: [],
    },
    {
      name: 'Uramaki',
      type: 'sushi',
      img: 'sushi.jpg',
      url: 'uramaki',
      shortDescription: 'Lorem ipsum',
      description: [],
      otherData: [],
    },
    {
      name: 'Uramaki',
      type: 'sushi',
      img: 'sushi.jpg',
      url: 'uramaki',
      shortDescription: 'Lorem ipsum',
      description: [],
      otherData: [],
    },
  ]);

  useEffect(() => {
    setTitle('test');
  }, []);

  return (
    <>
      {dish && (
        <>
          <PageHeader
            text={dish.name}
            img={process.env.PUBLIC_URL + '/images/' + dish.img}
          />
          <StyledPageContainer>
            <StyledMainContentContainer>
              <ItemDescription description={dish.description} />
              <DishsGroup
                header="Inne z tej kategori"
                dishs={otherDishs}
                categoryUrl={categoryUrl}
              />
            </StyledMainContentContainer>
            <AsideInfo data={dish.otherData} />
          </StyledPageContainer>
        </>
      )}
    </>
  );
}

export default Dish;
