import styled from "styled-components";

const StyledDropdown = styled.div``;

const StyledDropdownButton = styled.button`
  background-color: ${(props) => props.theme.colors.bg};
  font-size: ${(props) => props.theme.fontSize.nav.text.small};
  cursor: pointer;
  width: 100%;
  text-align: left;
  position: relative;
  padding: 0px 20px 0px 0px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%) rotate(45deg);
    border-top: 2px solid #000;
    border-right: 2px solid #000;
  }
`;

interface DropdownContainerProps {
  active: boolean;
}

const StyledDropdownContainer = styled.div<DropdownContainerProps>`
  position: absolute;
  top: 0px;
  height: 100vh;
  width: 300px;
  left: ${(props) => (props.active ? "0px" : "-100vw")};
  background-color: ${(props) => props.theme.colors.bg};
  transition: ${(props) => props.theme.transition.slow};
`;

const StyledBackButton = styled.button`
  background-color: ${(props) => props.theme.colors.bg};
  font-size: ${(props) => props.theme.fontSize.nav.text.small};
  color: ${(props) => props.theme.colors.textColor};
  width: 230px;
  padding: 18px 0px;
  margin: 0px 0px 0px 70px;
  text-align: left;
  cursor: pointer;
`;

const StyledDropdownContent = styled.ul`
  padding: 0px 20px 0px;
  overflow-y: scroll;
  height: calc(100vh - 50px);
  position: relative;
  background-color: ${(props) => props.theme.colors.bg};
  z-index: 1;
`;

const StyledDropdownTitle = styled.li`
  list-style: none;
  font-size: ${(props) => props.theme.fontSize.nav.header.small};
  color: ${(props) => props.theme.colors.grey};
  margin-top: 50px;
`;

const StyledDropdownItem = styled.li`
  list-style: none;
  font-size: ${(props) => props.theme.fontSize.nav.text.small};
  padding: 10px 0px;
  cursor: pointer;
  a {
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export {
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownContent,
  StyledBackButton,
  StyledDropdownTitle,
  StyledDropdownItem,
};
