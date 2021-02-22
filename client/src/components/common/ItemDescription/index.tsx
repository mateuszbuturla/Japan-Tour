import React from 'react';
import ReactHtmlParser from 'react-html-parser';

interface Props {
  description: string;
}

function ItemDescription({ description }: Props) {
  return <div>{ReactHtmlParser(description)}</div>;
}

export default ItemDescription;
