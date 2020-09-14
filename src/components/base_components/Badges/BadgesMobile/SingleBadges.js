import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import './singlebadges.css'

const SingleBadges = props => {
    return (
        <>
        <Container id="singlebadgesContainer">
            <Row>
                <Col className="badgeclasssingle">
                    <MyBadge>{props.name}</MyBadge> 
                </Col>
            </Row>
        </Container>
        </>
    );
}

const MyBadge = styled.span`
    width: auto;
    height: 39px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #1A6EB2;
    background: #FFFFFF;
    border-radius: 36px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 10px;
    padding-bottom: 7px;
    margin-right: 9px;
    text-align:left;
    box-shadow: 0px 4px 8px rgba(150, 200, 235, 0.4);
    display: inline-block;
    white-space: nowrap;
    vertical-align: baseline;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
`;

SingleBadges.propTypes = {
    name : PropTypes.object,
}

export default SingleBadges;