import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.bg};
  position: relative;
  z-index: 1;
`;

const StyledSectionsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-bottom: 1px solid #000;
`;

const StyledSectionHeader = styled.p`
  font-size: ${(props) => props.theme.fontSize.text.small};
  font-weight: bold;
`;

const StyledSectionLink = styled.a`
  font-size: ${(props) => props.theme.fontSize.text.small};
  padding: 3px 0px;
`;

const StyledBottomBar = styled.div`
  width: 90%;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontSize.text.small};
  padding: 10px 0px;
`;

export {
  StyledFooter,
  StyledSectionsContainer,
  StyledSection,
  StyledSectionHeader,
  StyledSectionLink,
  StyledBottomBar,
};
