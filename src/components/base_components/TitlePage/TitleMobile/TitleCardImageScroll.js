import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import './titlecardimagescroll.css'

const TitleCardImageScroll = props => {
    return (
        <>
            <Container id="titlecardimagescrollContainer" >
                <Row>
                    <Col xs={8}>
                        <H5>{props.name}</H5>
                    </Col>
                    <Col xs={4}>
                        <ViewAll href={props.link}>{props.linkName}</ViewAll>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const H5 = styled.h5`
    text-align: left;
    font-style: normal;
    font-weight: 635;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0px;

    /* black bis */
    color: #121212;
`;

const ViewAll = styled.a`
    text-align: right !important;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    /* darkblue-eduplus */
    color: #1A6EB2;
    text-decoration: none;
    transition: 0.5s all;
    &:hover{
        text-decoration: none;
    }
`;

TitleCardImageScroll.propTypes ={
    name      : PropTypes.string,
    link      : PropTypes.string,
    linkName  : PropTypes.string
}

export default TitleCardImageScroll;