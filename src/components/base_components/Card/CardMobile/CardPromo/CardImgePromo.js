import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './cardimagepromo.css'

const CardImgePromo = props => {
    const lengthData = props.store.length-1;
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
                                <Description>{data.descrip}</Description>
                            </Col>
                            {lengthData!==index?<Col xs={12}><PromoLine></PromoLine></Col>:""}
                        </Row>
                    )
                })
            }
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

CardImgePromo.propTypes = {
    store : PropTypes.object
}

export default CardImgePromo;