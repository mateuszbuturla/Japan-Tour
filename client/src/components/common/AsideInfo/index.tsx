import React from 'react';
import { StyledAside, StyledAsideInfoField } from './StyledAsideInfo';
import TypesOtherData from '../../../types/TypesOtherData';

interface Props {
  data: TypesOtherData[];
}

function AsideInfo({ data }: Props) {
  return (
    <StyledAside>
      {data.map((item) => (
        <StyledAsideInfoField>
          <span>{item.title}</span> <span>{item.value}</span>
        </StyledAsideInfoField>
      ))}
    </StyledAside>
  );
}

export default AsideInfo;
