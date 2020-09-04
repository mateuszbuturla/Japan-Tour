import React, { useState, useEffect } from 'react';
import {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryImage,
  StyledCurtain,
} from './StyledHomeCategory';

interface Props {
  header: string;
  images: string[];
}

function HomeCategory({ header, images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = () => {
    if (currentImage + 1 < images.length) setCurrentImage(currentImage + 1);
    else setCurrentImage(0);
  };

  useEffect(() => {
    setTimeout(() => {
      changeImage();
    }, 5000);
  });

  return (
    <StyledCategory>
      {images.map((item, index) => (
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

export default HomeCategory;
