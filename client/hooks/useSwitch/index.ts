import { useState } from "react";
const useSwitch = (initialValue: boolean = false): Result => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
};

type Result = [boolean, () => void];

export default useSwitch;
