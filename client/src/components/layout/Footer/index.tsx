import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterList,
  StyledFooterListElement,
  StyledFooterCopyright,
} from './StyledFooter';
import { useSelector } from 'react-redux';
import TypesFooterData from 'types/TypesFooterData';
import TypesFooterDataElement from 'types/TypesFooterDataElement';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';

function Footer() {
  const [footerData, setFooterData] = useState<TypesFooterData[]>([]);
  const history = useHistory();

  const getData = async () => {
    let res = await Api.get('/footer');
    setFooterData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLinkClick = (to: string) => {
    history.push(to);
  };

  return (
    <StyledFooter>
      {footerData && (
        <StyledFooterContainer>
          {footerData.map((category: TypesFooterData) => (
            <StyledFooterList>
              <StyledFooterListElement header>{category.header}</StyledFooterListElement>
              {category.data.map((item: TypesFooterDataElement) => (
                <StyledFooterListElement onClick={() => handleLinkClick(`/${item.url}`)}>
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
