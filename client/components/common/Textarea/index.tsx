import { StyledTextarea } from "./StyledTextarea";

interface Props {
  name: string;
  placeholder: string;
  ref: any;
  defaultValue?: string;
}

export default function Textarea({
  name,
  placeholder,
  ref,
  defaultValue,
}: Props) {
  return (
    <StyledTextarea
      name={name}
      id={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
}
