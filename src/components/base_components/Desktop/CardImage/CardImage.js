import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './cardimagecss.css'

const CardImage = props => {
    return (
        <>
            <Container id="cardImageContainer">
                <Row>
                    {props.store.map((data)=>{
                        return(
                        <Col lg={3}>
                            <Card className="text-white">
                                <Card.Img src={data.image} alt="Card image" />
                                <Card.ImgOverlay>
                                    <BottomStyle></BottomStyle>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip}</CardCount>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

const CardTitle = styled.h3`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0125em;
    text-transform: uppercase;

    color: #FFFFFF;
`;
const CardCount = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    text-align: left;

    color: #FFFFFF;
`;

const BottomStyle = styled.div`
    min-height: 83%;
`;

CardImage.propTypes = {
    store : PropTypes.object
}

export default CardImage;