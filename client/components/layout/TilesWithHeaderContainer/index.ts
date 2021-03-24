import styled from "styled-components";

const TilesWithHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 50px 0px 0px;
  }
`;

export default TilesWithHeaderContainer;
