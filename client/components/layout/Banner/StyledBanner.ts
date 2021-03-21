import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100vw;
  text-align: center;
  padding: 40px 0px;
  background: url("/assets/mobileBanner.png");
  background-size: 100% 100%;

  @media (min-width: 1024px) {
    text-align: left;
    padding: 10vh 0px;
    background: url("/assets/desktopBanner.png");
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;
  }

  @media (min-width: 1200px) {
    padding: 20vh 0px;
  }
`;

const StyledBannerContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 45%;
    margin: 0px 5vw;
  }
`;

const StyledText = styled.h1`
  font-size: ${(props) => props.theme.fontSize.mainHeader.small};
  color: #fff;
  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.mainHeader.big};
  }
`;

const StyledText2 = styled.p`
  margin: 10px 0px;
  font-size: ${(props) => props.theme.fontSize.text.small};
  color: #fff;

  @media (min-width: 1024px) {
    margin: 2vh 0px;
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.text.big};
  }
`;

interface BannerWithImgProps {
  img: string;
}

const StyledBannerWithImg = styled.div<BannerWithImgProps>`
  background: url(${(props) => props.img});
  background-position: center center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(props) => props.theme.mobileHeaderWithImageHeight};
`;

const StyledBannerWithImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export {
  StyledBanner,
  StyledBannerContainer,
  StyledText,
  StyledText2,
  StyledBannerWithImg,
  StyledBannerWithImgContainer,
};
