import React, { useState, useEffect } from 'react';
import { StyledNav, StyledBurgerButton } from './StyledNav';
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
          regions.map((item: any, index: number) => {
            return <li key={index}>{item.name}</li>;
          })}
      </>
    );
  };

  const generateCitiesNavSection = () => {
    return (
      <>
        {regions &&
          cities &&
          regions.map((item: any, index: number) => {
            return (
              <li key={index}>
                {item.name}
                <ul>
                  {cities
                    .filter((obj) => obj.region === item._id)
                    .map((item2: any, index2: number) => {
                      return <li key={index2}>{item2.name}</li>;
                    })}
                </ul>
              </li>
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
            .map((item: any, index: number) => {
              return (
                <li key={index}>
                  {item.title}
                  <ul>
                    {attractions
                      .filter((obj) => obj.category === item._id)
                      .map((item2: any, index2: number) => {
                        return <li key={index2}>{item2.name}</li>;
                      })}
                  </ul>
                </li>
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
            .map((item: any, index: number) => {
              return (
                <li key={index}>
                  {item.title}
                  <ul>
                    {cultures
                      .filter((obj) => obj.category === item._id)
                      .map((item2: any, index2: number) => {
                        return <li key={index2}>{item2.name}</li>;
                      })}
                  </ul>
                </li>
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
            .map((item: any, index: number) => {
              return (
                <li key={index}>
                  {item.title}
                  <ul>
                    {dishes
                      .filter((obj) => obj.category === item._id)
                      .map((item2: any, index2: number) => {
                        return <li key={index2}>{item2.name}</li>;
                      })}
                  </ul>
                </li>
              );
            })}
      </>
    );
  };

  return (
    <>
      <StyledNav isShow={isShow}>
        <ul>
          <p>Regiony</p>
          {generateRegionsNavSection()}
        </ul>
        <ul>
          <p>Miasta</p>
          {generateCitiesNavSection()}
        </ul>
        <ul>
          <p>Atrakcje</p>
          {generateAttractionsNavSection()}
        </ul>
        <ul>
          <p>Kultura</p>
          {generateCulturesNavSection()}
        </ul>
        <ul>
          <p>Kuchnia</p>
          {generateKitchenNavSection()}
        </ul>
      </StyledNav>
      <StyledBurgerButton onClick={toggleIsShow} isShow={isShow} />
    </>
  );
}

export default Nav;
