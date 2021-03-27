import styled from "styled-components";

const Paragraph = styled.p`
  line-height: 24px;
  font-size: ${(props) => props.theme.fontSize.text.small};
`;

export default Paragraph;
