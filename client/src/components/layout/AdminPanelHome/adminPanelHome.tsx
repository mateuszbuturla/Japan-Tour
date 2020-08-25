import React from "react";
import styled from "styled-components";

import { PlaceTile } from "../../common/common";

const Container = styled.footer`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  max-width: 1500px;
`;

function AdminPanelHome() {
  return (
    <Container>
      <PlaceTile name="place1" to="/admin/edithome/place1" noHover />
      <PlaceTile name="place2" to="/admin/edithome/place2" noHover />
      <PlaceTile name="place3" to="/admin/edithome/place3" noHover />
      <PlaceTile name="place4" to="/admin/edithome/place4" noHover />
      <PlaceTile name="place5" to="/admin/edithome/place5" noHover />
      <PlaceTile name="place6" to="/admin/edithome/place6" noHover />
      <PlaceTile name="place7" to="/admin/edithome/place7" noHover />
    </Container>
  );
}

export default AdminPanelHome;
