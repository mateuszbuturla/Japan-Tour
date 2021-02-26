import styled from 'styled-components';

interface StyledActionDialogWrapperProps {
  isShow: boolean;
}

const StyledActionDialogWrapper = styled.div<StyledActionDialogWrapperProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const StyledActionDialog = styled.div`
  border-radius: 11px;
  background-color: #fff;
  box-shadow: 0px 0px 6px 1px rgba(30, 30, 30, 0.6);
  width: 90vw;
  max-width: 500px;
`;

const StyledActionDialogTopBar = styled.div`
  font-size: 25px;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(30, 30, 30, 0.2);
`;

const StyledActionDialogContent = styled.div`
  font-size: 20px;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(30, 30, 30, 0.2);
`;

const StyledActionDialogButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledActionDialogButtonWrapper = styled.div`
  margin: 10px;
`;

export {
  StyledActionDialogWrapper,
  StyledActionDialog,
  StyledActionDialogTopBar,
  StyledActionDialogContent,
  StyledActionDialogButtonContainer,
  StyledActionDialogButtonWrapper,
};
