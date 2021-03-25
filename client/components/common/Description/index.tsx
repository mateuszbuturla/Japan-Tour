import { StyledDescription } from "./StyledDescription";
import ReactHtmlParser from "react-html-parser";

interface Props {
  content?: string;
}

export default function Description({ content }: Props) {
  return (
    <StyledDescription>{content && ReactHtmlParser(content)}</StyledDescription>
  );
}
