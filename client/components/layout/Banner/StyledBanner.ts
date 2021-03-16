import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100vw;
  text-align: center;
  padding: 40px 0px;
  background: url("/assets/mobileBanner.png");
  background-size: 100% 100%;
`;

const StyledBannerContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const StyledText = styled.h1`
  font-size: ${(props) => props.theme.fontSize.mainHeader.small};
  color: #fff;
`;

const StyledText2 = styled.p`
  margin: 10px 0px;
  font-size: ${(props) => props.theme.fontSize.text.small};
  color: #fff;
`;

export { StyledBanner, StyledBannerContainer, StyledText, StyledText2 };
