import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import SecondaryButtonDesktop from '../Button/SecondaryButtonDesktop';
import ImgNotFound from '../../../asset/images/CardImageNotFound/notfound.png';
import './cardimagenotfounddesktop.css'

const CardImageNotFoundDesktop = props => {
    const getAccess = (uuid) =>{
        window.location=`/getaccessinput`;
    }
    return (
        <>
            <Container id="cardImageNotFoundDesktopContainer">
                <Row>
                    <Col>
                        <Card>
                            <TopTitleCard>Data sekolah/Tempat kursus tidak ditemukan. Klik tombol dibawah untuk daftarkan sekolah/tempat kursus</TopTitleCard>
                            <DivImage>
                                <img 
                                    src={ImgNotFound} 
                                    width="100px" 
                                    height="100px" 
                                />
                            </DivImage>
                            <div>
                                <SecondaryButtonDesktop 
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

const DivImage = styled.div`
    margin-top: 30px;
    margin-bottom: 35px;
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

CardImageNotFoundDesktop.propTypes = {
    store : PropTypes.object
}

export default CardImageNotFoundDesktop;