import React from 'react';
import styled from 'styled-components';
import config from '../../config';
import Nav from '../Nav/Nav';

import bg from './img/bg.jpg';

const H2 = styled.h2`
    color: red;
    font-size: 120px
`;

const P = styled.p`
    font-size: 20px;
    color: #fff;
`;

const Container = styled.div`
    text-align: center;
    height: calc(100vh - 50px);
    padding-top: 10%;
    box-sizing: border-box;
`;

class NoMatch extends React.Component {

    render() {
        document.title = 'Japan Tour - Brak strony'
        return (
            <>
                <Nav config={config} />
                <Container style={{ background: `linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70)), url(${bg}) fixed` }}>
                    <H2>404</H2>
                    <P>Strona nie została odnaleziona</P>
                </Container>
            </>
        );
    }
}

export default NoMatch;
