import React from "react";
import styled from "styled-components";

import { AttractionTile } from "../../common/common";

const Container = styled.footer`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  max-width: 1500px;
`;

function AdminPanelAttractionsGroup() {
  return (
    <Container>
      {[
        "Atrakcja 1",
        "Atrakcja 2",
        "Atrakcja 3",
        "Atrakcja 4",
        "Atrakcja 5",
      ].map((attraction: string, index: number) => (
        <AttractionTile
          name={attraction}
          key={index}
          to={`/admin/editattractiongroup/${attraction}`}
          noHover
        />
      ))}
    </Container>
  );
}

export default AdminPanelAttractionsGroup;
