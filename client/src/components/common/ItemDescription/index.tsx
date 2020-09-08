import React from 'react';
import { StyledText, StyledImage } from './StyledItemDescription';
import TypesItemDescription from '../../../types/TypesItemDescription';

interface Props {
  description: TypesItemDescription[];
}

function ItemDescription({ description }: Props) {
  return (
    <>
      {description.map((item: TypesItemDescription) => {
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
