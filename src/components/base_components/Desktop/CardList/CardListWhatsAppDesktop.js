import React, { Component, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col, Card } from 'react-bootstrap';
import './cardlistwhatsappdesktop.css'
// import TitlePage from '../../../TitlePage/TitleMobile/TitlePage';
import WhatsappIcon from '../../../asset/logo/ContactUs/WhatsappIcon.svg'
const CardListWhatsAppDesktop = props => {
    let store = [{
        image   : "http://via.placeholder.com/104x104",
        brand   : "NASIONAL",
        title   : "No. Telepon",
        contact : "+62 999 9999 9999 9999",
        phone   : "021 - 525 8721"
    }];
    props.store ? store=props.store : store=store; 
    return (
        <>
        <Container id="cardImgeWhatsappDesktopContainer">
            { 
            store.map((data)=>{return (
            <Row>
                <Col>
                    <MyCard>
                    <div className="card-horizontal-desktop">
                        <CardImage>
                            <img class="imageClassDesktop" src={WhatsappIcon} width="56px" height="56px" alt="Card image cap" />
                        </CardImage>
                        <CardBody className="cardimgewatappbodyDesktop">
                            <CardTitle className="title">{data.title}</CardTitle>
                            <CardContact className="contact">{data.contact}</CardContact>
                        </CardBody>
                    </div>
                    </MyCard>
                </Col>
            </Row>
            );})}
        </Container>
        </>
    );
}

const CardImage = styled.div`
    width: 56px;
    height: 56px;
    padding-top: 17px;
    padding-left: 14px;
    padding-bottom: 17px   
`;

const MyCard = styled.div`
    position: relative;
    width: 345px;
    height: 90px; 
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color:#fff;
    background-clip: border-box;
    border: 1px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(150, 200, 235, 0.45);
    margin-bottom: 25px;
`;

const CardBody = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    // padding-top: 16px;
    padding-left: 11px;
`;

const CardTitle = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */
    display: flex;
    align-items: center;

    /* black ter */
    color: #242424;
    margin-top: 24px;
    margin-left: 16px;
`;

const CardContact = styled.h5`
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    // line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0px;

    /* black ter */
    color: #242424;
    text-align: Left;
    margin-top: 5px;
    margin-left: 16px;

`;

CardListWhatsAppDesktop.propTypes = {
    store : PropTypes.object,
}

export default CardListWhatsAppDesktop;