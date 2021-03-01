import React, { useState, useEffect } from 'react';
import Api from 'utils/Api';
import { StyledSubHeader, ItemsTile } from 'components/common';
import TypesAttraction from 'types/TypesAttraction';
import TypesCity from 'types/TypesCity';

interface Props {
  aboveItemKey: string;
}

function RegionHighlightedItems({ aboveItemKey }: Props) {
  const [highlightedCities, setHighlightedCities] = useState();
  const [highlightedAttractions, setHighlightedAttractions] = useState();

  const getData = async () => {
    const resCities = await Api.get(`/cities/highlighted/${aboveItemKey}`);
    setHighlightedCities(resCities.data.items);
    const resAttractions = await Api.get(`/attractions/highlightedFromRegion/${aboveItemKey}`);
    console.log(resAttractions);
    setHighlightedAttractions(resAttractions.data.items);
  };

  useEffect(() => {
    if (!highlightedCities || !highlightedAttractions) {
      getData();
    }
  }, []);

  return (
    <>
      {highlightedCities && (
        <>
          <StyledSubHeader>Wyróżnione miasta</StyledSubHeader>
          <ItemsTile
            data={highlightedCities.map((item: TypesCity) => ({
              name: item.name,
              img: item.img,
              url: `/podroze/miasta/${item.key}`,
            }))}
          />
        </>
      )}
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

export default RegionHighlightedItems;
