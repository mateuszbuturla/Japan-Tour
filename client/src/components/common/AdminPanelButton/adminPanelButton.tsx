import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  transition: 0.5s;
  background-color: #2b2b2b;
  color: #a1a1a1;
  cursor: pointer;

  &:hover {
    background-color: #1c1c1c;
  }
`;

function AdminPanelButton({ text }: Props) {
  return <Button>{text}</Button>;
}

export default AdminPanelButton;
