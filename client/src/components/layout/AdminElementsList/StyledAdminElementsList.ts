import styled from 'styled-components';

const StyledAdminElementsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const StyledAdminElementsListCellsTitles = styled.div`
  display: flex;
  padding: 0px 20px;
`;

interface StyledAdminElementsListCellProps {
  width: string;
}

const StyledAdminElementsListCell = styled.div<StyledAdminElementsListCellProps>`
  width: ${(props) => props.width};
  font-size: 20px;
  color: #707070;
`;

const StyledAdminElementsListElement = styled.div`
  border-radius: 11px;
  background-color: #f9f9f9;
  padding: 0px 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

interface StyledAdminElementsListElementCellProps {
  width: string;
}

const StyledAdminElementsListElementCell = styled.div<StyledAdminElementsListElementCellProps>`
  width: ${(props) => props.width};
  font-size: 25px;
`;

const StyledAdminElementsListActionButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledAdminElementsListActionButtonIcon = styled.img`
  width: 30px;
`;

export {
  StyledAdminElementsListContainer,
  StyledAdminElementsListCellsTitles,
  StyledAdminElementsListCell,
  StyledAdminElementsListElement,
  StyledAdminElementsListElementCell,
  StyledAdminElementsListActionButton,
  StyledAdminElementsListActionButtonIcon,
};
