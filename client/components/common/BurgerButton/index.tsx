import { StyledBurgerButton } from "./StyledBurgerButton";

interface Props {
  state: boolean;
  handleClick?: () => void;
}

export default function BurgerButton({ state, handleClick }: Props) {
  return <StyledBurgerButton active={state} onClick={handleClick} />;
}
