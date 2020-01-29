import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    color: red;
    font-size: 120px
`;

const P = styled.p`
    font-size: 20px
`;

const Container = styled.div`
    text-align: center;
    height: calc(100vh - 50px);
    padding-top: 10%;
    box-sizing: border-box;
`;

class NoMatch extends React.Component {

    render() {
        return (
            <Container>
                <H2>404</H2>
                <P>Strona nie została odnaleziona</P>
            </Container>
        );
    }
}

export default NoMatch;
