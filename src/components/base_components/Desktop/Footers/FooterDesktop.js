import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import logoeduplus from '../../../asset/logo/eduplusheader.svg'

import './footerdesktop.css'

const FooterDesktop = (props) => {
  
    return (
        <>
            <Container id="footerDesktopContainer">
                <Row>
                    <Col className="headclassfooter">
                        <DivLogo><img src={logoeduplus} width="138px" height="52px" alt="" /></DivLogo>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <DivDescr className="description">
                            Cari sekolah sesuai kebutuhan Anda di Edukasi Plus
                        </DivDescr>
                    </Col>
                    <Col className="colMenuBar" lg={8}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contactus">Hubungi Kami</a></li>
                            <li><a href="https://operator.edukasiplus.com/">Login</a></li>
                            <li><a href="/getaccess">Daftarkan Sekolah Anda</a></li>
                        </ul>
                    </Col>
                </Row>  
                <Row>
                    <Col xs={12}>
                        <LineFooter></LineFooter>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CopyRight>2020 © EDUKASI PLUS. All rights reserved.</CopyRight>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivLogo = styled.div`
    margin-top: 56px;
    text-align: left;
`;

const DivDescr = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px;
    // margin-left: 15px;
    text-align: justify;

    /* identical to box height */
    letter-spacing: 0.0025em;

    /* white */
    color: #FFFFFF;
`;

const LineFooter = styled.div`
    border: 1px solid #FFFFFF;  
`;

const CopyRight = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    margin-top: 16px;

    /* identical to box height */
    letter-spacing: 0.0025em;

    /* white */
    color: #FFFFFF;
`;

FooterDesktop.prototype = {
    homeLink     : PropTypes.string,
    contactLink  : PropTypes.string,
    loginLink    : PropTypes.string,
    registerLink : PropTypes.string
}

export default FooterDesktop;