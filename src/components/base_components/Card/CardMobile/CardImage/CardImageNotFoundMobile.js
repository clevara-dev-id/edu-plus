import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import ButtonPrimary from '../../../Button/ButtonMobile/ButtonPrimary';
import ImgNotFound from '../../../../asset/images/CardImageNotFound/notfound.png';
import './cardimagenotfoundmobile.css';

const CardImageNotFoundMobile = props => {
    const getAccess = (uuid) =>{
        window.location=`/getaccessinput`;
    }
    return (
        <>
            <Container id="cardImageNotFoundMobileContainer">
                <Row>
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src={"https://via.placeholder.com/255x256"} height={180}/> */}
                            <TopTitleCard>Data sekolah/Tempat kursus tidak ditemukan. Klik tombol dibawah untuk daftarkan sekolah/tempat kursus</TopTitleCard>
                            {/* <CardTitle>NotFound</CardTitle>
                            <CardCount>NotFound</CardCount> */}
                            <DivImage>
                                <img 
                                    src={ImgNotFound} 
                                    width="100px" 
                                    height="100px" 
                                />
                            </DivImage>
                            <div>
                                <ButtonPrimary 
                                    width="100%"
                                    name="DAPATKAN AKSES"
                                    onClick={()=>{getAccess()}}
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
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

const DivImage = styled.div`
    margin-top: 30px;
    margin-botttom: 35px;
`;

const TopTitleCard = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;

    /* or 150% */
    text-align: center;
    text-decoration-line: underline;

    /* grey dark */
    color: #4A4A4A;
`;

CardImageNotFoundMobile.propTypes = {
    store : PropTypes.object
}

export default CardImageNotFoundMobile;