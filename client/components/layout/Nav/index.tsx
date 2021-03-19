import { BurgerButton, NavDropdown } from "components/common";
import { useSwitch } from "hooks";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import {
  StyledNav,
  StyledTopBar,
  StyledNavContainer,
  StyledNavItem,
} from "./StyledNav";

export default function Nav() {
  const [navIsOpen, toggleNavIsOpen, closeNav] = useSwitch(false);
  const navRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeNav();
    }
  }, []);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (
        !(navRef.current! as any).contains(e.target) &&
        !(burgerButtonRef.current! as any).contains(e.target)
      ) {
        closeNav();
      }
    },
    [navRef.current]
  );

  useEffect(() => {
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  }, []);

  return (
    <>
      <BurgerButton
        state={navIsOpen}
        handleClick={toggleNavIsOpen}
        itemRef={burgerButtonRef}
      />
      <StyledNav active={navIsOpen} ref={navRef}>
        <StyledTopBar>Aktualna strona</StyledTopBar>
        <StyledNavContainer>
          <StyledNavItem>
            <Link href="/">Strona główna</Link>
          </StyledNavItem>
          <StyledNavItem>
            <NavDropdown
              title="Najczęściej odwiedzane"
              data={[
                { name: "Tokyo", href: "/miasto/tokyo1" },
                { name: "Tokyo", href: "/miasto/tokyo2" },
                { name: "Tokyo", href: "/miasto/tokyo3" },
              ]}
            />
          </StyledNavItem>
          <StyledNavItem>
            <NavDropdown
              title="Regiony"
              data={[
                { name: "Tokyo", href: "/region/tokyo1" },
                { name: "Tokyo", href: "/region/tokyo2" },
                { name: "Tokyo", href: "/region/tokyo3" },
              ]}
            />
          </StyledNavItem>
          <StyledNavItem>
            <NavDropdown
              title="Prefektury"
              data={[
                { name: "Tokyo", href: "/prefektura/tokyo1" },
                { name: "Tokyo", href: "/prefektura/tokyo2" },
                { name: "Tokyo", href: "/prefektura/tokyo3" },
              ]}
            />
          </StyledNavItem>
          <StyledNavItem>
            <Link href="/kontakt">Kontakt</Link>
          </StyledNavItem>
        </StyledNavContainer>
      </StyledNav>
    </>
  );
}
