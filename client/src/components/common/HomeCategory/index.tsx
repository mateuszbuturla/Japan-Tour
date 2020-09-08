import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryImage,
  StyledCurtain,
} from './StyledHomeCategory';
import { PageTransitionEffect } from '../../../animations';

interface Props {
  url: string;
  header: string;
  img: string[];
  refCurtain?: any;
}

function HomeCategory({ url, header, img, refCurtain }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const history = useHistory();

  const changeImage = () => {
    if (currentImage + 1 < img.length) setCurrentImage(currentImage + 1);
    else setCurrentImage(0);
  };

  const handleCategoryClick = () => {
    PageTransitionEffect(refCurtain);
    setTimeout(() => {
      history.push(url);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      changeImage();
    }, 5000);
  });

  return (
    <StyledCategory onClick={handleCategoryClick}>
      {img.map((item, index) => (
        <StyledCategoryImage
          src={item}
          key={index}
          hidden={index === currentImage ? false : true}
        />
      ))}
      <StyledCategoryHeader>{header}</StyledCategoryHeader>
      <StyledCurtain />
    </StyledCategory>
  );
}

const mapStateToProps = (state: any) => ({
  refCurtain: state.refs.pageTransitionEffectRef,
});

export default connect(mapStateToProps, null)(HomeCategory);
