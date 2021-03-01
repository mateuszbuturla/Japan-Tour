import { ItemsTile, StyledSubHeader } from 'components/common';
import React, { useEffect, useState } from 'react';
import TypesAttraction from 'types/TypesAttraction';
import Api from 'utils/Api';

interface Props {
  aboveItemKey: string;
}

function AttractionsHighlightedItemsFromThisSameCategory({ aboveItemKey }: Props) {
  const [highlightedAttractions, setHighlightedAttractions] = useState();

  const getData = async () => {
    const resAttractions = await Api.get(
      `/attractions/highlightedFromCategoryByItemKey/${aboveItemKey}`,
    );
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

export default AttractionsHighlightedItemsFromThisSameCategory;
