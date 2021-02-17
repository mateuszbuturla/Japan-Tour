import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChangePath from 'utils/ChangePath';

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
    <ul>
      <a onClick={() => setIsShow(!isShow)}>{title}</a>
      {isShow &&
        data &&
        data.map(
          (item, index: number) =>
            item && (
              <li key={index} onClick={() => redirect(item.url)}>
                {item.name}
              </li>
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
    </ul>
  );
}

export default NavDropdown;
