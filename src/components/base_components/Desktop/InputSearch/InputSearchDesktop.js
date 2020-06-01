import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
// import $ from 'jquery';

import './inputsearchdesktopsecondary.css';
import '../../Icon/Mobile/Icon';


const InputSearchDesktop = props => {

    // $(document).ready(function(){
    //     document.getElementById("defaultOpenBadges").click();  
    // })

    return (
        <>
        <Container id="inputSearchDesktopContainer">
            <Row>
                <Col>
                    <div className="titleInputSearch">
                        <DivTitle>{props.title}</DivTitle>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                        className="inputTextBadges"
                        placeholder={props.placeholder}
                        aria-label={props.label}
                        aria-describedby="basic-addon1"
                        onChange={props.onChange}
                        />
                        <Icon name="search" color="#B5B5B5" font="Feather" size={17} />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        </>
    );
}

const DivTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    margin-bottom: 16px;

    /* black ter */
    color: #242424;
`;

InputSearchDesktop.propTypes = {
    onChange    : PropTypes.func,
    label       : PropTypes.string,
    placeholder : PropTypes.string
}

export default InputSearchDesktop;