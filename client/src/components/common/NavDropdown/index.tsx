import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChangePath from 'utils/ChangePath';
import {
  StyledNavDropdown,
  StyledNavDropdownItem,
  StyledNavDropdownTitle,
} from './StyledNavDropdown';

interface Data {
  name: string;
  url: string;
}

interface Props {
  title: string;
  data?: Data[];
  dropdownData?: any[];
  closeNav: () => void;
}

function NavDropdown({ title, data, dropdownData, closeNav }: Props) {
  const history = useHistory();
  const [isShow, setIsShow] = useState(false);

  const redirect = (url: string) => {
    ChangePath(history, url);
    closeNav();
  };

  return (
    <StyledNavDropdown>
      <StyledNavDropdownTitle onClick={() => setIsShow(!isShow)}>{title}</StyledNavDropdownTitle>
      {isShow &&
        data &&
        data.map(
          (item, index: number) =>
            item && (
              <StyledNavDropdownItem key={index} onClick={() => redirect(item.url)}>
                {item.name}
              </StyledNavDropdownItem>
            ),
        )}
      {isShow &&
        dropdownData &&
        dropdownData.map((item, index: number) => (
          <NavDropdown
            key={index}
            title={item.title}
            data={item.data && item.data}
            dropdownData={item.dropdownData && dropdownData}
            closeNav={closeNav}
          />
        ))}
    </StyledNavDropdown>
  );
}

export default NavDropdown;
