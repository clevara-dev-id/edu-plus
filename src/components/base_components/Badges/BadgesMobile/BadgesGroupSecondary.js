import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, Badge } from 'react-bootstrap';

import './badgesgroupsecondary.css';


const BadgesGroupSecondary = props => {
    const getPath = window.location.pathname;
    // console.log(getPath);
    const openPage = (evt, cityName) =>{
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontendetail");
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
    return (
        <>
        <Container id="badgesgroupSecondary">
            <Row>
                <Col>
                    <div className="scrollmenu">
                        <div id="childscrollSecondary" >
                            {props.store.map((data)=>{
                                return(
                                    // data.link===getPath ?
                                    // <MyBadge variant="primary">{data.name}</MyBadge>
                                    // : <LinkBadge href={data.link}>
                                    <MyBadgeGray variant="primary" className="tablinksbadges" onClick={(e)=>{openPage(e,data.idContent)}}>
                                        {data.name}
                                    </MyBadgeGray>  
                                    //   </LinkBadge>      
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

BadgesGroupSecondary.propTypes = {
    name : PropTypes.object,
}

export default BadgesGroupSecondary;