import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

import $ from 'jquery';

import '../../Icon/Mobile/Icon';
import './radiobuttontwotab.css';


const RadioButtonTwoTab = props => {
    const [icon,setIcon]=useState('');
    const [iconTwo,setIconTwo]=useState('');
    // const [iconTwo,setIconTwo]=useState('');

    // const getPath = window.location.pathname;
    // console.log(getPath);
    const openPage = (evt, cityName,value) =>{
        // console.log(value);
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontendetail");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinksbadges");
        // console.log(tablinks);
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" activeClassRadioTab", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " activeClassRadioTab";
        // handleOnclick(value);
        console.log(document.getElementById(cityName).style.display);
        

    }
    const setCheckTab = (value) =>{
        if(value==="set1"){
            // $("#idForCircleRadioButton > .firstTab > i").html(`<i style="font-size: 24px; color: rgb(181, 181, 181); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i>`);
            // $("#idForCircleRadioButton > .secondtabf > i").html(`<i style="font-size: 24px; color: rgb(181, 181, 181); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i>`);

        }
    } 
    // const handleOnclick=(value)=>{"forIconChangeRadioButtonTab
    //     console.log(value);
    //     value ==="set2" ? setIconTwo('button2') : setIconTwo('button1');
    // }
    // useEffect(()=>{
    $(document).ready(function(){
        document.getElementById("defaultOpenTab").click(); 
        
    })
    // });

    return (
        <>
        <Container id="RadioButtonTwoTab">
            <Row>
                    <Col xs={6} id={`idsetradiobuttontab0`}>
                        <TabRadioButtonDiv 
                            id="defaultOpenTab" 
                            className="tablinksbadges" 
                            onClick={(e)=>{openPage(e,props.store[0].idContent);setIcon("")}}>
                            <Row id="idForCircleRadioButton">
                                <Col xs={2} className="firstTab">
                                    <Icon  
                                        id="forIconChangeRadioButtonTab"
                                        name={icon==="button1" ? 'check-circle' : "circle-o"}
                                        color={props.iconColor ? props.iconColor : "#B5B5B5"} 
                                        font={props.fontFamily ? props.fontFamily : "FontAwesome"} 
                                        size={props.size ? props.size : 24} 
                                     />
                                </Col>
                                <Col xs={10}><p>{props.store[0].name}</p></Col>
                            </Row>
                        </TabRadioButtonDiv>
                    </Col>
                    <Col xs={6} id={`idsetradiobuttontab1`}>
                        <TabRadioButtonDiv
                            id="otherButton"
                            className="tablinksbadges" 
                            onClick={(e)=>{openPage(e,props.store[1].idContent);setIcon("")}}>
                            <Row id="idForCircleRadioButton">
                                <Col xs={2} id="secondtabf">
                                    <Icon  
                                        name={icon==="button2" ? 'check-circle' : "circle-o"}
                                        color={props.iconColor ? props.iconColor : "#B5B5B5"} 
                                        font={props.fontFamily ? props.fontFamily : "FontAwesome"} 
                                        size={props.size ? props.size : 24} 
                                     />
                                </Col>
                                <Col xs={10}><p>{props.store[1].name}</p></Col>
                            </Row>
                        </TabRadioButtonDiv> 
                    </Col>
            </Row>
        </Container>
        </>
    );
}

const TabRadioButtonDiv = styled.div`
    width: 168px;
    height: 40px;

    background: #FFFFFF;

    /* Gray */
    border: 0.4px solid #9B9B9B;
    box-sizing: border-box;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */
    letter-spacing: 0.001em;

    /* Black */
    color: #222222;
`;

RadioButtonTwoTab.propTypes = {
    store : PropTypes.object,
}

export default RadioButtonTwoTab;
