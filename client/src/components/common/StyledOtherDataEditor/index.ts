import styled from 'styled-components';

const StyledOtherDataEditorWrapper = styled.div`
  width: 90%;
  @media (min-width: 800px) {
    width: 20%;
  }
`;

const StyledOtherDataEditorItemsList = styled.ul``;

const StyledOtherDataEditorItem = styled.li`
  list-style: none;
  display: flex;
`;

const StyledOtherDataEditorItemRemoveButton = styled.button`
  width: 50px;
  border: none;
  background: none;
  cursor: pointer;
`;

const StyledOtherDataEditorItemRemoveButtonIcon = styled.img`
  width: 100%;
`;

export {
  StyledOtherDataEditorWrapper,
  StyledOtherDataEditorItemsList,
  StyledOtherDataEditorItem,
  StyledOtherDataEditorItemRemoveButton,
  StyledOtherDataEditorItemRemoveButtonIcon,
};
