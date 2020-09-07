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
<<<<<<< Updated upstream
      <StyledFooterContainer>
        <StyledFooterList>
          <StyledFooterListElement header>Regiony</StyledFooterListElement>
          <StyledFooterListElement>Hokkaido</StyledFooterListElement>
          <StyledFooterListElement>Tohoku</StyledFooterListElement>
          <StyledFooterListElement>Kanto</StyledFooterListElement>
          <StyledFooterListElement>Chubu</StyledFooterListElement>
          <StyledFooterListElement>Kansai</StyledFooterListElement>
          <StyledFooterListElement>Chugoku</StyledFooterListElement>
          <StyledFooterListElement>Shikoku</StyledFooterListElement>
          <StyledFooterListElement>Kyushu</StyledFooterListElement>
          <StyledFooterListElement>Okinawa</StyledFooterListElement>
        </StyledFooterList>
        <StyledFooterList>
          <StyledFooterListElement header>
            Topowe lokacje
          </StyledFooterListElement>
          <StyledFooterListElement>Tokyo</StyledFooterListElement>
          <StyledFooterListElement>Kyoto</StyledFooterListElement>
          <StyledFooterListElement>Osaka</StyledFooterListElement>
          <StyledFooterListElement>Nara</StyledFooterListElement>
          <StyledFooterListElement>Góra Fuji</StyledFooterListElement>
          <StyledFooterListElement>Hiroshima</StyledFooterListElement>
          <StyledFooterListElement>Kamakura</StyledFooterListElement>
        </StyledFooterList>
        <StyledFooterList>
          <StyledFooterListElement header>Atrakcje</StyledFooterListElement>
          <StyledFooterListElement>Świątynie</StyledFooterListElement>
          <StyledFooterListElement>Shrines</StyledFooterListElement>
          <StyledFooterListElement>Onses</StyledFooterListElement>
          <StyledFooterListElement>Ogrody</StyledFooterListElement>
        </StyledFooterList>
      </StyledFooterContainer>
=======
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
>>>>>>> Stashed changes
      <StyledFooterCopyright>
        Copyright © 2020-2020 Japan Tour Mateusz Buturla All Rights Reserved.
      </StyledFooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
