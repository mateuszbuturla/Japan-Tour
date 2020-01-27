import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    text-align: left;
    overflow: hidden;
    margin: 20px 0px;
    transition: .7s;

    @media screen and (min-width: 600px)
    {
        width: 40%;
    }

    @media (min-width: 1300px)
    {
        width: 26%;
    }

    :hover {
        transform: scale(1.1);
    }
`;

const Img = styled.img`
    width: 100%;
    margin-top: 12px;
`;

const Description = styled.p`
    margin-top: 12px
`;

function Location(props) {
    const { name, imgsrc, description } = props;
    return (
        <Container>
            <h3>{name}</h3>
            <Img src={process.env.PUBLIC_URL + `/upload/${imgsrc}`} />
            <Description>{description}</Description>
        </Container>
    );
}

export default Location;
