import React, { useEffect, useState } from 'react';
import {
  PageHeader,
  ItemsTile,
  StyledPageContainer,
  StyledSubHeader,
  StyledMainContentContainer,
} from 'components/common';
import Api from 'utils/Api';
import TypesItemTile from 'types/TypesItemTile';
import TypesAttraction from 'types/TypesAttraction';
import TypesCity from 'types/TypesCity';
import TypesRegion from 'types/TypesRegion';

interface Props {
  api: string;
  url: string;
  title: string;
  img: string;
}

function ItemsList({ api, title, img }: Props) {
  const [itemsList, setItemsList] = useState();
  const [aboveItemsList, setAboveItemsList] = useState();

  const getData = async () => {
    const resItems = await Api.get(api);
    setItemsList(resItems.data.items);
    if (resItems.data.aboveItems) {
      setAboveItemsList(resItems.data.aboveItems);
      resItems.data.aboveItems.map((item: any) => {
        console.log(resItems.data.items.filter((item2: any) => item2.region == item._id));
      });
    }
  };

  useEffect(() => {
    if (!itemsList) {
      getData();
    }
  }, []);

  if (!itemsList) {
    return <>Loading</>;
  }

  const generateDataToComponent = () => {
    switch (api) {
      case 'regions':
        return (
          <ItemsTile
            data={itemsList.map((item: TypesRegion) => ({
              name: item.name,
              img: item.img,
              url: `/podroze/regiony/${item.key}`,
            }))}
          />
        );
      case 'cities':
        return (
          <>
            {aboveItemsList &&
              aboveItemsList.map((item: any) => (
                <>
                  <StyledSubHeader>{item.name}</StyledSubHeader>
                  <ItemsTile
                    data={itemsList
                      .filter((item2: any) => item2.region == item._id)
                      .map((item3: TypesCity) => ({
                        name: item3.name,
                        img: item3.img,
                        url: `/podroze/miasta/${item3.key}`,
                      }))}
                  />
                </>
              ))}
          </>
        );
      case 'attractions':
        return (
          <>
            {aboveItemsList &&
              aboveItemsList.map((item: any) => (
                <>
                  <StyledSubHeader>{item.name}</StyledSubHeader>
                  <ItemsTile
                    data={itemsList
                      .filter((item2: any) => item2.category == item._id)
                      .map((item3: TypesAttraction) => ({
                        name: item3.name,
                        img: item3.img,
                        shortDescription: item3.shortDescription,
                        url: `/podroze/atrakcje/${item3.key}`,
                      }))}
                  />
                </>
              ))}
          </>
        );
      case 'cultures':
        return (
          <>
            {aboveItemsList &&
              aboveItemsList.map((item: any) => (
                <>
                  <StyledSubHeader>{item.name}</StyledSubHeader>
                  <ItemsTile
                    data={itemsList
                      .filter((item2: any) => item2.category == item._id)
                      .map((item3: TypesAttraction) => ({
                        name: item3.name,
                        img: item3.img,
                        shortDescription: item3.shortDescription,
                        url: `/kultura/${item3.key}`,
                      }))}
                  />
                </>
              ))}
          </>
        );
      case 'dishes':
        return (
          <>
            {aboveItemsList &&
              aboveItemsList.map((item: any) => (
                <>
                  <StyledSubHeader>{item.name}</StyledSubHeader>
                  <ItemsTile
                    data={itemsList
                      .filter((item2: any) => item2.category == item._id)
                      .map((item3: TypesAttraction) => ({
                        name: item3.name,
                        img: item3.img,
                        shortDescription: item3.shortDescription,
                        url: `/kuchnia/${item3.key}`,
                      }))}
                  />
                </>
              ))}
          </>
        );
    }
  };

  return (
    <>
      <PageHeader
        text={title}
        img={img}
        locationPathElements={[
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          { text: title },
        ]}
      />
      <StyledPageContainer>
        <StyledMainContentContainer>{generateDataToComponent()}</StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default ItemsList;
