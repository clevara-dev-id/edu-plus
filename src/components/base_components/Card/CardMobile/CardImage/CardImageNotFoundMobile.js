import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import ButtonPrimary from '../../../Button/ButtonMobile/ButtonPrimary';
import ImgNotFound from '../../../../asset/images/CardImageNotFound/notfound.png';
import './cardimagenotfoundmobile.css';

const CardImageNotFoundMobile = (props) => {
    const getAccess = () =>{
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
                                    alt=" "
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