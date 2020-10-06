import React from 'react';
import {
  StyledInputContainer,
  StyledInputLabel,
  StyledInput,
  StyledSelect,
  StyledOption,
  StyledInputError,
} from './StyledInput';

interface Props {
  type?: 'text' | 'select';
  id: string;
  label: string;
  name: string;
  inputRef?: any;
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: string;
  options?: string[];
}

function Input({
  type = 'text',
  id,
  label,
  name,
  inputRef,
  defaultValue,
  placeholder,
  errorMessage,
  options,
}: Props) {
  return (
    <>
      {type === 'text' && (
        <StyledInputContainer>
          <StyledInputLabel htmlFor={id} error={errorMessage ? true : false}>
            {label}
          </StyledInputLabel>
          <StyledInput
            id={id}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            error={errorMessage ? true : false}
            ref={inputRef}
          />
          {errorMessage ? <StyledInputError>{errorMessage}</StyledInputError> : null}
        </StyledInputContainer>
      )}

      {type === 'select' && (
        <StyledInputContainer>
          <StyledInputLabel htmlFor={id} error={errorMessage ? true : false}>
            {label}
          </StyledInputLabel>
          <StyledSelect
            id={id}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            error={errorMessage ? true : false}
            ref={inputRef}
          >
            {options !== undefined && (
              <>
                {options.map((item) => (
                  <StyledOption value={item} key={item}>
                    {item}
                  </StyledOption>
                ))}
              </>
            )}
          </StyledSelect>
          {errorMessage ? <StyledInputError>{errorMessage}</StyledInputError> : null}
        </StyledInputContainer>
      )}
    </>
  );
}

export default Input;
