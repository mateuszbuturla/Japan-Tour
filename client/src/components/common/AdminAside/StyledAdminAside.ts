import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledAsideProps {
  show: boolean;
}

const StyledAside = styled.aside<StyledAsideProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.show ? '0px' : '-100vw')};
  width: 100vw;
  height: 100vh;
  background-color: #363636;
  color: #a3a3a3;
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.3s;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    left: 0;
    width: 300px;
  }
`;

const StyledAsideLogo = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto;
`;

const StyledAsideLink = styled(Link)`
  width: 100%;
  display: block;
  padding: 10px 20px;
  text-align: left;
  background-color: transparent;
  border: none;
  color: #a3a3a3;
  font-size: 18px;
  border-bottom: 1px solid #3a3a3a;
  text-decoration: none;
  cursor: pointer;
`;

interface StyledAsideListButtonProps {
  active: boolean;
}

const StyledAsideListButton = styled.button<StyledAsideListButtonProps>`
  position: relative;
  width: 100%;
  padding: 10px 20px;
  text-align: left;
  background-color: transparent;
  border: none;
  color: #a3a3a3;
  font-size: 18px;
  border-bottom: 1px solid #3a3a3a;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%) ${(props) => (props.active ? 'rotate(180deg)' : '')};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: #a3a3a3 transparent transparent transparent;
    transition: 0.1s;
  }
`;

interface StyledAsideListContainerProps {
  show: boolean;
}

const StyledAsideListContainer = styled.ul<StyledAsideListContainerProps>`
  width: 100%;
  list-style: none;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const StyledAsideListElement = styled.li`
  width: calc(100%);
  border-bottom: 1px solid #3a3a3a;
  padding: 10px 0px 10px 40px;
`;

interface StyledAsideBurgerButtonProps {
  active: boolean;
}

const StyledAsideBurgerButton = styled.button<StyledAsideBurgerButtonProps>`
  position: fixed;
  outline: none;
  border: none;
  background-color: transparent;
  width: 50px;
  height: 50px;
  top: 10px;
  left: 10px;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #000;
    top: ${(props) => (props.active ? '50%' : '30%')};
    left: 50%;
    transform: translate(-50%, -50%) ${(props) => (props.active ? 'rotate(45deg)' : '')};
    transition: 0.3s;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #000;
    top: ${(props) => (props.active ? '50%' : '70%')};
    left: 50%;
    transform: translate(-50%, -50%) ${(props) => (props.active ? 'rotate(-45deg)' : '')};
    transition: 0.3s;
  }
`;

export {
  StyledAside,
  StyledAsideLogo,
  StyledAsideLink,
  StyledAsideListButton,
  StyledAsideListContainer,
  StyledAsideListElement,
  StyledAsideBurgerButton,
};
