import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterList,
  StyledFooterListElement,
  StyledFooterCopyright,
} from './StyledFooter';
import axios from 'axios';

function Footer() {
  const [footerData, setFooterData] = useState();
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/getfooter`).then(function (result) {
      setFooterData(result.data);
    });
  }, []);

  const handleLinkClick = (to: string) => {
    history.push(to);
  };

  return (
    <StyledFooter>
      {footerData && (
        <StyledFooterContainer>
          {footerData.map((category: any) => (
            <StyledFooterList>
              <StyledFooterListElement header>
                {category.header}
              </StyledFooterListElement>
              {category.data.map((item: any) => (
                <StyledFooterListElement
                  onClick={() => handleLinkClick(`/${item.url}`)}
                >
                  {item.title}
                </StyledFooterListElement>
              ))}
            </StyledFooterList>
          ))}
        </StyledFooterContainer>
      )}
      <StyledFooterCopyright>
        Copyright © 2020-2020 Japan Tour Mateusz Buturla All Rights Reserved.
      </StyledFooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
