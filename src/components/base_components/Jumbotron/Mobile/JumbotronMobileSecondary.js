import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import logoeduplus from '../../../asset/logo/eduplusheader.svg';
import Button from '../../Button/ButtonMobile/ButtonSecondary'

import './jumbotronmobilesecondary.css';

const JumbotronMobile = props => {
  
    return (
        <>
            <Container id="jumbotronMobileSecondaryContainer" fluid>
                <Row>
                    <Col>
                        <PrimaryDiv>{props.primaryText}</PrimaryDiv>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SecondaryDiv>{props.secondaryText}</SecondaryDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const PrimaryDiv = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-top: 139px;

    /* white */
    color: #FFFFFF;
`;

const SecondaryDiv = styled.h1`
    font-style: normal;
    font-weight: bold !important;
    font-size: 36px;
    line-height: 43px;
    margin-top: 8px;

    /* identical to box height */
    text-align: center;

    /* white */
    color: #FFFFFF;
`;

JumbotronMobile.propTypes = {
    onClickHeader : PropTypes.func,
    text          : PropTypes.string
}

export default JumbotronMobile;