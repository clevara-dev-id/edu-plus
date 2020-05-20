import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import './titlepagedesktop.css'

const TitlePageDesktop = props => {
    return (
        <>
            <Container id="titlePageDesktopContainer">
                <Row>
                    <Col>
                        <TitleDiv>{props.name}</TitleDiv>
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
    lineHeight: "28px",
    textAlign: "left",  
    letterSpacing: "0.0125em",

    color: "#242424",
    })
);

TitlePageDesktop.propTypes = {
    name : PropTypes.string
}

export default TitlePageDesktop;