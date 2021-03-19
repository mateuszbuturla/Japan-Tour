import { useState } from "react";
const useSwitch = (initialValue: boolean = false): Result => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => setValue((prev) => !prev);
  const off = () => setValue(false);
  return [value, toggle, off];
};

type Result = [boolean, () => void, () => void];

export default useSwitch;
