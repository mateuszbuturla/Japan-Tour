import React from "react";
import styled from "styled-components";

interface Props {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  ref?: any;
}

const Textarea = styled.textarea``;

const InputContainer = styled.input``;

function Input({ id, name, type, placeholder, defaultValue, ref }: Props) {
  return (
    <>
      {type === "textarea" ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          ref={ref}
        ></Textarea>
      ) : (
        <InputContainer
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          ref={ref}
        />
      )}
    </>
  );
}

export default Input;
