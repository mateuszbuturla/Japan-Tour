import styled from 'styled-components';

const StyledLastestChangesContainer = styled.table`
  border-collapse: collapse;
`;

const StyledLastestChangesElement = styled.tr`
  margin-top: 20px;
`;

const StyledLastestChangesElementCell = styled.td`
  font-size: 25px;
  background-color: #f9f9f9;
  padding: 5px 0px;
  &:nth-child(1) {
    border-radius: 11px 0px 0px 11px;
  }
  &:nth-child(5) {
    border-radius: 0px 11px 11px 0px;
  }
`;

const StyledLastestChangesCellTitlesContainer = styled.tr``;

interface StyledLastestChangesCellTitleProps {
  width: string;
}

const StyledLastestChangesCellTitle = styled.td`
  width: ${(props) => props.width};
  font-size: 20px;
  color: #707070;
`;

const StyledLastestChangesElementIcon = styled.img`
  width: 30px;
  margin-left: 20px;
`;

export {
  StyledLastestChangesContainer,
  StyledLastestChangesElement,
  StyledLastestChangesElementCell,
  StyledLastestChangesCellTitlesContainer,
  StyledLastestChangesCellTitle,
  StyledLastestChangesElementIcon,
};
