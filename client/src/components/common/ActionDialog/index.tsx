import React, { useCallback, useEffect, useRef } from 'react';
import { Button } from 'components/common';
import {
  StyledActionDialogWrapper,
  StyledActionDialog,
  StyledActionDialogTopBar,
  StyledActionDialogContent,
  StyledActionDialogButtonContainer,
  StyledActionDialogButtonWrapper,
} from './StyledActionDialog';

interface Props {
  isShow: boolean;
  title: string;
  content: string;
  onCancel: () => void;
  onAccept: () => void;
}

function ActionDialog({ isShow, title, content, onCancel, onAccept }: Props) {
  const dialogRef = useRef(null);

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel();
    }
  }, []);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (isShow) {
        if (!(dialogRef.current! as any).contains(e.target)) {
          onCancel();
        }
      }
    },
    [dialogRef.current],
  );

  useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  return (
    <StyledActionDialogWrapper isShow={isShow}>
      <StyledActionDialog ref={dialogRef}>
        <StyledActionDialogTopBar>{title}</StyledActionDialogTopBar>
        <StyledActionDialogContent>{content}</StyledActionDialogContent>
        <StyledActionDialogButtonContainer>
          <StyledActionDialogButtonWrapper>
            <Button text="Anuluj" small onClick={onCancel} />
          </StyledActionDialogButtonWrapper>
          <StyledActionDialogButtonWrapper>
            <Button text="Zatwierdź" small onClick={onAccept} />
          </StyledActionDialogButtonWrapper>
        </StyledActionDialogButtonContainer>
      </StyledActionDialog>
    </StyledActionDialogWrapper>
  );
}

export default ActionDialog;
