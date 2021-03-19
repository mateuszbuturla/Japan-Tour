import { BurgerButton, NavDropdown } from "components/common";
import { useSwitch } from "hooks";
import Link from "next/link";
import {
  StyledNav,
  StyledTopBar,
  StyledNavContainer,
  StyledNavItem,
} from "./StyledNav";

export default function Nav() {
  const [navIsOpen, toggleNavIsOpen] = useSwitch(false);

  return (
    <>
      <BurgerButton state={navIsOpen} handleClick={toggleNavIsOpen} />
      <StyledNav active={navIsOpen}>
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
