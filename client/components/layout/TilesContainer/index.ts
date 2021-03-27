import styled from "styled-components";

const TilesContainer = styled.div`
  min-width: 100%;
  display: flex;
  overflow-x: scroll;
  padding: 30px 0px;

  div {
    margin: 0px 20px 0px 0px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-x: hidden;
    padding: 30px 0px;

    & > div {
      margin: 20px 0px;
    }
  }

  @media (min-width: 1200px) {
    padding: 50px 0px;
  }
`;

export default TilesContainer;
