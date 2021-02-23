import styled from 'styled-components';

import loginBackground from 'assets/mainBG.jpg';

const StyledLoginFormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

const StyledLoginForm = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 90vw;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

const StyledLoginFormTopContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 25%;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${loginBackground});
`;

const StyledLoginFormHeader = styled.h2`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const StyledLoginFormBottomContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
`;

const StyledLoginFormForm = styled.form`
  width: 90%;
  max-width: 400px;
`;

const StyledLoginFormError = styled.p`
  color: red;
  text-align: center;
  width: 100%;
`;

export {
  StyledLoginFormWrapper,
  StyledLoginForm,
  StyledLoginFormTopContainer,
  StyledLoginFormHeader,
  StyledLoginFormBottomContainer,
  StyledLoginFormForm,
  StyledLoginFormError,
};
