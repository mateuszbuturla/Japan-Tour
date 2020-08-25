import React from "react";
import styled from "styled-components";
import styledConfig from "../../../config/styledConfig";
import StyledInterface from "../../../interfaces/styledInterface";

const Effect = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: ${(props: StyledInterface) => props.config.themeColor};
  z-index: 1000;
`;

function PageTransitionEffect() {
  return <Effect id="pageTransitionEffect" config={styledConfig} />;
}

export default PageTransitionEffect;
