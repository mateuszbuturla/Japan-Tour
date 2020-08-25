import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import styledConfig from "../../config/styledConfig";
import StyledInterface from "../../interfaces/styledInterface";

import { AdminPanelAside } from "../../components/common/common";

import { AdminPanelHome } from "../../components/layout/layout";

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
  return (
    <AdminPanelContainer config={styledConfig}>
      <AdminPanelAside />
      <ContentContainer config={styledConfig}>
        <Switch>
          <Route exact path="/admin/home" component={AdminPanelHome} />
        </Switch>
      </ContentContainer>
    </AdminPanelContainer>
  );
}

export default AdminPanel;
