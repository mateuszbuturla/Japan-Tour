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
  z-index: 50;

  @media (min-width: 1024px) {
    width: 350px;
    left: ${(props) => (props.isShow ? '0' : '-350px')};
  }
`;

const StyledNavLogo = styled.img`
  width: 70%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
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
  z-index: 100;
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

export { StyledNav, StyledNavLogo, StyledBurgerButton };
