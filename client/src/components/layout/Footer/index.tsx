import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TypesElementCategory from 'types/TypesElementCategory';
import TypesFooterData from 'types/TypesFooterData';
import TypesFooterDataElement from 'types/TypesFooterDataElement';
import Api from 'utils/Api';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterCopyright,
  StyledFooterList,
  StyledFooterListElement,
} from './StyledFooter';

function Footer() {
  const [footerData, setFooterData] = useState<TypesFooterData[]>();
  const history = useHistory();

  const getData = async () => {
    let newFooterData = [
      {
        header: 'Regiony',
        data: [
          {
            title: 'Hokkaidō',
            url: '/podroze/regiony/hokkaido',
          },
          {
            title: 'Tōhoku',
            url: '/podroze/regiony/tohoku',
          },
          {
            title: 'Kantō',
            url: '/podroze/regiony/kanto',
          },
          {
            title: 'Chūbu',
            url: '/podroze/regiony/chubu',
          },
          {
            title: 'Kansai',
            url: '/podroze/regiony/kansai',
          },
          {
            title: 'Chūgoku',
            url: '/podroze/regiony/chugoku',
          },
          {
            title: 'Shikoku',
            url: '/podroze/regiony/shikoku',
          },
          {
            title: 'Kyūshū',
            url: '/podroze/regiony/kyushu',
          },
          {
            title: 'Okinawa',
            url: '/podroze/regiony/okinawa',
          },
        ],
      },
      {
        header: 'Najważniejsze miasta',
        data: [
          {
            title: 'Sapporo',
            url: '/podroze/miasta/sapporo',
          },
          {
            title: 'Sendai',
            url: '/podroze/miasta/sendai',
          },
          {
            title: 'Tokyo',
            url: '/podroze/miasta/tokyo',
          },
          {
            title: 'Nagoya',
            url: '/podroze/miasta/nagoya',
          },
          {
            title: 'Kyoto',
            url: '/podroze/miasta/kyoto',
          },
          {
            title: 'Osaka',
            url: '/podroze/miasta/osaka',
          },
          {
            title: 'Nara',
            url: '/podroze/miasta/nara',
          },
          {
            title: 'Hiroshima',
            url: '/podroze/miasta/hiroshima',
          },
          {
            title: 'Nagasaki',
            url: '/podroze/miasta/nagasaki',
          },
        ],
      },
    ];

    const resCategories = await Api.get('/categories');

    const attraction = resCategories.data
      .filter((item: TypesElementCategory) => item.section === 'attractions')
      .map((item: TypesElementCategory) => ({
        title: item.name,
        url: `/podroze/atrakcje/${item.key}`,
      }));

    newFooterData.push({ header: 'Atrakcje', data: attraction });

    const cultures = resCategories.data
      .filter((item: TypesElementCategory) => item.section === 'cultures')
      .map((item: TypesElementCategory) => ({
        title: item.name,
        url: `/kultura/${item.key}`,
      }));

    newFooterData.push({ header: 'Kultura', data: cultures });

    const kitchen = resCategories.data
      .filter((item: TypesElementCategory) => item.section === 'kitchens')
      .map((item: TypesElementCategory) => ({
        title: item.name,
        url: `/kuchnia/${item.key}`,
      }));

    newFooterData.push({ header: 'Kuchnia', data: kitchen });

    setFooterData(newFooterData);
  };

  useEffect(() => {
    if (!footerData) {
      getData();
    }
  }, []);

  const handleLinkClick = (to: string) => {
    history.push(to);
  };

  return (
    <StyledFooter>
      {footerData && (
        <StyledFooterContainer>
          {footerData.map((category: TypesFooterData) => (
            <StyledFooterList>
              <StyledFooterListElement header>{category.header}</StyledFooterListElement>
              {category.data.map((item: TypesFooterDataElement) => (
                <StyledFooterListElement onClick={() => handleLinkClick(item.url)}>
                  {item.title}
                </StyledFooterListElement>
              ))}
            </StyledFooterList>
          ))}
        </StyledFooterContainer>
      )}
      <StyledFooterCopyright>
        Copyright © 2020-2021 Mateusz Buturla moja-japonia.com
      </StyledFooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
