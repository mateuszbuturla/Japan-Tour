import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  StyledPageContainer,
  StyledMainContentContainer,
  PageHeader,
  OtherSectionElementsGroup,
} from 'components/common';
import TypesCategory from 'types/TypesCategory';
import TypesDish from 'types/TypesDish';
import TypesCulture from 'types/TypesCulture';
import TypesElementCategory from 'types/TypesElementCategory';
import Api from 'utils/Api';

interface Props {
  header: string;
  categoryUrl: string;
  categories: any;
  setTitle: Function;
  api: string;
}

function OtherSection({ header, categoryUrl, categories, setTitle, api }: Props) {
  const thisCategory: TypesCategory = categories.find(
    (item: TypesCategory) => item.url === categoryUrl,
  );
  const [elements, setElements] = useState<TypesDish[] | TypesCulture[]>([]);
  const [elementsCategories, setElementsCategories] = useState<TypesElementCategory[]>([]);

  const getData = async () => {
    let res = await Api.get(`/${api}`);
    setElements(res.data);
    let res2 = await Api.get(`/categories/${api}`);
    setElementsCategories(res2.data);
  };

  useEffect(() => {
    setTitle(header);
    getData();
  }, []);

  return (
    <>
      <PageHeader text={header} img={thisCategory.img} />
      <StyledPageContainer>
        {elements.length > 0 && (
          <StyledMainContentContainer>
            {elementsCategories.map((item) => (
              <OtherSectionElementsGroup
                key={item.key}
                header={item.title}
                data={elements.filter((item2) => item2.category === item.key)}
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

export default connect(mapStateToProps, null)(OtherSection);
