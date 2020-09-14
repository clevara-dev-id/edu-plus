import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import SecondaryButtonDesktop from '../Button/SecondaryButtonDesktop';
import './cardimagewithbuttondesktop.css'

const CardImageWithButtonDesktop = props => {
    const getAccess = (uuid) =>{
        window.location=`/getaccessinput?uuid=${uuid}`;
    }
    const loginButtonClick = () =>{
        window.location=`/login`;
    }
    return (
        <>
            <Container id="cardImageWithButtonDesktopContainer">
                <Row>
                    {props.store.map((data)=>{
                        return(
                        <Col lg={4} className="colCardButton">
                            {data.operator===false ?
                            <Card>
                                <Card.Img variant="top" src={data.image} height={180}/>
                                <Card.Body>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip}</CardCount>
                                    <div>
                                        <SecondaryButtonDesktop 
                                            name="DAPATKAN AKSES"
                                            onClick={()=>{getAccess(data.uuid)}}
                                        />
                                    </div>
                                    <BottomTitleCard>Klik tombol dapatkan akses untuk mengubah data di sekolah ini</BottomTitleCard>
                                </Card.Body>                            
                            </Card> : 
                            <Card>
                            <Card.Img variant="top" src={data.image} height={180}/>
                            <Card.Body>
                                <CardTitle>{data.titleCard}</CardTitle>
                                <CardCount>{data.descrip}</CardCount>
                                <div>
                                    <SecondaryButtonDesktop 
                                        name="LOGIN"
                                        onClick={()=>{loginButtonClick()}}
                                    />
                                </div>
                                <BottomTitleCard>Sekolah ini sudah memilik operator, silahkan login untuk mengubah data di sekolah ini</BottomTitleCard>
                            </Card.Body>                            
                        </Card>}
                        </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

const CardTitle = styled.h3`
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0125em;
    text-transform: uppercase;

    color: #242424;
`;
const CardCount = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #0A0A0A;
    text-align:left;
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

CardImageWithButtonDesktop.propTypes = {
    store : PropTypes.object
}

export default CardImageWithButtonDesktop;