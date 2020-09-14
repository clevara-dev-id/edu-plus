import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import './cardlistwhatsapp.css'
// import TitlePage from '../../../TitlePage/TitleMobile/TitlePage';
import WhatsappIcon from '../../../../asset/logo/ContactUs/WhatsappIcon.svg'
const CardListWatsApp = (props) => {
    // let store = ;
    // props.store ? store=props.store : store=store; 
    return (
        <>
        <Container id="cardimgewatapp">
            { 
            props.store.map((data)=>{return (
            <Row>
                <Col>
                    <MyCard>
                    <div className="card-horizontal">
                        <CardImage>
                            <img class="imageClass" src={WhatsappIcon} width="56px" height="56px" alt="" />
                        </CardImage>
                        <CardBody className="cardimgewatappbody">
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
    height: 90px; 
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color:#fff;
    background-clip: border-box;
    border: 1px;
    border-radius: 8px;
    box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
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

CardListWatsApp.propTypes = {
    store : PropTypes.object,
}

export default CardListWatsApp;