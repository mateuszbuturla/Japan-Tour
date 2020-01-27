import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 80%;
    position: relative;
    margin: 20px 0px;
    overflow: hidden;

    @media screen and (min-width: 600px)
    {
        width: 40%
    }

    @media (min-width: 1300px)
    {
        width: 26%
    }

    :hover img
    {
        transform: scale(1.2) rotateZ(5deg)
    }
`;

const Img = styled.img`
    width: 100%;
    transition: .7s
`;

const Label = styled.div`
    position: absolute;
    bottom: 15%;
    left: -1px;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 5px 10px
`;

const P = styled.p`
    font-size: 18px;
    color: #000;

    @media (min-width: 700px)
    {
        font-size: 22px
    }

    @media (min-width: 1024px)
    {
        font-size: 26px
    }

    @media (min-width: 1300px)
    {
        font-size: 30px
    }
`;

function MainPlace(props) {
    const { name, imgsrc } = props;
    return (
        <Container>
            <Link to={`/${name}`}>
                <Img src={process.env.PUBLIC_URL + `/upload/${imgsrc}`} />
                <Label>
                    <P>{name}</P>
                </Label>
            </Link>
        </Container>
    );
}

export default MainPlace;
