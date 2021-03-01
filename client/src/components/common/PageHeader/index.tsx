import { LocationPath } from 'components/common';
import React, { useEffect, useState } from 'react';
import {
  StyledPageHeader,
  StyledPageHeaderImage,
  StyledPageHeaderText,
} from './StyledCategoryHeader';

interface Props {
  text: string;
  img: string;
  small?: boolean;
  locationPathElements?: any[];
}

function PageHeader({ text, img, small, locationPathElements }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = () => {
    if (currentImage + 1 < img.length) setCurrentImage(currentImage + 1);
    else setCurrentImage(0);
  };

  useEffect(() => {
    setTimeout(() => {
      changeImage();
    }, 5000);
  });

  return (
    <>
      <StyledPageHeader small={small ? true : false}>
        <StyledPageHeaderImage src={img} />
        <StyledPageHeaderText>{text}</StyledPageHeaderText>
      </StyledPageHeader>
      {locationPathElements && <LocationPath elements={locationPathElements} />}
    </>
  );
}

export default PageHeader;
