import React, { useState, useEffect } from 'react';
import {
  StyledNav,
  StyledNavSectionHeader,
  StyledNavList,
  StyledNavListElement,
  StyledBurgerButton,
} from './StyledNav';
import { useSwitch } from 'hooks';
import Api from 'utils/Api';
import TypesRegion from 'types/TypesRegion';
import TypesCity from 'types/TypesCity';
import TypesAttraction from 'types/TypesAttraction';
import TypesCulture from 'types/TypesCulture';
import TypesDish from 'types/TypesDish';
import TypesElementCategory from 'types/TypesElementCategory';

function Nav() {
  const [isShow, toggleIsShow] = useSwitch(true);
  const [regions, setRegions] = useState<TypesRegion[]>();
  const [cities, setCities] = useState<TypesCity[]>();
  const [attractions, setAttractions] = useState<TypesAttraction[]>();
  const [cultures, setCultures] = useState<TypesCulture[]>();
  const [dishes, setDishes] = useState<TypesDish[]>();
  const [categories, setCategories] = useState<TypesElementCategory[]>();

  const getRegions = async () => {
    const res = await Api.get(`/regions`);
    setRegions(res.data);
  };
  const getCities = async () => {
    const res = await Api.get(`/cities`);
    setCities(res.data);
  };
  const getAttractions = async () => {
    const res = await Api.get(`/attractions`);
    setAttractions(res.data);
  };
  const getCultures = async () => {
    const res = await Api.get(`/cultures`);
    setCultures(res.data);
  };
  const getDishes = async () => {
    const res = await Api.get(`/dishes`);
    setDishes(res.data);
  };
  const getCategories = async () => {
    const res = await Api.get(`/categories`);
    setCategories(res.data);
  };

  useEffect(() => {
    getRegions();
    getCities();
    getAttractions();
    getCultures();
    getDishes();
    getCategories();
  }, []);

  const generateRegionsNavSection = () => {
    return (
      <>
        {regions &&
          regions.map((item: TypesRegion, index: number) => {
            return <StyledNavListElement key={index}>{item.name}</StyledNavListElement>;
          })}
      </>
    );
  };

  const generateCitiesNavSection = () => {
    return (
      <>
        {regions &&
          cities &&
          regions.map((item: TypesRegion, index: number) => {
            return (
              <StyledNavListElement key={index}>
                <StyledNavList>
                  {item.name}
                  {cities
                    .filter((obj) => obj.region === item._id)
                    .map((item2: TypesCity, index2: number) => {
                      return <StyledNavListElement key={index2}>{item2.name}</StyledNavListElement>;
                    })}
                </StyledNavList>
              </StyledNavListElement>
            );
          })}
      </>
    );
  };

  const generateAttractionsNavSection = () => {
    return (
      <>
        {categories &&
          attractions &&
          categories
            .filter((obj) => obj.section === 'attractions')
            .map((item: TypesElementCategory, index: number) => {
              return (
                <StyledNavListElement key={index}>
                  <StyledNavList>
                    {item.title}
                    {attractions
                      .filter((obj) => obj.category === item._id)
                      .map((item2: TypesAttraction, index2: number) => {
                        return (
                          <StyledNavListElement key={index2}>{item2.name}</StyledNavListElement>
                        );
                      })}
                  </StyledNavList>
                </StyledNavListElement>
              );
            })}
      </>
    );
  };

  const generateCulturesNavSection = () => {
    return (
      <>
        {categories &&
          cultures &&
          categories
            .filter((obj) => obj.section === 'cultures')
            .map((item: TypesElementCategory, index: number) => {
              return (
                <StyledNavListElement key={index}>
                  <StyledNavList>
                    {item.title}
                    {cultures
                      .filter((obj) => obj.category === item._id)
                      .map((item2: TypesCulture, index2: number) => {
                        return (
                          <StyledNavListElement key={index2}>{item2.name}</StyledNavListElement>
                        );
                      })}
                  </StyledNavList>
                </StyledNavListElement>
              );
            })}
      </>
    );
  };

  const generateKitchenNavSection = () => {
    return (
      <>
        {categories &&
          dishes &&
          categories
            .filter((obj) => obj.section === 'dishes')
            .map((item: TypesElementCategory, index: number) => {
              return (
                <StyledNavListElement key={index}>
                  <StyledNavList>
                    {item.title}
                    {dishes
                      .filter((obj) => obj.category === item._id)
                      .map((item2: TypesDish, index2: number) => {
                        return (
                          <StyledNavListElement key={index2}>{item2.name}</StyledNavListElement>
                        );
                      })}
                  </StyledNavList>
                </StyledNavListElement>
              );
            })}
      </>
    );
  };

  return (
    <>
      <StyledNav isShow={isShow}>
        <StyledNavList>
          <StyledNavSectionHeader>Regiony</StyledNavSectionHeader>
          {generateRegionsNavSection()}
        </StyledNavList>
        <StyledNavList>
          <StyledNavSectionHeader>Miasta</StyledNavSectionHeader>
          {generateCitiesNavSection()}
        </StyledNavList>
        <StyledNavList>
          <StyledNavSectionHeader>Atrakcje</StyledNavSectionHeader>
          {generateAttractionsNavSection()}
        </StyledNavList>
        <StyledNavList>
          <StyledNavSectionHeader>Kultura</StyledNavSectionHeader>
          {generateCulturesNavSection()}
        </StyledNavList>
        <StyledNavList>
          <StyledNavSectionHeader>Kuchnia</StyledNavSectionHeader>
          {generateKitchenNavSection()}
        </StyledNavList>
      </StyledNav>
      <StyledBurgerButton onClick={toggleIsShow} isShow={isShow} />
    </>
  );
}

export default Nav;
