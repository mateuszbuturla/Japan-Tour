import React, { useState, useEffect } from 'react';
import {
  StyledPageHeader,
  StyledPageHeaderText,
  StyledPageHeaderImage,
} from './StyledCategoryHeader';

interface Props {
  text: string;
  images: string[];
  small?: boolean;
}

function PageHeader({ text, images, small }: Props) {
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
    <StyledPageHeader small={small ? true : false}>
      {images.map((item, index) => (
        <StyledPageHeaderImage
          src={item}
          key={index}
          hidden={index === currentImage ? false : true}
        />
      ))}
      <StyledPageHeaderText>{text}</StyledPageHeaderText>
    </StyledPageHeader>
  );
}

export default PageHeader;
