import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import logoeduplus from '../../../asset/logo/eduplusheader.svg'

import './footermobileblue.css'

const FooterMobileBlue = props => {
  
    return (
        <>
            <Container id="footerMobileBlueContainer">
                <Row>
                    <Col xs={12} className="headclassfooter">
                        <DivLogo><img src={logoeduplus} width="138px" height="52px" /></DivLogo>
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} >
                        <DivDescr className="description">
                            Cari sekolah favorit untuk masa depan yang cerah semua ada di EDUKASI PLUS
                        </DivDescr>
                    </Col>
                </Row>
                <Row className="linkFooters" >
                    <Col xs={1} id="footerlinkid">
                        <FooterLink href={props.homeLink}>Home</FooterLink>
                    </Col>
                    <Col xs={4} id="footerlinkid" className="contactus" >
                        <FooterLink href={props.contactLink}>Hubungi Kami</FooterLink>
                    </Col>
                    <Col xs={1} id="footerlinkid" className="login" >
                        <FooterLink href={props.loginLink}>Login</FooterLink>
                    </Col>
                    <Col xs={6} id="footerlinkid" className="footersDaftar" >
                        <FooterLink href={props.registerLink} >Daftarkan Sekolah Anda</FooterLink>
                    </Col>
                </Row>  
                <Row>
                    <Col xs={12}>
                        <LineFooter></LineFooter>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CopyRight>2020 © Clevara. All rights reserved.</CopyRight>
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

const FooterLink = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;

    /* white */
    color: #FFFFFF !important;
    text-decoration: none;
    &:hover{
        text-decoration: none;
    }
`;

const LineFooter = styled.div`
    border: 1px solid #FFFFFF;  
    margin-top: 16px;
`;

const CopyRight = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 16px;

    /* identical to box height */
    letter-spacing: 0.0025em;

    /* white */
    color: #FFFFFF;
`;

FooterMobileBlue.prototype = {
    homeLink     : PropTypes.string,
    contactLink  : PropTypes.string,
    loginLink    : PropTypes.string,
    registerLink : PropTypes.string
}

export default FooterMobileBlue;