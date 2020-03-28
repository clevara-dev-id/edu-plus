import React, { Component, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import arrowicon from '../../../asset/images/ShortButton/icon.svg';
import './dropdown.css'


const DropDownList = props => {
    const [filter, setFilter]=useState('SUSUN SESUAI ABJAD');
    const showfunction = () => {
        $("#myDropdown").toggle();
    }
    const hidefunction = () => {
        $("#myDropdown").hide();   
    }
    return (
        <>
            <Container id="cardlist">
                <Row>
                    <Col xs={1} className="filterSearch">
                        <MyButton onClick={()=>{showfunction()}} className="dropbtn" id="dropbtn">
                            <img src={arrowicon} width="24px" height="24px" />
                            <span className="fildfilter" >{filter}</span>
                        </MyButton>
                        <div id="myDropdown" class="dropdown-content">
                            <li onClick={(e)=>{hidefunction(); setFilter("Teratas")}}>
                                <option value="teratas" onClick={props.onClick}>Teratas</option>
                            </li>
                            <li onClick={(e)=>{hidefunction(); setFilter("Terbawah")}}>
                                <option value="terbawah" onClick={props.onClick}>Terbawah</option>
                            </li>
                            <li onClick={(e)=>{hidefunction(); setFilter("Terpopuler")}}>
                                <option value="terpopuler" onClick={props.onClick}>Terpopuler</option>
                            </li>
                            <li onClick={(e)=>{hidefunction(); setFilter("Rekomendasi")}}>
                                <option value="rekomendasi" onClick={props.onClick}>Rekomendasi</option>
                            </li>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const MyButton = styled.button`
`;

DropDownList.propTypes = {
    onClick : PropTypes.func,
}

export default DropDownList;