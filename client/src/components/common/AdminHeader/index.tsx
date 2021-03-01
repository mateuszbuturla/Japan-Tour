import React from 'react';
import { StyledAdminHeader, StyledAdminMainHeader } from './StyledAdminHeader';

interface Props {
  text: string;
  main?: boolean;
}

function AdminHeader({ text, main }: Props) {
  return (
    <>
      {main ? (
        <StyledAdminMainHeader>{text}</StyledAdminMainHeader>
      ) : (
        <StyledAdminHeader>{text}</StyledAdminHeader>
      )}
    </>
  );
}

export default AdminHeader;
