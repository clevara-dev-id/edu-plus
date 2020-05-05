import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './cardimagemobilesecondary.css'

const CardImageMobileSecondary = props => {
    return (
        <>
            <Container id="cardImageMobileSecondaryContainer">
            {props.store.map((data)=>{
                return(
                    <LinkCards href={data.link ? data.link+`?city=${data.titleCard}` :`/favoritedetail?city=${data.titleCard}`}>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={data.image} height={242}/>
                                    <Card.Body>
                                        <CardTitle>{data.titleCard}</CardTitle>
                                        <CardCount>{data.descrip}</CardCount>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </LinkCards>
                  );
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
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 17px;
    text-align: left;
    margin-top: 10px;

    /* identical to box height */
    letter-spacing: 0.0125em;
    color: #242424;
`;
const CardCount = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-align: left;
    color: #242424;
`;

const BottomStyle = styled.div`
    min-height: 83%;
`;

CardImageMobileSecondary.propTypes = {
    store : PropTypes.object
}

export default CardImageMobileSecondary;