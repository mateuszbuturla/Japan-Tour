import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledLocationPath, StyledLocationPathElement } from './StyledLocationPath';
import ChangePath from 'utils/ChangePath';

interface ElementTypes {
  text: string;
  url?: string;
}

interface Props {
  elements: ElementTypes[];
}

function LocationPath({ elements }: Props) {
  const history = useHistory();

  const redirect = (url: string) => {
    ChangePath(history, url);
  };

  return (
    <StyledLocationPath>
      {elements.map((item, index) => (
        <>
          {index !== 0 && ' ➤ '}
          <StyledLocationPathElement
            onClick={() => {
              if (item.url) {
                redirect(item.url);
              }
            }}
          >
            {item.text}
          </StyledLocationPathElement>
        </>
      ))}
    </StyledLocationPath>
  );
}

export default LocationPath;
