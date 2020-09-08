import React from 'react';
import { StyledText, StyledImage } from './StyledItemDescription';

interface Props {
  description: any;
}

function ItemDescription({ description }: Props) {
  return (
    <>
      {description.map((item: any) => {
        switch (item.type) {
          case 'text':
            return <StyledText>{item.value}</StyledText>;
          case 'img':
            return <StyledImage src={item.value} />;
        }
      })}
    </>
  );
}

export default ItemDescription;
