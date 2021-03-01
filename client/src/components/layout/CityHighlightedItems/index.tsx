import React, { useState, useEffect } from 'react';
import Api from 'utils/Api';
import { StyledSubHeader, ItemsTile } from 'components/common';
import TypesAttraction from 'types/TypesAttraction';

interface Props {
  aboveItemKey: string;
}

function CityHighlightedItems({ aboveItemKey }: Props) {
  const [highlightedAttractions, setHighlightedAttractions] = useState();

  const getData = async () => {
    const resAttractions = await Api.get(`/attractions/highlightedFromCity/${aboveItemKey}`);
    setHighlightedAttractions(resAttractions.data.items);
  };

  useEffect(() => {
    if (!highlightedAttractions) {
      getData();
    }
  }, []);

  return (
    <>
      {highlightedAttractions && (
        <>
          <StyledSubHeader>Wyróżnione atrakcje</StyledSubHeader>
          <ItemsTile
            data={highlightedAttractions.map((item: TypesAttraction) => ({
              name: item.name,
              img: item.img,
              shortDescription: item.shortDescription,
              url: `/podroze/atrakcje/${item.key}`,
            }))}
          />
        </>
      )}
    </>
  );
}

export default CityHighlightedItems;
