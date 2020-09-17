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

  useEffect(() => {
    setTitle(header);
    axios
      .get(`http://localhost:4000/api/${api}/getall`)
      .then(function (result) {
        setElements(result.data);
      });
  }, []);

  return (
    <>
      <PageHeader text={header} img={thisCategory.img} />
      <StyledPageContainer>
        {elements.length > 0 && (
          <StyledMainContentContainer>
            <DishsGroup
              header="Sushi"
              dishs={elements}
              categoryUrl={categoryUrl}
            />
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
