import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import './titlepagedesktoppromo.css'

const TitlePageDesktopPromo = props => {
    return (
        <>
            <Container id="titlePageDesktopPromoContainer">
                <Row>
                    <Col className="colTitlename">
                        <TitleDiv>{props.name}</TitleDiv>
                    </Col>
                    <Col className="colLinkPromo">
                        <LinkToNextpage href={props.link}>{props.linkName}</LinkToNextpage>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleDiv = styled.h5(
    props => ({
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "22px",
    textAlign: "left",  
    letterSpacing: "0.0125em",

    color: "#242424",
    })
);

const LinkToNextpage = styled.a`
font-family: Rubik;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
text-align: right;
color: #1A6EB2;
text-decoration:none;
&:hover{
    text-decoration:none;
}
`;

TitlePageDesktopPromo.propTypes = {
    name : PropTypes.string
}

export default TitlePageDesktopPromo;