import logo from 'assets/logo.png';
import { NavDropdown } from 'components/common';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TypesAttraction from 'types/TypesAttraction';
import TypesCity from 'types/TypesCity';
import TypesCulture from 'types/TypesCulture';
import TypesDish from 'types/TypesDish';
import TypesElementCategory from 'types/TypesElementCategory';
import TypesRegion from 'types/TypesRegion';
import Api from 'utils/Api';
import ChangePath from 'utils/ChangePath';
import { StyledBurgerButton, StyledNav, StyledNavLogo } from './StyledNav';

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
    setRegions(res.data.items);
  };

  const getCities = async () => {
    const res = await Api.get(`/cities`);
    setCities(res.data.items);
  };

  const getAttractions = async () => {
    const res = await Api.get(`/attractions`);
    setAttractions(res.data.items);
  };

  const getCultures = async () => {
    const res = await Api.get(`/cultures`);
    setCultures(res.data.items);
  };

  const getDishes = async () => {
    const res = await Api.get(`/dishes`);
    setDishes(res.data.items);
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
        <NavDropdown
          title="Regiony"
          data={regions && regions.map((a) => ({ name: a.name, url: `/podroze/regiony/${a.key}` }))}
          closeNav={onClose}
        />
        <NavDropdown
          title="Miasta"
          closeNav={onClose}
          dropdownData={
            regions &&
            cities &&
            regions.map((a) => ({
              title: a.name,
              data: cities.map(
                (b) => b.region === a._id && { name: b.name, url: `/podroze/miasta/${b.key}` },
              ),
            }))
          }
        />
        <NavDropdown
          title="Atrakcje"
          closeNav={onClose}
          dropdownData={
            categories &&
            attractions &&
            categories
              .filter((obj) => obj.section === 'attractions')
              .map((a) => ({
                title: a.name,
                data: attractions.map(
                  (b) =>
                    b.category === a._id && {
                      name: b.name,
                      url: `/podroze/atrakcje/${b.key}`,
                    },
                ),
              }))
          }
        />
        <NavDropdown
          title="Kultura"
          closeNav={onClose}
          dropdownData={
            categories &&
            cultures &&
            categories
              .filter((obj) => obj.section === 'cultures')
              .map((a) => ({
                title: a.name,
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
        <NavDropdown
          title="Kuchnia"
          closeNav={onClose}
          dropdownData={
            categories &&
            dishes &&
            categories
              .filter((obj) => obj.section === 'dishes')
              .map((a) => ({
                title: a.name,
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
