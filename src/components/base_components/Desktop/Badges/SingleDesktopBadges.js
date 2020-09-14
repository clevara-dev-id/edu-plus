import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
// import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import './singledesktopbadges.css';
import '../Icon/Icon'


const SingleDesktopBadges = props => {
    // console.log(getPath);
    const openPage = (evt, cityName) =>{
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontendetaildesktop");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinksbadges");
        // console.log(tablinks);
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" activeClassBadgesDesktop", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " activeClassBadgesDesktop";
    }
    
    // useEffect(()=>{
    $(document).ready(function(){
        document.getElementById("defaultOpenBadges").click();  
    })
    // });

    return (
        <>
        <Container id="singleDesktopBadgesContainer">
            <Row>
                <Col className="badgescol">
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
            </Row>
        </Container>
        </>
    );
}

const MyBadgeGray = styled.span`
    width: auto;
    height: 39px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #B5B5B5;
    background: #F5F5F5;
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
    
`;

SingleDesktopBadges.propTypes = {
    name : PropTypes.object,
}

export default SingleDesktopBadges;