import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import ButtonPrimary from '../../../Button/ButtonMobile/ButtonPrimary';
import './cardimagewithbuttonmobile.css';

const CardImageWithButtonMobile = props => {
    const getAccess = (uuid) =>{
        window.location=`/getaccessinput?uuid=${uuid}`;
    }
    const loginButtonClick = (uuid) =>{
        window.location=`/login`;
    }
    return (
        <>
            <Container id="cardImageWithButtonMobileContainer">
            {props.store.map((data)=>{
                return(
                    data.operator === false ?
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={data.image} height={180}/>
                                <Card.Body>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip}</CardCount>
                                    <div>
                                        <ButtonPrimary 
                                            width="297px"
                                            name="DAPATKAN AKSES"
                                            onClick={()=>{getAccess(data.uuid)}}
                                        />
                                    </div>
                                    <BottomTitleCard>Klik tombol dapatkan akses untuk mengubah data di sekolah ini</BottomTitleCard>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> :
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={data.image} height={180}/>
                                <Card.Body>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip}</CardCount>
                                    <div>
                                        <ButtonPrimary 
                                            width="297px"
                                            name="Login"
                                            onClick={()=>{loginButtonClick()}}
                                        />
                                    </div>
                                    <BottomTitleCard>Sekolah ini sudah memilik operator, silahkan login untuk mengubah data di sekolah ini</BottomTitleCard>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                  )
                })
            }
            </Container>
        </>
    );
}

const LinkCards = styled.a`
    text-decoration: none;
    &:hover{
        text-decoration: none;
    }
`; 

const CardTitle = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 17px;
    text-align: left;
    margin-top: 5px;

    /* identical to box height */
    letter-spacing: 0.0125em;
    color: #242424;
`;
const CardCount = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-align: left;
    color: #242424;
`;

const BottomTitleCard = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #4A4A4A;
    margin-bottom: 20px;
`;

CardImageWithButtonMobile.propTypes = {
    store : PropTypes.object
}

export default CardImageWithButtonMobile;