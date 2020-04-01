import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 

const MobileIcon = props => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <ItemTag><FontAwesome name={props.icon} color={props.iconColor} size={24} /></ItemTag>
                    </Col>
                    <Col>
                        <NameItem>{props.name}</NameItem>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const ItemTag = styled.div`
    width: 56px;
    height: 56px;
    padding-top: 18px;
    /*padding-bottom:16px;*/
    margin-top: 10px;
    margin-bottom: 10px;
    /* white */
    background: red;

    /* shadow-1 */
    background: #FFFFFF;

    /* shadow-1 */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
`;

const NameItem = styled.div`
    color : #4A4A4A;
    font-style: normal;
    font-weight: normal;
    font-size: 14px !important;
    line-height: 17px;
    text-align: -moz-center;
    letter-spacing: 0.0025em;
`;

MobileIcon.propTypes = {
    name      : PropTypes.string,
    icon      : PropTypes.string,
    iconColor : PropTypes.string 
}

export default MobileIcon;