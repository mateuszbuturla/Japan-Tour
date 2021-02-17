import React, { useCallback, useState, useEffect, useRef } from 'react';
import {
  StyledNav,
  StyledNavLogo,
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
import ChangePath from 'utils/ChangePath';
import { useHistory } from 'react-router-dom';

import logo from 'assets/LOGO.png';

function Nav() {
  const history = useHistory();
  const navRef = useRef(null);
  const burgerButtonRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [regions, setRegions] = useState<TypesRegion[]>();
  const [cities, setCities] = useState<TypesCity[]>();
  const [attractions, setAttractions] = useState<TypesAttraction[]>();
  const [cultures, setCultures] = useState<TypesCulture[]>();
  const [dishes, setDishes] = useState<TypesDish[]>();
  const [categories, setCategories] = useState<TypesElementCategory[]>();

  const onClose = () => {
    setIsShow(false);
  };

  const redirect = (url: string) => {
    ChangePath(history, url);
    onClose();
  };
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

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, []);
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (
        !(navRef.current! as any).contains(e.target) &&
        !(burgerButtonRef.current! as any).contains(e.target)
      ) {
        onClose();
      }
    },
    [navRef.current],
  );

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  const generateRegionsNavSection = () => {
    return (
      <>
        {regions &&
          regions.map((item: TypesRegion, index: number) => {
            return (
              <StyledNavListElement
                key={index}
                onClick={() => {
                  redirect(`/podroze/${item.key}`);
                }}
              >
                {item.name}
              </StyledNavListElement>
            );
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
                      return (
                        <StyledNavListElement
                          key={index2}
                          onClick={() => {
                            redirect(`/podroze/${item.key}/${item2.key}`);
                          }}
                        >
                          {item2.name}
                        </StyledNavListElement>
                      );
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
                          <StyledNavListElement
                            key={index2}
                            onClick={() => {
                              redirect(`/podroze/${item2.region}/${item2.city}/${item2.key}`);
                            }}
                          >
                            {item2.name}
                          </StyledNavListElement>
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
                          <StyledNavListElement
                            key={index2}
                            onClick={() => {
                              redirect(`/kultura/${item.key}/${item2.key}`);
                            }}
                          >
                            {item2.name}
                          </StyledNavListElement>
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
                          <StyledNavListElement
                            key={index2}
                            onClick={() => {
                              redirect(`/kuchnia/${item.key}/${item2.key}`);
                            }}
                          >
                            {item2.name}
                          </StyledNavListElement>
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
      <StyledNav isShow={isShow} ref={navRef}>
        <StyledNavLogo
          src={logo}
          onClick={() => {
            onClose();
            ChangePath(history, '/');
          }}
        />
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
      <StyledBurgerButton
        onClick={() => {
          setIsShow(!isShow);
        }}
        isShow={isShow}
        ref={burgerButtonRef}
      />
    </>
  );
}

export default Nav;
