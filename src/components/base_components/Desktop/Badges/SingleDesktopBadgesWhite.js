import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Badge, Button, InputGroup, FormControl } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import './singledesktopbadgeswhite.css';
import '../Icon/Icon'


const SingleDesktopBadgesWhite = props => {
    // const getPath = window.location.pathname;
    // console.log(getPath);
    // const openPage = (evt, cityName) =>{
    //     var i, tabcontent, tablinks;
    //     tabcontent = document.getElementsByClassName("tabcontendetaildesktop");
    //     for (i = 0; i < tabcontent.length; i++) {
    //       tabcontent[i].style.display = "none";
    //     }
    //     tablinks = document.getElementsByClassName("tablinksbadges");
    //     // console.log(tablinks);
    //     for (i = 0; i < tablinks.length; i++) {
    //       tablinks[i].className = tablinks[i].className.replace(" activeClassBadgesDesktop", "");
    //     }
    //     document.getElementById(cityName).style.display = "block";
    //     evt.currentTarget.className += " activeClassBadgesDesktop";
    // }

    return (
        <>
        <Container id="singleDesktopBadgesWhiteContainer">
            <Row>
                <Col className="badgescol">
                    <div>
                        <div id="childBadgesDesktop" >
                            {props.store.map((data)=>{
                                return(
                                    <MyBadgeGray className="tablinksbadges">
                                        {data.name}
                                    </MyBadgeGray>  
                                );
                            })}
                        </div>
                    </div>
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

const MyBadgeGray = styled.span`
    width: auto;
    height: 39px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #1A6EB2;
    background: #FFFFFF;
    border-radius: 36px;
    padding-left: 17px;
    padding-right: 17px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 9px;
    margin-top: 5px;

    display: inline-block;
    white-space: nowrap;
    vertical-align: baseline;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    box-shadow: 0px 4px 8px rgba(150, 200, 235, 0.45);
`;

SingleDesktopBadgesWhite.propTypes = {
    name : PropTypes.object,
}

export default SingleDesktopBadgesWhite;