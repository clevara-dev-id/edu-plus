import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './informasisekolah.css'

const InformasiSekolah = props => {
    return(
        <>
            <Container id="informasiSekolahContainer">
                <Row>
                    <Col><TitleInformsi>Informasi Sekolah</TitleInformsi></Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileInformasi>Jam Masuk</SecondTitileInformasi>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CH>{props.time}</CH>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileInformasi>Pendaftaran</SecondTitileInformasi>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CH>{props.reg}</CH>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileInformasi>Kepala Sekolah</SecondTitileInformasi>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CH>{props.headmaster}</CH>
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