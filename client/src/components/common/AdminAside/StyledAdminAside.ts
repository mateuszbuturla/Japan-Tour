import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledAdminAside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(225deg, #6d7dd1 0%, #3144ab 100%);
  border-radius: 0px 11px 11px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledAdminAsideLogo = styled.img`
  width: 90%;
`;

const StyledAdminAsideLink = styled(Link)`
  display: flex;
  width: 90%;
  text-decoration: none;
  color: #fff;
  font-size: 30px;
  margin-top: 20px;
  align-items: center;
`;

const StyledAdminAsideLinkIcon = styled.img`
  height: 40px;
  margin: 0px 20px;
`;

const StyledAdminAsideLogoutButton = styled.button`
  display: flex;
  width: 90%;
  text-decoration: none;
  color: #fff;
  font-size: 30px;
  margin-top: 20px;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export {
  StyledAdminAside,
  StyledAdminAsideLogo,
  StyledAdminAsideLink,
  StyledAdminAsideLinkIcon,
  StyledAdminAsideLogoutButton,
};
