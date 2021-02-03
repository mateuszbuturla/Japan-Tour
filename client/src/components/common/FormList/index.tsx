import React from 'react';
import { StyledFormListTitle, StyledFormListContainer, StyledFormList } from './StyledFormList';

interface Props {
  children: any;
  title: string;
}

function FormList({ children, title }: Props) {
  return (
    <>
      <StyledFormListContainer>
        <StyledFormListTitle>{title}</StyledFormListTitle>
        <StyledFormList>{children}</StyledFormList>
      </StyledFormListContainer>
    </>
  );
}

export default FormList;
