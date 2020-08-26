import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import styledConfig from "../../config/styledConfig";
import StyledInterface from "../../interfaces/styledInterface";

import { AdminPanelAside } from "../../components/common/common";

import {
  AdminPanelAttractionsGroup,
  AdminPanelAddAttractionsGroup,
  AdminPanelAddAttraction,
} from "../../components/layout/layout";

const AdminPanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    height: 100vh;
    overflow: hidden;
  }
`;

const ContentContainer = styled.div`
  width: 100vw;
  @media (min-width: ${(props: StyledInterface) =>
      props.config.breakPoints.md}) {
    max-width: calc(100vw - 250px);
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

function AdminPanel() {
  const [addAttractionsGroupModal, setAddAttractionsGroupModal] = useState(
    false
  );
  const [addAttraction, setAddAttraction] = useState(false);

  return (
    <>
      <AdminPanelContainer config={styledConfig}>
        <AdminPanelAside
          openAddAttractionsGroupModal={() => setAddAttractionsGroupModal(true)}
          openAddAttractionModal={() => setAddAttraction(true)}
        />
        <ContentContainer config={styledConfig}>
          <Switch>
            <Route
              exact
              path="/admin/attractiongroups/:id"
              component={AdminPanelAttractionsGroup}
            />
          </Switch>
        </ContentContainer>
      </AdminPanelContainer>
      <AdminPanelAddAttractionsGroup
        isOpen={addAttractionsGroupModal}
        closeModal={() => setAddAttractionsGroupModal(false)}
      />
      <AdminPanelAddAttraction
        isOpen={addAttraction}
        closeModal={() => setAddAttraction(false)}
      />
    </>
  );
}

export default AdminPanel;
