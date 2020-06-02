import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './titleDropDownListDesktop.css'

const TitleDropDownListDesktop = props => {
    return (
        <>
            <Container id="titleDropDownListDesktopContainer">
                <Row>
                    <Col>
                        <TitleDiv>{props.name}</TitleDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleDiv = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.001em;

    color: #000000;
`;

TitleDropDownListDesktop.propTypes = {
    name : PropTypes.string
}

export default TitleDropDownListDesktop;