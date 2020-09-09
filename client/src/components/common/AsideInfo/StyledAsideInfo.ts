import styled from 'styled-components';

const StyledAside = styled.aside`
  width: 20%;
  max-width: 250px;
  padding-top: 50px;
  margin-left: 30px;
`;

const StyledAsideInfoField = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export { StyledAside, StyledAsideInfoField };
