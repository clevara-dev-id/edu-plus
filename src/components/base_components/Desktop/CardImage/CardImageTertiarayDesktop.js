import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './cardimagetertiarydesktop.css'

const CardImageTertiarayDesktop = props => {
    return (
        <>
            <Container id="cardImageTertiaryDesktopContainer">
                <Row>
                    {props.store.map((data)=>{
                        return(
                        <Col lg={4}>
                            <Card>
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip}</CardCount>
                                </Card.Body>
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
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0125em;
    text-transform: uppercase;

    color: #242424;
`;
const CardCount = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    // text-transform: uppercase;
    text-align: left;

    color: #242424;
`;

const BottomStyle = styled.div`
    min-height: 83%;
`;

CardImageTertiarayDesktop.propTypes = {
    store : PropTypes.object
}

export default CardImageTertiarayDesktop;