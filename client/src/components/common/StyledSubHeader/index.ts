import styled from 'styled-components';

interface StyledSubHeaderProps {
  center?: boolean;
}

const StyledSubHeader = styled.h3<StyledSubHeaderProps>`
  margin-top: 50px;
  font-size: 30px;
  ${(props) => props.center && 'text-align: center;'}
`;

export default StyledSubHeader;
