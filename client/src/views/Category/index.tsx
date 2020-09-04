import React from 'react';
import { connect } from 'react-redux';
import { CategoryHeader } from '../../components/common';
import { useParams } from 'react-router-dom';

interface Props {
  categoryUrl: string;
  categories: any;
}

function Category({ categoryUrl, categories }: Props) {
  const thisCategory = categories.find((item: any) => item.url === categoryUrl);

  return (
    <>
      <CategoryHeader text={thisCategory.name} images={thisCategory.images} />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(Category);
