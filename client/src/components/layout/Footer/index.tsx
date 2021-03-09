import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TypesFooterData from 'types/TypesFooterData';
import TypesFooterDataElement from 'types/TypesFooterDataElement';
import Api from 'utils/Api';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterCopyright,
  StyledFooterList,
  StyledFooterListElement,
} from './StyledFooter';

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
        Copyright © 2020-2021 Mateusz Buturla moja-japonia.com
      </StyledFooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
