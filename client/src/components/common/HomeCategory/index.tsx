import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryImage,
  StyledCurtain,
} from './StyledHomeCategory';
import TypesApplicationState from 'types/TypesApplicationState';
import ChangePath from 'utils/ChangePath';

interface Props {
  url: string;
  header: string;
  img: string;
  refCurtain?: any;
}

function HomeCategory({ url, header, img, refCurtain }: Props) {
  const history = useHistory();

  const handleCategoryClick = () => {
    ChangePath(history, url);
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
