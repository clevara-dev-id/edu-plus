import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './cardimagemobiletertiary.css'

const CardImageTertiary = props => {
    return (
        <>
            <Container id="cardImageMobileTertiaryContainer">
            {props.store.map((data)=>{
                return(
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={data.image} height={180}/>
                                <Card.Body>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip}</CardCount>
                                </Card.Body>
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


CardImageTertiary.propTypes = {
    store : PropTypes.object
}

export default CardImageTertiary;