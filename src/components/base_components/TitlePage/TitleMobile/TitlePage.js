import React, { Component, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import './titlepage.css'

const TitlePage = props => {
    return (
        <>
            <Container id="primarytitile">
                <Row>
                    <Col xs={1}>
                    <HeaderDiv {...props}>    
                        <h1>{props.name}</h1>
                    </HeaderDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );

}
const HeaderDiv = styled.div(
    props => ({
        width       : props.width ? props.width : "345px",
        textAlign   : props.textAlign ? props.textAlign : "Left",
        paddingLeft : "0px",
        fontStyle   : props.fontStyle ? props.fontStyle : "normal",
        fontWeight  : props.fontWeight ? props.fontWeight : "normal",
        color       : props.color ? props.color : "#000000",
})) 

TitlePage.propTypes = {
    name        : PropTypes.string,
    width       : PropTypes.string,
    textAlign   : PropTypes.string,
    fontStyle   : PropTypes.string,
    fontWeight  : PropTypes.string,

};

export default TitlePage;