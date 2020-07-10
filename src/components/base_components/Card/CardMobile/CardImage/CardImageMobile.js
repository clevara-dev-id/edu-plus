import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import ButtonLoadMore from '../../../Button/ButtonMobile/ButtonSecondary';
import './cardimagemobile.css'

const CardImageMobile = props => {
    return (
        <>
            <Container id="cardImageMobileContainer">
            {props.store.map((data)=>{
                return(
                    <LinkCards href={data.link ? data.link : false}>
                    <Row>
                        <Col>
                            <Card className="text-white">
                                <Card.Img src={data.image} alt="Card image" />
                                <Card.ImgOverlay>
                                    <BottomStyle></BottomStyle>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip}</CardCount>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    </LinkCards>
                  );
                })
            }
            <Row>
                {props.loadmoreEnable === true ? <div style={{marginTop: "25px"}}></div> : ""}
                {props.loadmoreEnable === true ?<ButtonLoadMore 
                    name="MUAT LEBIH BANYAK"
                    width="277px"
                    boxShadow="none"
                    background="#f3f3f3"
                    onClick={props.onClickLoadmore}

                /> : ""}
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
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0125em;

    color: #FFFFFF;
`;
const CardCount = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-align: left;

    color: #FFFFFF;
`;

const BottomStyle = styled.div`
    min-height: 83%;
`;

CardImageMobile.propTypes = {
    store : PropTypes.object
}

export default CardImageMobile;