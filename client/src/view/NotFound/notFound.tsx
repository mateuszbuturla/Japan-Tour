import React from "react";
import styled from "styled-components";

import { Header, PageContainer } from "../../components/common/common";

const H2 = styled.h2`
  text-align: center;
  color: red;
  font-size: 100px;
`;

const Description = styled.p`
  text-align: center;
`;

function NotFound() {
  return (
    <>
      <Header name="Japonia" small />
      <PageContainer>
        <H2>404</H2>
        <Description>Podana stronia nie została znaleziona</Description>
      </PageContainer>
    </>
  );
}

export default NotFound;
