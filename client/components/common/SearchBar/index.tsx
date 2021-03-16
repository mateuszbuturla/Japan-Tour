import { StyledSearchBar, StyledButton, StyledInput } from "./StyledSearchBar";

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <StyledButton>Szukaj</StyledButton>
      <StyledInput placeholder="Czego szukasz?" />
    </StyledSearchBar>
  );
}
