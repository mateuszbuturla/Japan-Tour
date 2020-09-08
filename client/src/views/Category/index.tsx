import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../../components/common';
import { useParams } from 'react-router-dom';
import TypesCategory from '../../types/TypesCategory';

interface Props {
  categoryUrl: string;
  categories: any;
}

function Category({ categoryUrl, categories }: Props) {
  const thisCategory: TypesCategory = categories.find(
    (item: TypesCategory) => item.url === categoryUrl,
  );

  return (
    <>
      <PageHeader text={thisCategory.name} img={thisCategory.img} />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(Category);
