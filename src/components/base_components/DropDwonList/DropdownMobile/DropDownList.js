import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from 'react-web-vector-icons';
import { Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

import '../../Icon/Mobile/Icon';
// import arrowicon from '../../../asset/images/ShortButton/icon.svg';
// import filtericon from '../../../asset/images/ShortButton/filter.svg';
import './dropdown.css';

const DropDownList = props => {
    const [filter, setFilter]=useState('URUTKAN');
    const [filterArea, setFilterArea]=useState('FILTER');
    const showfunction = () => {
        $("#myDropdownLetter").toggle();
    }
    const hidefunction = () => {
        $("#myDropdownLetter").hide();   
    }
    const showfunctionArea = () => {
        $("#myDropdownArea").toggle();
    }
    const hidefunctionArea = () => {
        $("#myDropdownArea").hide();   
    }
    return (
        <>
            <Container id="dropdownlistFilterContainer">
                <Row>
                    <Col xs={6} className="filterSearch">
                        <MyButton onClick={()=>{showfunction()}} className="dropbtn" id="dropbtn">
                            <Icon  
                                name="swap-vert" 
                                color="#1A6EB2"
                                font="MaterialIcons"
                                size={22} 
                            />
                            <span className="fildfilter" >{filter}</span>
                        </MyButton>
                        <div id="myDropdownLetter" class="dropdown-content">
                            <li onClick={(e)=>{hidefunction(); setFilter("Abjad A-Z")}}>
                                <option value="az" onClick={props.onClick}>Abjad A-Z</option>
                            </li>
                            <li onClick={(e)=>{hidefunction(); setFilter("Abjad Z-A")}}>
                                <option value="za" onClick={props.onClick}>Abjad Z-A</option>
                            </li>
                        </div>
                    </Col>
                    <Col xs={6} className="filterSearch">
                        <MyButton onClick={()=>{showfunctionArea()}} className="dropbtn" id="dropbtn">
                            <Icon  
                                name="filter" 
                                color="#1A6EB2"
                                font="AntDesign"
                                size={20} 
                            />
                            <span className="fildfilter" >{filterArea}</span>
                        </MyButton>
                        <div id="myDropdownArea" class="dropdown-content">
                            <li onClick={(e)=>{hidefunctionArea(); setFilterArea("Provinsi")}}>
                                <option value="provinsi" onClick={props.onClickArea}>Provinsi</option>
                            </li>
                            <li onClick={(e)=>{hidefunctionArea(); setFilterArea("Kota")}}>
                                <option value="kota" onClick={props.onClickArea}>Kota</option>
                            </li>
                            <li onClick={(e)=>{hidefunctionArea(); setFilterArea("Kecamatan")}}>
                                <option value="kecamatan" onClick={props.onClickArea}>Kecamatan</option>
                            </li>
                            <li onClick={(e)=>{hidefunctionArea(); setFilterArea("Kelurahan")}}>
                                <option value="kelurahan" onClick={props.onClickArea}>Kelurahan</option>
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
    onClick     : PropTypes.func,
    onClickArea : PropTypes.func,
}

export default DropDownList;