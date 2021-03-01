import styled from 'styled-components';

const StyledInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

interface StyledInputLabelProps {
  error: boolean;
}

const StyledInputLabel = styled.label<StyledInputLabelProps>`
  width: 100%;
  font-size: 15px;
  color: ${(props) => (props.error ? '#e60000' : '#000')};
`;

interface StyledInputProps {
  error: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => (props.error ? '#e60000' : '#000')};
  font-size: 20px;
`;

const StyledSelect = styled.select<StyledInputProps>`
  width: 100%;
  border: 0px;
  outline: 0px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border-bottom: 1px solid ${(props) => (props.error ? '#e60000' : '#000')};
  font-size: 20px;
`;

const StyledOption = styled.option`
  font-size: 18px;
`;

const StyledInputError = styled.p`
  font-size: 15px;
  color: #e60000;
  font-weight: bold;
`;

export {
  StyledInputContainer,
  StyledInputLabel,
  StyledInput,
  StyledSelect,
  StyledOption,
  StyledInputError,
};
