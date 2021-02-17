import React, { useCallback, useState, useEffect, useRef } from 'react';
import { StyledNav, StyledNavLogo, StyledBurgerButton } from './StyledNav';
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

import Test from './test';

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
        <Test
          title="Regiony"
          data={regions && regions.map((a) => ({ name: a.name, url: `/podroze/${a.key}` }))}
          closeNav={onClose}
        />
        <Test
          title="Miasta"
          closeNav={onClose}
          dropdownData={
            regions &&
            cities &&
            regions.map((a) => ({
              title: a.name,
              data: cities.map(
                (b) => b.region === a._id && { name: b.name, url: `/podroze/${a.key}/${b.key}` },
              ),
            }))
          }
        />
        <Test
          title="Atrakcje"
          closeNav={onClose}
          dropdownData={
            categories &&
            attractions &&
            categories
              .filter((obj) => obj.section === 'attractions')
              .map((a) => ({
                title: a.title,
                data: attractions.map(
                  (b) =>
                    b.category === a._id && {
                      name: b.name,
                      url: `/podroze/${b.region}/${b.city}/${b.key}`,
                    },
                ),
              }))
          }
        />
        <Test
          title="Kultura"
          closeNav={onClose}
          dropdownData={
            categories &&
            cultures &&
            categories
              .filter((obj) => obj.section === 'cultures')
              .map((a) => ({
                title: a.title,
                data: cultures.map(
                  (b) =>
                    b.category === a._id && {
                      name: b.name,
                      url: `/kultura/${b.category}/${b.key}`,
                    },
                ),
              }))
          }
        />
        <Test
          title="Kuchnia"
          closeNav={onClose}
          dropdownData={
            categories &&
            dishes &&
            categories
              .filter((obj) => obj.section === 'dishes')
              .map((a) => ({
                title: a.title,
                data: dishes.map(
                  (b) =>
                    b.category === a._id && {
                      name: b.name,
                      url: `/kuchnia/${b.category}/${b.key}`,
                    },
                ),
              }))
          }
        />
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
