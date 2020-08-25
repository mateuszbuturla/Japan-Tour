import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-top: 1px solid #000;
`;

function Footer() {
  return <FooterContainer>Mateusz Buturla 2020</FooterContainer>;
}

export default Footer;
