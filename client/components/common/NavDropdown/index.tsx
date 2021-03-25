import Link from "next/link";
import {
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownContent,
  StyledBackButton,
  StyledDropdownTitle,
  StyledDropdownItem,
} from "./StyledNavDropdown";
import { useSwitch } from "hooks";
import TypesNavDropdownData from "types/TypesNavDropdownData";

interface Props {
  title: string;
  data: TypesNavDropdownData[];
}

export default function NavDropdown({ title, data }: Props) {
  const [dropdownIsShow, toggleDropdownIsShow, hideDropdown] = useSwitch(false);

  return (
    <StyledDropdown>
      <StyledDropdownButton onClick={toggleDropdownIsShow}>
        {title}
      </StyledDropdownButton>
      <StyledDropdownContainer active={dropdownIsShow}>
        <StyledBackButton onClick={hideDropdown}>Powrót</StyledBackButton>
        <StyledDropdownContent>
          <StyledDropdownTitle>{title}</StyledDropdownTitle>
          {data.map((dropdownItem: TypesNavDropdownData, index: number) => (
            <StyledDropdownItem key={index}>
              <Link href={dropdownItem.href}>{dropdownItem.name}</Link>
            </StyledDropdownItem>
          ))}
        </StyledDropdownContent>
      </StyledDropdownContainer>
    </StyledDropdown>
  );
}
