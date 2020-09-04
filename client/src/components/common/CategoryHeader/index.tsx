import React, { useState, useEffect } from 'react';
import {
  StyledCategoryHeader,
  StyledCategoryText,
  StyledCategoryImage,
} from './StyledCategoryHeader';

interface Props {
  text: string;
  images: string[];
}

function CategoryHeader({ text, images }: Props) {
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
    <StyledCategoryHeader>
      {images.map((item, index) => (
        <StyledCategoryImage
          src={item}
          key={index}
          hidden={index === currentImage ? false : true}
        />
      ))}
      <StyledCategoryText>{text}</StyledCategoryText>
    </StyledCategoryHeader>
  );
}

export default CategoryHeader;
