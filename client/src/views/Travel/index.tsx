import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../../components/common';
import { useParams } from 'react-router-dom';
import { StyledPageContainer, JapanMap } from '../../components/common';

interface Props {
  categoryUrl: string;
  categories: any;
  setTitle: Function;
}

function Travel({ categoryUrl, categories, setTitle }: Props) {
  const thisCategory = categories.find((item: any) => item.url === categoryUrl);

  useEffect(() => {
    setTitle('Przewodnik podróży');
  }, []);

  return (
    <>
      <PageHeader text={thisCategory.name} images={thisCategory.images} />
      <StyledPageContainer>
        <JapanMap />
      </StyledPageContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(Travel);
