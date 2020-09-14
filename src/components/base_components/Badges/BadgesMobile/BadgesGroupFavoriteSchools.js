import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

import './badgesgroupfavoriteschools.css';


const BadgesGroupFavoriteSchools = props => {
    // const getPath = window.location.pathname;
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

    const setHashtag =async(idBadges)=>{
        await idBadges !== undefined ? window.location.href = `#${idBadges}` : window.location.href = '#default';
    }
    $(document).ready(function(){
        if(window.location.hash===""){
            document.getElementById("defaultOpenBadges").click();  
        }
    })
    return (
        <>
        <Container id="badgesgroupFavoriteSchools">
            <Row>
                <Col>
                    <div className="scrollmenuFavoriteSchools">
                        <div id="childscrollFavoriteSchools" >
                            {props.store.map((data)=>{
                                return(
                                    props.store[0].name === data.name ?
                                    <MyBadgeGray id="defaultOpenBadges" 
                                        className="tablinksbadges" 
                                        onClick={(e)=>{openPage(e,data.idContent); setHashtag(data.idBadges);}}>
                                        {data.name}
                                    </MyBadgeGray>
                                    :
                                    <MyBadgeGray className="tablinksbadges" onClick={(e)=>{openPage(e,data.idContent); setHashtag(data.idBadges);}}>
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

const MyBadgeGray = styled.span`
    width: auto;
    height: 39px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #B5B5B5;
    background: #F5F5F5;
    border-radius: 36px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 10px;
    padding-bottom: 7px;
    margin-right: 9px;

    display: inline-block;
    white-space: nowrap;
    vertical-align: baseline;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
`;

BadgesGroupFavoriteSchools.propTypes = {
    store : PropTypes.object,
}

export default BadgesGroupFavoriteSchools;