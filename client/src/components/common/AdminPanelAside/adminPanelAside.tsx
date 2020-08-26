import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

interface Props {
  openAddAttractionsGroupModal: Function;
  openAddAttractionModal: Function;
}

const Aside = styled.aside`
  width: 100vw;
  background-color: #2b2b2b;
  overflow-x: hidden;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    max-width: 250px;
  }
`;

const Tile = styled.div`
  color: #a1a1a1;
  text-align: left;
  width: 100%;
  padding: 30px 10px;

  &:hover {
    background-color: #1c1c1c;
  }
`;

const LinkTile = styled(Link)`
  display: block;
  color: #a1a1a1;
  text-align: left;
  width: 100%;
  text-decoration: none;
  padding: 30px 10px;
  &:hover {
    background-color: #1c1c1c;
  }
`;

const ButtonTile = styled.button`
  cursor: pointer;
  color: #a1a1a1;
  text-align: left;
  width: 100%;
  padding: 30px 10px;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    background-color: #1c1c1c;
  }
`;

const AttractionsGroupList = styled.ul`
  list-style: none;
  color: #a1a1a1;
  li {
    padding: 5px 25px;
    cursor: pointer;
    &:hover {
      background-color: #1c1c1c;
    }
  }
`;

function AdminPanelAside({
  openAddAttractionsGroupModal,
  openAddAttractionModal,
}: Props) {
  const [attractionsGroupList, setAttractionsGroupList] = useState(false);

  return (
    <Aside config={styledConfig}>
      <Tile>Witaj Admin</Tile>
      <ButtonTile onClick={() => openAddAttractionsGroupModal()}>
        Dodaj zbiór atrakcji
      </ButtonTile>
      <ButtonTile onClick={() => openAddAttractionModal()}>
        Dodaj atrakcję
      </ButtonTile>
      <ButtonTile
        onClick={() => setAttractionsGroupList(!attractionsGroupList)}
        id="attractionGroupMenu"
      >
        Grupy atrakcji
      </ButtonTile>
      {attractionsGroupList && (
        <AttractionsGroupList>
          <li> - group1</li>
          <li> - group2</li>
          <li> - group3</li>
          <li> - group4</li>
          <li> - group5</li>
        </AttractionsGroupList>
      )}
      <ButtonTile>Wyloguj</ButtonTile>
    </Aside>
  );
}

export default AdminPanelAside;
