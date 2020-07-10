import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './cardimagemobilescroll.css'

const CardImageMobileScroll = props => {
    return (
        <>
            <Container id="cardImageMobileScrollContainer">
                <Row>
                    <div className="scrollmenu">
                        
                        {props.store.map((data)=>{
                            return(
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={data.image} width={286} height={180}/>
                                            <Card.Body>
                                                <CardTitle>{data.titleCard.substr(0, 20)}{data.titleCard.length > 19 ? " ..." : ""}</CardTitle>
                                                <CardCount>{data.descrip.substr(0, 25)}{data.titleCard.descrip > 25 ? " ..." : ""}</CardCount>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        }
                    </div>
                </Row>
            </Container>
        </>
    );
}

const CardTitle = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    /* black */
    color: #0A0A0A;
    text-align: left;
    margin-top: 0px;

    overflow-wrap: break-word;
    word-wrap: break-word;
`;
const CardCount = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: -2px;

    /* identical to box height */

    /* black */
    color: #0A0A0A;
    text-align: left;

    overflow-wrap: break-word;
    word-wrap: break-word;

`;


CardImageMobileScroll.propTypes = {
    store : PropTypes.object
}

export default CardImageMobileScroll;