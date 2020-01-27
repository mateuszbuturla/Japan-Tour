import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 300px;
    background-color: red;
`;

const Img = styled.img`
    width: 100%;
`;

function MainPlace(props) {
    const { name, imgsrc } = props;
    return (
        <Link to={`/${name}`}>
            <Container>
                <p>{name}</p>
                <Img src={process.env.PUBLIC_URL + `/upload/${imgsrc}`} />
            </Container>
        </Link>
    );
}

export default MainPlace;
