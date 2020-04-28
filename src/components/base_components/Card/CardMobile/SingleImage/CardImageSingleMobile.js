import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './cardimagesinglemobile.css'

const CardImageSingleMobile = props => {
    return (
        <>
            <Container id="cardImageMobileSingleContainer">
            {props.store.map((data)=>{
                return(
                    <Row>
                        <Col>
                            <Card className="text-white">
                                <Card.Img src={data.image} alt="Card image" height={189} />
                            </Card>
                        </Col>
                    </Row>
                  );
                })
            }
            </Container>
        </>
    );
}

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

CardImageSingleMobile.propTypes = {
    store : PropTypes.object
}

export default CardImageSingleMobile;