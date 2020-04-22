import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col, Button } from 'react-bootstrap';

import './ButtonMobile.css'

const ButtonSecondary = props => {
    return(
        <>
            <Container id="buttonAsset">
                <Row>
                    <Col xs={1}>
                        <MyButton {...props} onClick={props.onClick}>{props.name}</MyButton>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

const MyButton = styled.button(
    props => ({
        width: props.width ? props.width : "343px",
        height: props.height ? props.height : "48px",
        left: props.left ? props.left : "17px",
        color : props.color ? props.color : "#3273DC",
        background: props.background ? props.background : "#ffffff",
        boxShadow: props.boxShadow ? props.boxShadow : "0px 4px 8px rgba(50, 115, 220, 0.25)",
        borderRadius: props.borderRadius ? props.borderRadius : "25px",
        borderWeight : props.borderWeight ? props.borderWeight : "0px",
        borderWidth: props.borderWidth ? props.borderWidth : "0px",
        fontStyle: props.fontStyle ? props.fontStyle : "normal",
        fontWeight: props.fontWeight ? props.fontWeight : "bold",
        fontSize: props.fontSize ? props.fontSize : "14px",
        lineHeight: props.lineHeight ? props.lineHeight : "17px",
        transition: "0.3s all",
    })
);

ButtonSecondary.prototype = {
    onClick      : PropTypes.func,
    name         : PropTypes.string,
    width        : PropTypes.string,
    height       : PropTypes.string,
    left         : PropTypes.string,
    color        : PropTypes.string,
    background   : PropTypes.string,
    boxShadow    : PropTypes.string,
    borderRadius : PropTypes.string,
    borderWeight : PropTypes.string,
    borderWidth  : PropTypes.string,
    fontStyle    : PropTypes.string,
    fontWeight   : PropTypes.string,
    fontSize     : PropTypes.string,
    lineHeight   : PropTypes.string,
}

export default ButtonSecondary;