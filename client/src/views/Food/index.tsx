import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  StyledPageContainer,
  StyledMainContentContainer,
  PageHeader,
  DishsGroup,
} from 'components/common';
import TypesCategory from 'types/TypesCategory';
import TypesDish from 'types/TypesDish';
import TypesCulture from 'types/TypesCulture';
import axios from 'axios';

interface Props {
  header: string;
  categoryUrl: string;
  categories: any;
  setTitle: Function;
  api: string;
}

function Food({ header, categoryUrl, categories, setTitle, api }: Props) {
  const thisCategory: TypesCategory = categories.find(
    (item: TypesCategory) => item.url === categoryUrl,
  );
  const [elements, setElements] = useState<TypesDish[] | TypesCulture[]>([]);
  const [elementsCategories, setElementsCategories] = useState<string[]>([]);

  useEffect(() => {
    setTitle(header);
    axios
      .get(`http://localhost:4000/api/${api}/getall`)
      .then(function (result) {
        setElements(result.data.data);
        setElementsCategories(result.data.categories);
      });
  }, []);

  return (
    <>
      <PageHeader text={header} img={thisCategory.img} />
      <StyledPageContainer>
        {elements.length > 0 && (
          <StyledMainContentContainer>
            {elementsCategories.map((item) => (
              <DishsGroup
                key={item}
                header={item}
                dishs={elements.filter((item2) => item2.type === item)}
                categoryUrl={categoryUrl}
              />
            ))}
          </StyledMainContentContainer>
        )}
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(Food);
