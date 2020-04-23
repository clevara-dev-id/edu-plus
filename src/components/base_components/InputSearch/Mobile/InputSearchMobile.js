

import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import './inputsearchmobile.css';
import '../../Icon/Mobile/Icon'


const InputSearchMobile = props => {

    $(document).ready(function(){
        document.getElementById("defaultOpenBadges").click();  
    })

    return (
        <>
        <Container id="inputSearchContainer">
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <Icon name="search" color="#B5B5B5" font="Feather" size={17} />
                        <FormControl
                        className="inputTextBadges"
                        placeholder={props.placeholder}
                        aria-label={props.label}
                        aria-describedby="basic-addon1"
                        onChange={props.onChange}
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        </>
    );
}

InputSearchMobile.propTypes = {
    onChange    : PropTypes.func,
    label       : PropTypes.string,
    placeholder : PropTypes.string
}

export default InputSearchMobile;