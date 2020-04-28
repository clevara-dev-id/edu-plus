import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import './labelmobilecomponents.css'
const LabelMobileComponents = props => {
    return (
        <>
            <Container id="labelMobileComponentsContainer">
                <Row>
                    <Col>
                        <DivLine>{props.label}</DivLine>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivLine = styled.h6`
    background: #ffffff;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0125em;
    text-transform: capitalize;
    padding-top: 16px;
    padding-bottom: 15px;
    padding-left: 53px;
    padding-right: 54px;
    border: .05px solid rgba(0, 0, 0, 0.1);

    /* danger */
    color: #FF3860;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
`;

LabelMobileComponents.propTypes = {
    label : PropTypes.string,
}

export default LabelMobileComponents;