import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import './messagegetaccessresultdesktop.css'
const MessageGetAccessResultDesktop = props => {
    return (
        <>
            <Container id="messageGetAccessResultDesktopContainer">
                <Row>
                    <Col>
                        <DivLine {...props}>Hasil untuk <b>{props.name}</b> ({props.sumOf} data)</DivLine>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivLine = styled.h6(
    props => ({
        width: props.width ? props.width : "537px",
        fontStyle: props.fontStyle ? props.fontStyle : "normal",
        fontWeight: props.fontWeight ? props.fontWeight : "normal",
        fontSize: props.fontSize ? props.fontSize : "12px",
        lineHeight: props.lineHeight ? props.lineHeight : "14px",
        color: props.color ? props.color :  "#4A4A4A",
        textAlign : props.textAlign ? props.textAlign : "left",
    })
);

MessageGetAccessResultDesktop.propTypes = {
    marginTop    : PropTypes.string,
    marginBottom : PropTypes.string
}

export default MessageGetAccessResultDesktop;