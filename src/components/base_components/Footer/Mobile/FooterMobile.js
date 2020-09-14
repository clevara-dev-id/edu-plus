import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import logoeduplus from '../../../asset/logo/eduplus.svg'

import './footermobile.css'

const FooterMobile = props => {
  
    return (
        <>
            <Container id="footermobile" fluid>
                <Row>
                    <Col xs={12} className="headclassfooter">
                        <DivLogo><img src={logoeduplus} width="124px" height="36px" /></DivLogo>
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} >
                    <DivDescr>Dolore consequat et eu minim proident enim</DivDescr>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <DivHeadTitle>Company</DivHeadTitle>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <DivChild>About US</DivChild>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <DivChild>Partners</DivChild>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <DivHeadTitle>Support</DivHeadTitle>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <DivChild>Get in touch</DivChild>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <DivChild>Help Center</DivChild>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <DivHeadTitle>Contact Us</DivHeadTitle>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <DivChild>Email : info@eduplus.com</DivChild>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <DivChild>Phone : 021 562 7621</DivChild>
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
    margin-left: 15px;
    margin-top: 30px;
    text-align: left;
`;

const DivDescr = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 16px;
    margin-left: 15px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0025em;

    /* white */
    color: #FFFFFF;
`;

const DivHeadTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-top: 32px;
    margin-left: 15px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.005em;

    /* white */
    color: #FFFFFF;
`;

const DivChild = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 10px;
    margin-left: 15px;
    text-align: left;

    /* identical to box height */

    letter-spacing: 0.0025em;

    /* white */
    color: #FFFFFF;
`;

const LineFooter = styled.div`
    border: 1px solid #FFFFFF;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 32px;
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

export default FooterMobile;