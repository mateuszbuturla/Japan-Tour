import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    background-color: red;
`;

const Img = styled.img`
    width: 100%;
`;

function Location(props) {
    const { name, imgsrc, description } = props;
    return (
        <Container>
            <p>{name}</p>
            <Img src={process.env.PUBLIC_URL + `/upload/${imgsrc}`} />;
            <p>{description}</p>
        </Container>
    );
}

export default Location;
