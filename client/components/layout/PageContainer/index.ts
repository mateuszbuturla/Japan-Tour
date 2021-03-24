import styled from "styled-components";

interface Props {
  marginTop?: boolean;
}

const PageContainer = styled.div<Props>`
  position: relative;
  width: 100vw;
  padding: 0px 5vw 30px;
  margin-top: ${(props) =>
    props.marginTop
      ? "calc(" + props.theme.mobileHeaderWithImageHeight + " - 20px)"
      : "0px"};
  border-radius: ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius} 0px 0px;
  background-color: ${(props) => props.theme.colors.bg};

  max-width: ${(props) => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    width: 90vw;
    padding: 0px 0px 30px;
    margin-top: 0px;
  }
`;

export default PageContainer;
