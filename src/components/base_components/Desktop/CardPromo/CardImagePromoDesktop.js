import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import './cardimagepromodesktop.css'


const MyVerticallyCenteredModal=(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalPromoDetailDesktopId"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Promo Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div><img src={props.sourceImageModal} width="480px" height="259px" alt="" /></div>
            <DivLine></DivLine>
            <TitleModal>{props.TitleCard}</TitleModal>
            <DescriptionModal>{props.descripModal}</DescriptionModal>
        </Modal.Body>
      </Modal>
    );
}

const CardImagePromoDesktop = props => {
    const [modalShow, setModalShow] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    return (
        <>
            <Container id="cardImagePromoDesktopContainer">
                <Row>
                    {props.store.map((data)=>{
                        return(
                        <Col lg={4}>
                            <Card>
                                <Card.Img variant="top" src={data.image} 
                                    onClick={()=>{
                                        setModalShow(true);
                                        setModalImage(data.image);
                                        setModalTitle(data.titleCard);
                                        setModalDescription(data.descrip);
                                    }
                                }
                                />
                                <Card.Body>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip.substring(0, 100)}
                                        {data.descrip.length>100?"...":""}
                                    </CardCount>
                                    <LinkCard 
                                        onClick={()=>{
                                                setModalShow(true);
                                                setModalImage(data.image);
                                                setModalTitle(data.titleCard);
                                                setModalDescription(data.descrip);
                                            }
                                        }
                                    >Selengkapnya</LinkCard>
                                </Card.Body>
                            </Card>
                        </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            sourceImageModal={modalImage}
                            TitleCard={modalTitle}
                            descripModal={modalDescription}
                    />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const CardTitle = styled.h3`
    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0125em;
    text-transform: uppercase;

    color: #242424;
`;
const CardCount = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-transform: lowercase;
    text-align: left;

    color: #242424;
`;

const LinkCard = styled.a`
    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    text-align: left;
    justify-content: flex-start;
    display: flex;
    color: #1A6EB2 !important;
    margin-top: 8px;
    cursor:pointer;
`;

const DivLine = styled.div`
    width: 100%;
    border-top: 2px solid #DBDBDB;
    margin-top: 28px;
    margin-bottom: 28px;
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


CardImagePromoDesktop.propTypes = {
    store : PropTypes.object
}

export default CardImagePromoDesktop;