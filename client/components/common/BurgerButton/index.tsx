import { StyledBurgerButton } from "./StyledBurgerButton";

interface Props {
  state: boolean;
  handleClick?: () => void;
  itemRef: any;
}

export default function BurgerButton({ state, handleClick, itemRef }: Props) {
  return (
    <StyledBurgerButton active={state} onClick={handleClick} ref={itemRef} />
  );
}
