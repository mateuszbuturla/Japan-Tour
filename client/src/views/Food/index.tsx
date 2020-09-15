import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  StyledPageContainer,
  StyledMainContentContainer,
  PageHeader,
  DishsGroup,
} from '../../components/common';
import TypesCategory from '../../types/TypesCategory';

interface Props {
  categoryUrl: string;
  categories: any;
  setTitle: Function;
}

function Food({ categoryUrl, categories, setTitle }: Props) {
  const thisCategory: TypesCategory = categories.find(
    (item: TypesCategory) => item.url === categoryUrl,
  );

  useEffect(() => {
    setTitle('Kuchnia');
  }, []);

  return (
    <>
      <PageHeader text="Kuchnia Japońska" img={thisCategory.img} />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <DishsGroup
            header="Sushi"
            dishs={[
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
            ]}
          />
        </StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(Food);
