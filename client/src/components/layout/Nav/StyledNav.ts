import styled from 'styled-components';

interface StyledNavProps {
  isShow: boolean;
}

const StyledNav = styled.nav<StyledNavProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isShow ? '0' : '-100vw')};
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightGrey};
  overflow-y: scroll;
  transition: ${(props) => props.theme.transition.slow};
  padding-top: 70px;
  padding-left: 20px;
  box-sizing: border-box;
`;

const StyledNavSectionHeader = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const StyledNavListElement = styled.li`
  margin-left: 10px;
  list-style: none;
  display: none;
`;

const StyledNavList = styled.ul`
  &:hover {
    & > li {
      display: block;
    }
  }
`;

interface StyledBurgerButtonProps {
  isShow: boolean;
}

const StyledBurgerButton = styled.button<StyledBurgerButtonProps>`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    width: 100%;
    height: 3px;
    background-color: #000;
    transition: ${(props) => props.theme.transition.fast};
  }
  &::before {
    top: ${(props) => (props.isShow ? '50%' : '30%')};
    transform: ${(props) =>
      props.isShow ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%)'};
  }
  &::after {
    bottom: ${(props) => (props.isShow ? '50%' : '30%')};
    transform: ${(props) =>
      props.isShow ? 'translate(-50%, 50%) rotate(45deg)' : 'translate(-50%, 50%)'};
  }
`;

export {
  StyledNav,
  StyledNavSectionHeader,
  StyledNavList,
  StyledNavListElement,
  StyledBurgerButton,
};