import React, { useEffect, useState } from 'react';
import {
  StyledNav,
  StyledNavLinkList,
  StyledNavLink,
  StyledNavLinkLabel,
  StyledNavDropDown,
  StyledNavDropDownWrapper,
  StyledNavDropDownHeader,
  StyledNavDropDownItem,
  StyledNavSubDropDown,
  StyledNavBlancSpace,
  StyledNavSubDropDownHeader,
  StyledNavSubDropDownItem,
} from './StyledNav';
import ChangePath from 'utils/ChangePath';
import { useHistory } from 'react-router-dom';
import { CategoriesFetcher } from 'fetchers';
import TypesElementCategory from 'types/TypesElementCategory';
import Api from 'utils/Api';
import TypesCulture from 'types/TypesCulture';
import TypesDish from 'types/TypesDish';

function NewNav() {
  const history = useHistory();
  const [dropDownIsHover, setDropDownIsHover] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState(false);
  const [categoriesAttractions, setCategoriesAttractions] = useState();
  const [categoriesCulture, setCategoriesCulture] = useState();
  const [categoriesKitchen, setCategoriesKitchen] = useState();
  const [cultures, setCultures] = useState();
  const [kitchen, setKitchen] = useState();

  const Redirect = (url: string) => {
    ChangePath(history, url);
  };

  const getData = async () => {
    const resCategories = await CategoriesFetcher();
    setCategoriesAttractions(
      resCategories.filter((item: TypesElementCategory) => item.section === 'attractions'),
    );
    setCategoriesCulture(
      resCategories.filter((item: TypesElementCategory) => item.section === 'cultures'),
    );
    setCategoriesKitchen(
      resCategories.filter((item: TypesElementCategory) => item.section === 'dishes'),
    );
    const resCultures = await Api.get('/cultures');
    const resKitchen = await Api.get('/dishes');
    setCultures(resCultures.data);
    setKitchen(resKitchen.data);
    setFetchedData(true);
  };

  useEffect(() => {
    if (!fetchedData) {
      getData();
    }
  });

  return (
    <>
      <StyledNav dropDownIsHover={dropDownIsHover}>
        <StyledNavLinkList>
          <StyledNavLink>
            <StyledNavLinkLabel onClick={() => Redirect('/')}>Strona główna</StyledNavLinkLabel>
          </StyledNavLink>
          <StyledNavLink
            onMouseEnter={() => setDropDownIsHover(true)}
            onMouseLeave={() => setDropDownIsHover(false)}
          >
            <StyledNavLinkLabel onClick={() => Redirect('/podroze')}>Podróże</StyledNavLinkLabel>
            <StyledNavDropDown>
              <StyledNavDropDownWrapper>
                <StyledNavDropDownHeader>
                  <a>Podróże</a>
                </StyledNavDropDownHeader>
                <StyledNavDropDownItem>
                  <a>Regiony</a>
                  <StyledNavSubDropDown>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/hokkaido')}>
                      Hokkaidō
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/tohoku')}>
                      Tōhoku
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/kanto')}>
                      Kantō
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/chubu')}>
                      Chūbu
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/kansai')}>
                      Kansai
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/chugoku')}>
                      Chūgoku
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/shikoku')}>
                      Shikoku
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/kyushu')}>
                      Kyūshū
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/regiony/okinawa')}>
                      Okinawa
                    </StyledNavSubDropDownItem>
                  </StyledNavSubDropDown>
                </StyledNavDropDownItem>
                <StyledNavDropDownItem>
                  <a>Prefektury</a>
                  <StyledNavSubDropDown>
                    <StyledNavSubDropDownHeader>Hokkaidō</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/hokkaido')}
                    >
                      Hokkaidō
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Tōhoku</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/aomori')}
                    >
                      Aomori
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/iwate')}>
                      Iwate
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/miyagi')}
                    >
                      Miyagi
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/akita')}>
                      Akita
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/yamagata')}
                    >
                      Yamagata
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/fukushima')}
                    >
                      Fukushima
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Kantō</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/ibaarki')}
                    >
                      Ibaraki
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/tochigi')}
                    >
                      Tochigi
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/gunma')}>
                      Gunma
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/saitama')}
                    >
                      Saitama
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/chibi')}>
                      Chibi
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/tokyo')}>
                      Tokyo
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/kanagawa')}
                    >
                      Kanagawa
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Chūbu</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/niigata')}
                    >
                      Niigata
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/toyama')}
                    >
                      Toyama
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/ishikawa')}
                    >
                      Ishikawa
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/fukui')}>
                      Fukui
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/yamanashi')}
                    >
                      Yamanashi
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/nagano')}
                    >
                      Nagano
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/gifu')}>
                      Gifu
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/shizuoka')}
                    >
                      Shizuoka
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/aichi')}>
                      Aichi
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Kansai</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/mie')}>
                      Mie
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/shiga')}>
                      Shiga
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/osaka')}>
                      Ōsaka
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/hyogo')}>
                      Hyogo
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/nara')}>
                      Nara
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/wakayama')}
                    >
                      Wakayama
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Chūgoku</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/tottori')}
                    >
                      Tottori
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/shimane')}
                    >
                      Shimane
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/okayama')}
                    >
                      Okayama
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/hiroshima')}
                    >
                      Hiroshima
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/yamaguchi')}
                    >
                      Yamaguchi
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Shikoku</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/tokushima')}
                    >
                      Tokushima
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/kagawa')}
                    >
                      Kagawa
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/ehima')}>
                      Ehima
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/kochi')}>
                      Kochi
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Kyūshū</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/fukuoka')}
                    >
                      Fukuoka
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/saga')}>
                      Saga
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/nagasaki')}
                    >
                      Nagasaki
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/kumamoto')}
                    >
                      Kumamoto
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem onClick={() => Redirect('/podroze/prefektury/oita')}>
                      Ōita
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/miyazaki')}
                    >
                      Miyazaki
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/kagoshima')}
                    >
                      Kagoshima
                    </StyledNavSubDropDownItem>
                    <StyledNavSubDropDownHeader>Okinawa</StyledNavSubDropDownHeader>
                    <StyledNavSubDropDownItem
                      onClick={() => Redirect('/podroze/prefektury/okinawa')}
                    >
                      Okinawa
                    </StyledNavSubDropDownItem>
                  </StyledNavSubDropDown>
                </StyledNavDropDownItem>
                <StyledNavDropDownItem>
                  <a>Atrakcje</a>
                  <StyledNavSubDropDown>
                    {categoriesAttractions &&
                      categoriesAttractions.map((item: TypesElementCategory, index: number) => (
                        <StyledNavSubDropDownItem
                          onClick={() => Redirect(`/podroze/${item.key}`)}
                          key={index}
                        >
                          {item.name}
                        </StyledNavSubDropDownItem>
                      ))}
                  </StyledNavSubDropDown>
                  <StyledNavBlancSpace height="280px" />
                </StyledNavDropDownItem>
              </StyledNavDropDownWrapper>
            </StyledNavDropDown>
          </StyledNavLink>
          <StyledNavLink
            onMouseEnter={() => setDropDownIsHover(true)}
            onMouseLeave={() => setDropDownIsHover(false)}
          >
            <StyledNavLinkLabel>Kultura</StyledNavLinkLabel>
            <StyledNavDropDown>
              <StyledNavDropDownWrapper>
                <StyledNavDropDownHeader>
                  <a>Kultura</a>
                </StyledNavDropDownHeader>
                {categoriesCulture &&
                  categoriesCulture.map((category: TypesElementCategory) => (
                    <StyledNavDropDownItem>
                      <a>{category.name}</a>
                      <StyledNavSubDropDown>
                        {cultures &&
                          cultures
                            .filter((culture: TypesCulture) => culture.category === category._id)
                            .map((culture: TypesCulture, index: number) => (
                              <StyledNavSubDropDownItem
                                onClick={() => Redirect(`/kultura/${culture.key}`)}
                                key={index}
                              >
                                {culture.name}
                              </StyledNavSubDropDownItem>
                            ))}
                      </StyledNavSubDropDown>
                    </StyledNavDropDownItem>
                  ))}
              </StyledNavDropDownWrapper>
            </StyledNavDropDown>
          </StyledNavLink>
          <StyledNavLink
            onMouseEnter={() => setDropDownIsHover(true)}
            onMouseLeave={() => setDropDownIsHover(false)}
          >
            <StyledNavLinkLabel>Kuchnia</StyledNavLinkLabel>
            <StyledNavDropDown>
              <StyledNavDropDownWrapper>
                <StyledNavDropDownHeader>
                  <a>Kuchnia</a>
                </StyledNavDropDownHeader>
                {categoriesKitchen &&
                  categoriesKitchen.map((category: TypesElementCategory) => (
                    <StyledNavDropDownItem>
                      <a>{category.name}</a>
                      <StyledNavSubDropDown>
                        {kitchen &&
                          kitchen
                            .filter((kitchen: TypesDish) => kitchen.category === category._id)
                            .map((kitchen: TypesDish, index: number) => (
                              <StyledNavSubDropDownItem
                                onClick={() => Redirect(`/kuchnia/${kitchen.key}`)}
                                key={index}
                              >
                                {kitchen.name}
                              </StyledNavSubDropDownItem>
                            ))}
                      </StyledNavSubDropDown>
                    </StyledNavDropDownItem>
                  ))}
              </StyledNavDropDownWrapper>
            </StyledNavDropDown>
          </StyledNavLink>
          <StyledNavLink>
            <StyledNavLinkLabel>Kontakt</StyledNavLinkLabel>
          </StyledNavLink>
        </StyledNavLinkList>
      </StyledNav>
    </>
  );
}

export default NewNav;
