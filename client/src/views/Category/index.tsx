import React from 'react';
import { useSelector } from 'react-redux';
import { PageHeader } from 'components/common';
import { useParams } from 'react-router-dom';
import TypesCategory from 'types/TypesCategory';

interface Props {
  categoryUrl: string;
}

function Category({ categoryUrl }: Props) {
  const { categories } = useSelector((state: any) => state.categories);

  const thisCategory: TypesCategory = categories.find(
    (item: TypesCategory) => item.url === categoryUrl,
  );

  return (
    <>
      <PageHeader text={thisCategory.name} img={thisCategory.img} />
    </>
  );
}

export default Category;
