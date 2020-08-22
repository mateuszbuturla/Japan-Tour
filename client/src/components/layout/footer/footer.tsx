import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100vw;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-top: 1px solid #000;
`;

function footer() {
  return <Footer>Mateusz Buturla 2020</Footer>;
}

export default footer;
