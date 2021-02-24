import React, { useState } from 'react';
import {
  StyledInputContainer,
  StyledInputLabel,
  StyledInput,
  StyledSelect,
  StyledOption,
  StyledInputError,
} from './StyledInput';

interface Props {
  type?: 'text' | 'select' | 'file' | 'checkbox' | 'password';
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
  const [imgPreviewPath, setImgPrevewPth] = useState();

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

      {type === 'password' && (
        <StyledInputContainer>
          <StyledInputLabel htmlFor={id} error={errorMessage ? true : false}>
            {label}
          </StyledInputLabel>
          <StyledInput
            type="password"
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

      {type === 'file' && (
        <>
          {imgPreviewPath && <img src={imgPreviewPath} />}
          <StyledInputContainer>
            <StyledInputLabel htmlFor={id} error={errorMessage ? true : false}>
              {label}
            </StyledInputLabel>
            <StyledInput
              type="file"
              accept="image/png, image/jpeg"
              multiple={false}
              id={id}
              name={name}
              defaultValue={defaultValue}
              placeholder={placeholder}
              error={errorMessage ? true : false}
              ref={inputRef}
              onChange={(e: any) => {
                setImgPrevewPth(e.target.value);
                console.log(e.target.value);
                const reader = new FileReader();

                reader.onload = (rEvent: any) => {
                  if (rEvent) {
                    setImgPrevewPth(rEvent.target.result);
                  }
                };
                reader.readAsDataURL(e.target.files[0]);
              }}
            />
            {errorMessage ? <StyledInputError>{errorMessage}</StyledInputError> : null}
          </StyledInputContainer>
        </>
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

      {type === 'checkbox' && (
        <StyledInputContainer>
          <StyledInputLabel htmlFor={id} error={errorMessage ? true : false}>
            {label}
          </StyledInputLabel>
          <StyledInput
            type="checkbox"
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
    </>
  );
}

export default Input;
