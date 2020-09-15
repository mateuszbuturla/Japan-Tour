import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryImage,
  StyledCurtain,
} from './StyledHomeCategory';
import { PageTransitionEffect } from 'animations';

interface Props {
  url: string;
  header: string;
  img: string;
  refCurtain?: any;
}

function HomeCategory({ url, header, img, refCurtain }: Props) {
  const history = useHistory();

  const handleCategoryClick = () => {
    PageTransitionEffect(refCurtain);
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

const mapStateToProps = (state: any) => ({
  refCurtain: state.refs.pageTransitionEffectRef,
});

export default connect(mapStateToProps, null)(HomeCategory);
