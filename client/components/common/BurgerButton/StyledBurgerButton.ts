import styled from "styled-components";

interface Props {
  active: boolean;
}

const StyledBurgerButton = styled.button<Props>`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
  background: transparent;
  z-index: 3;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #000;
    transition: ${(props) => props.theme.transition.slow};
  }

  &::before {
    top: ${(props) => (props.active ? "50%" : "30%")};
    left: 50%;
    transform: ${(props) =>
      props.active
        ? "translate(-50%, -50%) rotate(-45deg)"
        : "translate(-50%, -50%)"};
  }

  &::after {
    bottom: ${(props) => (props.active ? "50%" : "30%")};
    left: 50%;
    transform: ${(props) =>
      props.active
        ? "translate(-50%, 50%) rotate(45deg)"
        : "translate(-50%, 50%)"};
  }
`;

export { StyledBurgerButton };
