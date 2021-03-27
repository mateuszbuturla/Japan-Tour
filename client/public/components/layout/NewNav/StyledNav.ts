import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledNavProps {
  dropDownIsHover: boolean;
}

const StyledNav = styled.nav<StyledNavProps>`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  z-index: 200;
  background: ${(props) =>
    props.dropDownIsHover ? '#fff' : 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'};
  border-bottom: ${(props) => (props.dropDownIsHover ? '1px solid rgba(0,0,0,0.2)' : 'none')};
  box-sizing: border-box;
  color: ${(props) => (props.dropDownIsHover ? '#000' : '#fff')};

  @media (min-width: 1200px) {
    display: block;
  }
`;

const StyledNavLinkList = styled.ul`
  display: flex;
  justify-content: center;
`;

const StyledNavDropDown = styled.div`
  width: 100%;
  position: absolute;
  top: 60px;
  left: -100vw;
  background-color: #ededed;
  border-bottom: 5px solid ${(props) => props.theme.colors.mainColor};
`;

const StyledNavLinkLabel = styled.a`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    opacity: 0;
    width: 0;
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: 11px 11px 0px 0px;
    transition: ${(props) => props.theme.transition.fast};
  }
`;

const StyledNavLink = styled.li`
  list-style: none;
  display: block;
  padding: 20px 40px;
  cursor: pointer;

  &:hover ${StyledNavDropDown} {
    left: 0;
  }

  &:hover ${StyledNavLinkLabel}::before {
    width: 30px;
    opacity: 1;
  }
`;

const StyledNavDropDownWrapper = styled.div`
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0px 50px;
  position: relative;
`;

const StyledNavSubDropDown = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: -1000vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 44px 0px 50px 20px;
  box-sizing: border-box;
  pointer-events: all;

  a {
    margin-left: 20px;
    border: none !important;
    &::before {
      content: none !important;
    }
  }
`;

const StyledNavDropDownHeader = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
`;

const StyledNavDropDownItem = styled.div`
  pointer-events: none;

  &:hover ${StyledNavSubDropDown} {
    left: 150px;
  }

  &:hover {
    a::before {
      height: 30px;
      opacity: 1;
    }
  }

  a {
    pointer-events: all;
    display: inline-block;
    width: 150px;
    padding: 10px 0px;
    position: relative;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    transition: ${(props) => props.theme.transition.fast};

    &:hover {
      color: ${(props) => props.theme.colors.mainColor};
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 5px;
      height: 0px;
      transform: translateY(-50%);
      background-color: ${(props) => props.theme.colors.mainColor};
      border-radius: 11px 0px 0px 11px;
      opacity: 0;
      transition: ${(props) => props.theme.transition.fast};
    }
  }
`;

interface PropsStyledNavBlancSpace {
  height: string;
}

const StyledNavBlancSpace = styled.div<PropsStyledNavBlancSpace>`
  height: ${(props) => props.height};
`;

const StyledNavSubDropDownHeader = styled.h3`
  width: 150px;
  padding: 11px 0px;
  font-size: 14px;
`;

const StyledNavSubDropDownItem = styled.a`
  width: 150px;
  padding: 10px 0px;
  transition: ${(props) => props.theme.transition.fast};
  margin: 0 !important;

  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
  }
`;

interface StyledNavLinkUrlProps {
  dropDownIsHover: boolean;
}

const StyledNavLinkUrl = styled(Link)<StyledNavLinkUrlProps>`
  text-decoration: none;
  color: ${(props) => (props.dropDownIsHover ? '#000' : '#fff')};
`;

const StyledNavDropdownLinkUrl = styled(Link)<StyledNavLinkUrlProps>`
  text-decoration: none;
  padding: 0;
  margin: 0;
`;

export {
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
  StyledNavLinkUrl,
  StyledNavDropdownLinkUrl,
};
