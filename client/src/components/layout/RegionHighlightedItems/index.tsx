import { ItemsTile, StyledSubHeader } from 'components/common';
import React, { useEffect, useState } from 'react';
import TypesAttraction from 'types/TypesAttraction';
import TypesCity from 'types/TypesCity';
import Api from 'utils/Api';

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
            showMoreButtonUrl={`/podroze/regiony/${aboveItemKey}/miasta`}
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
            showMoreButtonUrl={`/podroze/regiony/${aboveItemKey}/atrakcje`}
          />
        </>
      )}
    </>
  );
}

export default RegionHighlightedItems;
