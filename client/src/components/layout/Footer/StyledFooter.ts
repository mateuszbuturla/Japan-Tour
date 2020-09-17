import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100vw;
  margin-top: 50px;
`;

const StyledFooterContainer = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
  padding-top: 20px;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    flex-direction: row;
  }
`;

const StyledFooterList = styled.ul`
  list-style: none;
  flex-basis: 30%;
  margin-bottom: 20px;
`;

interface StyledFooterListElementTypes {
  header?: boolean;
}

const StyledFooterListElement = styled.li<StyledFooterListElementTypes>`
  font-weight: ${(props) => (props.header ? 'bold' : 'normal')};
  font-size: ${(props) => (props.header ? '20px' : '16px')};
  margin-bottom: ${(props) => (props.header ? '20px' : '10px')};
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.header ? 'none' : props.theme.colors.mainColor)};
  }
`;

const StyledFooterCopyright = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 20px auto 10px;
  font-size: 13px;
  border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
  padding: 20px 0px;
  line-height: 20px;
`;

export {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterList,
  StyledFooterListElement,
  StyledFooterCopyright,
};
