import React, { useEffect } from 'react';
import { AdminAside } from 'components/common';
import { StyledAdminContainer } from './StyledAdmin';

interface Props {
  setTitle: Function;
}

function Admin({ setTitle }: Props) {
  useEffect(() => {
    setTitle('Admin');
  }, []);

  return (
    <StyledAdminContainer>
      <AdminAside />
    </StyledAdminContainer>
  );
}

export default Admin;
