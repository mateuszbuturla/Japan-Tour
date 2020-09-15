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
import { useSelector } from 'react-redux';
import { PageTransitionEffect } from 'animations';
import TypesFooterData from 'types/TypesFooterData';
import TypesFooterDataElement from 'types/TypesFooterDataElement';

function Footer() {
  const [footerData, setFooterData] = useState<TypesFooterData[]>([]);
  const history = useHistory();
  const { pageTransitionEffectRef } = useSelector((state: any) => state.refs);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/getfooter`).then(function (result) {
      setFooterData(result.data);
    });
  }, []);

  const handleLinkClick = (to: string) => {
    PageTransitionEffect(pageTransitionEffectRef);
    setTimeout(() => {
      history.push(to);
    }, 1000);
  };

  return (
    <StyledFooter>
      {footerData && (
        <StyledFooterContainer>
          {footerData.map((category: TypesFooterData) => (
            <StyledFooterList>
              <StyledFooterListElement header>
                {category.header}
              </StyledFooterListElement>
              {category.data.map((item: TypesFooterDataElement) => (
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
