import React from 'react';
import { StyledNav, StyledBurgerButton } from './StyledNav';
import { useSwitch } from 'hooks';

function Nav() {
  const [isShow, toggleIsShow] = useSwitch(false);

  return (
    <>
      <StyledNav isShow={isShow}></StyledNav>
      <StyledBurgerButton onClick={toggleIsShow} isShow={isShow} />
    </>
  );
}

export default Nav;
