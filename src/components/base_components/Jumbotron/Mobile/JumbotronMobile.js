import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import logoeduplus from '../../../asset/logo/eduplusheader.svg';
import Button from '../../Button/ButtonMobile/ButtonSecondary'

import './jumbotronmobile.css';

const JumbotronMobile = props => {
  
    return (
        <>
            <Container id="jumbotronMobileContainer" fluid>
                <Row>
                    <Col>
                        <DivLogo><img src={logoeduplus} width="138px" height="52px" /></DivLogo>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivText>{props.text}</DivText>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivButton id="jumbotronMobileButton">
                            <Button
                                color="#1A6EB2"
                                name="CARI SEKOLAH"
                                width="227px"
                                fontSize="15px"
                                onClick={props.onClickHeader}
                            />
                        </DivButton>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivLogo = styled.div`
    margin-top: 60px;
    text-align: center;
`;

const DivText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-top: 24px;
    text-align: center;

    /* or 137% */
    display: flex;
    align-items: center;
    text-align: center;

    /* Gray 6 */
    color: #F2F2F2;
`;

const DivButton = styled.div`
    margin-top: 60px;
    // width: 227px;
`;

JumbotronMobile.propTypes = {
    onClickHeader : PropTypes.func,
    text          : PropTypes.string
}

export default JumbotronMobile;