import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Badge, Button, InputGroup, FormControl } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import './desktopbadges.css';
import '../Icon/Icon'


const DesktopBadges = props => {
    const getPath = window.location.pathname;
    // console.log(getPath);
    const openPage = (evt, cityName) =>{
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontendetailDesktop");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinksbadges");
        // console.log(tablinks);
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" activeClassBadges", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " activeClassBadges";
    }
    
    // useEffect(()=>{
    $(document).ready(function(){
        document.getElementById("defaultOpenBadges").click();  
    })
    // });

    return (
        <>
        <Container id="desktopBadgesContainer">
            <Row>
                <Col className="badgescol" lg={8}>
                    <div>
                        <div id="childBadgesDesktop" >
                            {props.store.map((data)=>{
                                return(
                                    props.store[0].name === data.name ?
                                    <MyBadgeGray id="defaultOpenBadges" 
                                        className="tablinksbadges" 
                                        onClick={(e)=>{openPage(e,data.idContent)}}>
                                        {data.name}
                                    </MyBadgeGray>
                                    :
                                    // <LinkBadge href={data.link}>
                                    <MyBadgeGray className="tablinksbadges" onClick={(e)=>{openPage(e,data.idContent)}}>
                                        {data.name}
                                    </MyBadgeGray>  
                                    //   </LinkBadge>      
                                );
                            })}
                        </div>
                    </div>
                </Col>
                <Col lg={1}>
                    <Button variant="primary">Arrow</Button>{' '}
                </Col>
                <Col className="badgescolrightside" lg={3}>
                    <InputGroup className="mb-3">
                        {/* <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <Icon name="search" color="#B5B5B5" font="Feather" size={24} />
                        <FormControl
                        className="inputTextBadges"
                        placeholder="Cari Provinsi"
                        aria-label="CariProvinsi"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        </>
    );
}

const LinkBadge = styled.a`
    &:hover{
        text-decoration: none;
        background: none;
    }
`;

const MyBadge = styled.span`
    width: auto;
    height: 30;
    font-family: Rubik;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    background: #08A0E9;
    border-radius: 4px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 8px;
    padding-bottom: 7px;
    margin-right: 9px;

    display: inline-block;
    white-space: nowrap;
    vertical-align: baseline;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
`;

const MyBadgeGray = styled.span`
    width: auto;
    height: 30;
    font-family: Rubik;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #B5B5B5;
    background: #F5F5F5;
    border-radius: 4px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 8px;
    padding-bottom: 7px;
    margin-right: 9px;

    display: inline-block;
    white-space: nowrap;
    vertical-align: baseline;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
`;

DesktopBadges.propTypes = {
    name : PropTypes.object,
}

export default DesktopBadges;