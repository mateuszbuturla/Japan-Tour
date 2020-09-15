import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryImage,
  StyledCurtain,
} from './StyledHomeCategory';
import { PageTransitionEffect } from 'animations';
import TypesApplicationState from 'types/TypesApplicationState';

interface Props {
  url: string;
  header: string;
  img: string;
  refCurtain?: any;
}

function HomeCategory({ url, header, img, refCurtain }: Props) {
  const history = useHistory();
  const { pageTransitionEffectRef } = useSelector(
    (state: TypesApplicationState) => state.refs,
  );

  const handleCategoryClick = () => {
    PageTransitionEffect(pageTransitionEffectRef);
    setTimeout(() => {
      history.push(url);
    }, 1000);
  };

  return (
    <StyledCategory onClick={handleCategoryClick}>
      <StyledCategoryImage src={img} />
      <StyledCategoryHeader>{header}</StyledCategoryHeader>
      <StyledCurtain />
    </StyledCategory>
  );
}

export default HomeCategory;
