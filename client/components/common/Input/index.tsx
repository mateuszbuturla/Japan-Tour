import { StyledInput } from "./StyledInput";

interface Props {
  name: string;
  placeholder: string;
  ref: any;
  defaultValue?: string;
}

export default function Input({ name, placeholder, ref, defaultValue }: Props) {
  return (
    <StyledInput
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}
