import React from 'react';
import TypesOtherData from 'types/TypesOtherData';
import { StyledAside, StyledAsideInfoField } from './StyledAsideInfo';

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
