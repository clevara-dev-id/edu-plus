import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from 'react-web-vector-icons';
import { Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

import '../../Icon/Mobile/Icon';
import './dropdownlistsingledesktop.css';

const DropDownListSingleDesktop = props => {
    const [filter, setFilter]=useState('URUTKAN');
    // const [filterArea, setFilterArea]=useState('FILTER');
    const showfunction = () => {
        $("#myDropdownLetterDesktop").toggle();
    }
    const hidefunction = () => {
        $("#myDropdownLetterDesktop").hide();   
    }
    // const showfunctionArea = () => {
    //     $("#myDropdownArea").toggle();
    // }
    // const hidefunctionArea = () => {
    //     $("#myDropdownArea").hide();   
    // }
    $( document ).ready(function(){
        $("#azbuttonSingleDropDOwn").click(()=>{
            setFilter("Abjad A-Z");
            hidefunction();
        });
        $("#zabuttonSingleDropDOwn").click(()=>{
            setFilter("Abjad Z-A");
            hidefunction();
        });
    });
    return (
        <>
            <Container id="dropSownListSingleDesktopContainer">
                <Row>
                    <Col xs={6} className="filterSearchDesktop">
                        <div className="dropdownDesktop">
                            <MyButton onClick={()=>{showfunction()}} className="dropbtnDesktop" >
                                <Icon  
                                    name="swap-vert" 
                                    color="#1A6EB2"
                                    font="MaterialIcons"
                                    size={22} 
                                />
                                <span className="fildfilter" >{filter}</span>
                            </MyButton>
                            <div id="myDropdownLetterDesktop" class="dropdown-content-desktop">
                                <option
                                    id="azbuttonSingleDropDOwn"
                                    value="az" 
                                    onClick={props.onClick}
                                    >Abjad A-Z</option>
                                <option 
                                    id="zabuttonSingleDropDOwn"
                                    value="za" 
                                    onClick={props.onClick}
                                    >Abjad Z-A
                                </option>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const MyButton = styled.button`
`;

DropDownListSingleDesktop.propTypes = {
    onClick     : PropTypes.func,
    onClickArea : PropTypes.func,
}

export default DropDownListSingleDesktop;