import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';
import "./titlepagewithaddress.css";

import LineComponents from '../../LineComponents/Mobile/LineComponents';

const TitlePageWithAddressDesktop = props =>{
    const readmoreFunction= () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
        //   btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
        //   btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
          $("#myBtn").hide();
        }
    }
    return (
        <>
            <Container id="titlePageWithAddressDesktopContainer">
                <Row>
                    <Col>
                        
                        <TitleReadmore>{props.title}</TitleReadmore>
                        <ReadmoreDiv>
                            <ContenReadmore>{props.text}
                            </ContenReadmore>
                        </ReadmoreDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleReadmore = styled.h3`
    text-align: left;
    max-width: 375px;
    margin-bottom : 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    /* dark */
    color: #363636;
`;

const ReadmoreDiv = styled.div`
    text-align: justify;
    
`;
const ContenReadmore = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
`;
const ButtonReadmore = styled.a`
    color : #3273DC !important;
    &:hover{
        cursor: pointer !important;
    }
`;

TitlePageWithAddressDesktop.propTypes = {
    title : PropTypes.string,
    text  : PropTypes.string
}

export default TitlePageWithAddressDesktop;