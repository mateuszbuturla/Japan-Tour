import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../../components/common';
import { useParams } from 'react-router-dom';
import {
  StyledPageContainer,
  JapanMap,
  StyledMainContentContainer,
  AsideInfo,
} from '../../components/common';
import TypesCategory from '../../types/TypesCategory';

interface Props {
  categoryUrl: string;
  categories: any;
  setTitle: Function;
}

function Travel({ categoryUrl, categories, setTitle }: Props) {
  const thisCategory: TypesCategory = categories.find(
    (item: TypesCategory) => item.url === categoryUrl,
  );

  useEffect(() => {
    setTitle('Przewodnik podróży');
  }, []);

  return (
    <>
      <PageHeader text={thisCategory.name} img={thisCategory.img} />
      <StyledPageContainer>
        <StyledMainContentContainer>
          <JapanMap />
        </StyledMainContentContainer>
        <AsideInfo data={[]} />
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(Travel);
