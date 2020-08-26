import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

interface Props {
  openAddAttractionsGroupModal: Function;
}

const Aside = styled.aside`
  width: 100vw;
  background-color: #2b2b2b;

  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    max-width: 250px;
  }
`;

const Tile = styled.div`
  color: #a1a1a1;
  text-align: center;
  width: 100%;
  padding: 30px 0px;

  &:hover {
    background-color: #1c1c1c;
  }
`;

const LinkTile = styled(Link)`
  display: block;
  color: #a1a1a1;
  text-align: center;
  width: 100%;
  text-decoration: none;
  padding: 30px 0px;
  &:hover {
    background-color: #1c1c1c;
  }
`;

const ButtonTile = styled.button`
  cursor: pointer;
  color: #a1a1a1;
  text-align: center;
  width: 100%;
  padding: 30px 0px;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    background-color: #1c1c1c;
  }
`;

function AdminPanelAside({ openAddAttractionsGroupModal }: Props) {
  return (
    <Aside config={styledConfig}>
      <Tile>Witaj Admin</Tile>
      <ButtonTile onClick={() => openAddAttractionsGroupModal()}>
        Dodaj zbiór atrakcji
      </ButtonTile>
      <ButtonTile>Dodaj atrakcję</ButtonTile>
      <ButtonTile>Grupy atrakcji</ButtonTile>
      <ButtonTile>Wyloguj</ButtonTile>
    </Aside>
  );
}

export default AdminPanelAside;
