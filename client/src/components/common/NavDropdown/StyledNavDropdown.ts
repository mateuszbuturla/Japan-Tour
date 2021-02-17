import styled from 'styled-components';

const StyledNavDropdown = styled.ul`
  margin-left: 10px;
`;

const StyledNavDropdownTitle = styled.a`
  font-weight: bold;
  font-size: 23px;
  cursor: pointer;
`;

const StyledNavDropdownItem = styled.li`
  list-style: none;
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
`;

export { StyledNavDropdown, StyledNavDropdownTitle, StyledNavDropdownItem };
