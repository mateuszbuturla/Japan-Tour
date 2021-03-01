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
import { useParams } from 'react-router-dom';
import { StyledPageHeader } from 'components/common/PageHeader/StyledCategoryHeader';
import titleReducer from 'actions/title';

interface Props {
  api: string;
  url: string;
  title: string;
  img: string;
  header?: string;
}

function ItemsList({ api, title, img, header }: Props) {
  const { key } = useParams();
  const [pageTitle, setPageTitle] = useState(title);
  const [itemsList, setItemsList] = useState();
  const [aboveItemsList, setAboveItemsList] = useState();
  const [customLocationPath, setCustomLocationPath] = useState();

  const getData = async () => {
    const resItems = await Api.get(`${api}${key ? '/' + key : ''}`);
    setItemsList(resItems.data.items);
    console.log(resItems);
    if (resItems.data.aboveItems) {
      setAboveItemsList(resItems.data.aboveItems);
      resItems.data.aboveItems.map((item: any) => {
        console.log(resItems.data.items.filter((item2: any) => item2.region == item._id));
      });
      if (
        api === 'attractions/allFromCategory' ||
        api === 'attractions/region' ||
        api === 'cities/region'
      ) {
        setPageTitle(`${resItems.data.aboveItems[0].name} ${header ? header : ''}`);
      }
      if (api === 'cities/region') {
        setCustomLocationPath([
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          {
            text: resItems.data.aboveItems[0].name,
            url: `/podroze/regiony/${resItems.data.aboveItems[0].key}`,
          },
          {
            text: 'Miasta',
          },
        ]);
      }
      if (api === 'attractions/region') {
        setCustomLocationPath([
          { text: 'Strona główna', url: '/' },
          { text: 'Podróże', url: `/podroze` },
          {
            text: resItems.data.aboveItems[0].name,
            url: `/podroze/regiony/${resItems.data.aboveItems[0].key}`,
          },
          {
            text: 'Atrakcje',
          },
        ]);
      }
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
      case 'cities/highlighted':
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
                    showMoreButtonUrl={`/podroze/regiony/${item.key}/miasta`}
                  />
                </>
              ))}
          </>
        );
      case 'attractions/highlighted':
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
                    showMoreButtonUrl={`/podroze/kategorie/${item.key}`}
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
      case 'attractions/allFromCategory':
        return (
          <ItemsTile
            data={itemsList.map((item: TypesAttraction) => ({
              name: item.name,
              img: item.img,
              url: `/podroze/atrakcje/${item.key}`,
              shortDescription: item.shortDescription,
            }))}
          />
        );
      case 'cities/region':
        return (
          <ItemsTile
            data={itemsList.map((item: TypesCity) => ({
              name: item.name,
              img: item.img,
              url: `/podroze/miasta/${item.key}`,
            }))}
          />
        );
      case 'attractions/region':
        return (
          <ItemsTile
            data={itemsList.map((item: TypesAttraction) => ({
              name: item.name,
              img: item.img,
              url: `/podroze/atrakcje/${item.key}`,
              shortDescription: item.shortDescription,
            }))}
          />
        );
    }
  };

  return (
    <>
      <PageHeader
        text={pageTitle}
        img={img}
        locationPathElements={
          customLocationPath
            ? customLocationPath
            : [
                { text: 'Strona główna', url: '/' },
                { text: 'Podróże', url: `/podroze` },
                { text: pageTitle },
              ]
        }
      />
      <StyledPageContainer>
        <StyledMainContentContainer>{generateDataToComponent()}</StyledMainContentContainer>
      </StyledPageContainer>
    </>
  );
}

export default ItemsList;
