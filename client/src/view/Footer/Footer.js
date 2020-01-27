import React from 'react';
import styled from 'styled-components';

const FooterComponent = styled.footer`
    width: 100vw;
    text-align: center;
    padding: 15px;
    border-top: 1px solid #ccc;
`;

function Footer() {
    return (
        <FooterComponent>
            Mateusz Buturla 2020
        </FooterComponent>
    );
}

export default Footer;
