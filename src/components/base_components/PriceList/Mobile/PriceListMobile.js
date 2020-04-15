import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import './mobiledescription.css'

import { Container, Row, Col } from 'react-bootstrap';

const PriceListMobile = props => {
    return (
        <>
            <Container id="pricelistmobile">
                <Row>
                    <Col>
                        <Title>{props.title}</Title>
                    </Col>
                </Row>
                {props.store.map((data)=>{
                    return(
                        <GroupDescription>
                            <Row>
                                <Col>
                                    <TitleDescription>{data.title}</TitleDescription>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FillDescription>{data.description}</FillDescription>
                                </Col>
                            </Row>
                        </GroupDescription>
                    );
                })}
            </Container>
        </>
    );
}

const GroupDescription = styled.div`
    margin-bottom: 16px;
`;

const Title = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 16px !important;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.0015em;

    color: #000000;


    /* Inside Auto Layout */
    flex: none;
    order: 0;
    align-self: flex-start;
`;

const TitleDescription = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: justify;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.001em;

    /* grey light */
    color: #B5B5B5;
`;

const FillDescription = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 3px;
    text-align: justify;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;

    /* grey dark */
    color: #4A4A4A;
`;

PriceListMobile.propTypes = {
    store : PropTypes.object,
    title : PropTypes.string
}

export default PriceListMobile;