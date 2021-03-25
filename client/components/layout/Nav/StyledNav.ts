import styled from "styled-components";

interface NavProps {
  active: boolean;
}

const StyledNav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.active ? "0px" : "-100vw")};
  height: 100vh;
  width: 300px;
  background-color: ${(props) => props.theme.colors.bg};
  transition: ${(props) => props.theme.transition.slow};
  z-index: 2;
`;

const StyledTopBar = styled.div`
  width: 230px;
  padding: 20px 0px;
  margin: 0px 0px 0px 70px;
`;

const StyledNavContainer = styled.ul`
  padding: 50px 20px 0px;
  height: calc(100vh - 50px);
  overflow-y: scroll;
`;

const StyledNavItem = styled.li`
  list-style: none;
  padding: 10px 0px;
  font-size: ${(props) => props.theme.fontSize.nav.text.small};
  cursor: pointer;
  a {
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export { StyledNav, StyledTopBar, StyledNavContainer, StyledNavItem };
