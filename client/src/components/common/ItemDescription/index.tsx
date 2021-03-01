import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { StyledItemDescription } from './StyledItemDescription';

interface Props {
  description: string;
}

function ItemDescription({ description }: Props) {
  return <StyledItemDescription>{ReactHtmlParser(description)}</StyledItemDescription>;
}

export default ItemDescription;
