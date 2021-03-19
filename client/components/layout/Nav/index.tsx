import { BurgerButton } from "components/common";
import { useSwitch } from "hooks";

export default function Nav() {
  const [navIsOpen, toggleNavIsOpen] = useSwitch(false);

  return (
    <>
      <BurgerButton state={navIsOpen} handleClick={toggleNavIsOpen} />
    </>
  );
}
