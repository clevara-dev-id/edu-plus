import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'react-web-vector-icons';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './kontaksekolah.css'

import PhoneIcon from '../../../asset/logo/InfoContact/phone-call.svg';
import GlobeIcon from '../../../asset/logo/InfoContact/globe.svg';

const KontakSekolah = props => {
    return(
        <>
            <Container id="kontakSekolahContainer">
                <Row>
                    <Col><TitleKontak>Kontak Sekolah</TitleKontak></Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileKontak>
                            <span>
                                <img src={PhoneIcon} width="16px" height="16px" />
                            </span>
                            <BodyKontak>{props.phone}</BodyKontak>
                        </SecondTitileKontak>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileKontak>
                            <span>
                                <Icon 
                                    font="FontAwesome"
                                    name="envelope-o" 
                                    color="#3273DC" 
                                    size={16} 
                                />
                            </span>
                            <BodyKontak>{props.mail}</BodyKontak>
                        </SecondTitileKontak>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SecondTitileKontak>
                            <span>
                                <img src={GlobeIcon} width="16px" height="16px" />
                            </span>
                            <BodyKontak>{props.web}</BodyKontak>
                        </SecondTitileKontak>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleKontak = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    color: #0A0A0A;
    text-align: left;
    margin-bottom: 25px;
`;

const SecondTitileKontak = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    margin-bottom: 16px;

    /* identical to box height */
    letter-spacing: 0.0025em;
    /* grey dark */
    color: #000000
`;

const BodyKontak = styled.span`
    margin-left: 10px;
`;

KontakSekolah.propTypes = {
    phone : PropTypes.string,
    mail  : PropTypes.string,
    web   : PropTypes.string,
}

export default KontakSekolah;