import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const MobileHomePageTitle = props => {
    return (
        <>
            <Container id="dropdownfilter">
                <Row>
                    <Col>
                        <TitleDiv>{props.name}</TitleDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleDiv = styled.h5`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: left;   
    letter-spacing: 0px;

    /* darkblue-eduplus */
    color: #1A6EB2;

`;

MobileHomePageTitle.propTypes = {
    name : PropTypes.string
}

export default MobileHomePageTitle;