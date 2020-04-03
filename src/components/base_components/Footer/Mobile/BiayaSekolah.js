import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './biayasekolah.css'

const InformasiSekolah = props => {
    return(
        <>
            <Container id="biayaSekolahContainer">
                <Row>
                    <Col><TitleInformsi>{props.title}</TitleInformsi></Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileInformasi>{firstTitle}</SecondTitileInformasi>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CH>{props.fistCost}</CH>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileInformasi>{secondTitle}</SecondTitileInformasi>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CH>{props.secondCost}</CH>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileInformasi>{thirdTitle}</SecondTitileInformasi>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CH>{props.secondCost}</CH>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const CH = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    margin-bottom : 25px;

`;

const TitleInformsi = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    color: #0A0A0A;
    text-align: left;
    margin-bottom: 18px;
`;

const SecondTitileInformasi = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.005em;

    /* grey dark */
    color: #4A4A4A;
`;

InformasiSekolah.propTypes = {
    time : PropTypes.string,
    reg  : PropTypes.string,
    headmaster : PropTypes.string,
}

export default InformasiSekolah;