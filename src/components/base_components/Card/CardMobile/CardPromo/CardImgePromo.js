import React, { Component, useState } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './cardimagepromo.css'

const MyVerticallyCenteredModal=(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalPromoDetailMobileId"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Promo Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div><img src={props.sourceImage} /></div>
            <DivLine></DivLine>
            <TitleModal>{props.TitleCard}</TitleModal>
            <DescriptionModal>{props.descripModal}</DescriptionModal>
        </Modal.Body>
      </Modal>
    );
}

const CardImgePromo = props => {
    const lengthData = props.store.length-1;
    const [modalShow, setModalShow] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');

    return (
        <>
            <Container id="cardImageMobilePromoContainer">
                {props.store.map((data, index)=>{
                        return(
                            <Row>
                                <Col xs={12}>
                                    <Card className="text-white">
                                        <Card.Img src={data.image} alt="Card image" height={189} />
                                    </Card>
                                </Col>
                                <Col xs={12}>
                                    <TitleCard>{data.titleCard}</TitleCard>
                                </Col>
                                <Col xs={12}>
                                    <Description>
                                        {data.descrip.substring(0, 100)}
                                        {data.descrip.length>100?"...":""}
                                    </Description>
                                </Col>
                                <Col xs={12}>
                                    <LinkCard 
                                            onClick={()=>{
                                                    setModalShow(true);
                                                    setModalImage(data.image);
                                                    setModalTitle(data.titleCard);
                                                    setModalDescription(data.descrip);
                                                }
                                            }>Selengkapnya</LinkCard>
                                </Col>
                                {lengthData!==index?<Col xs={12}><PromoLine></PromoLine></Col>:""}
                            </Row>
                        )
                    })
                }
                <Row>
                    <Col>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            sourceImage={modalImage}
                            TitleCard={modalTitle}
                            descripModal={modalDescription}
                    />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const PromoLine = styled.div`
    width: 100%;
    margin-top:25px;
    margin-bottom:27px;

    /* grey lighter */
    border: 1.5px solid #DBDBDB;
`;

const TitleCard = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    margin-top:25px;
    margin-bottom:6px;

    /* dark */
    color: #363636;
`;

const Description = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: justify;

    /* or 150% */

    /* grey dark */
    color: #4A4A4A;
`;

const LinkCard = styled.a`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    text-align: left;
    justify-content: flex-start;
    display: flex;
    color: #1A6EB2 !important;
    margin-top: 8px;
`;

const TitleModal = styled.h3`
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #363636;
`;

const DescriptionModal = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #4A4A4A;
    margin-bottom:25px;
`;

const DivLine = styled.div`
    width: 100%;
    border: 1px solid #DBDBDB;
    margin-top: 28px;
    margin-bottom: 28px;
`;

CardImgePromo.propTypes = {
    store : PropTypes.object
}

export default CardImgePromo;