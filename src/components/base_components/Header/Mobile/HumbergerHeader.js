import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

// import logoeduplus from '../../../asset/logo/eduplusheader.svg';
import Button from '../../Button/ButtonMobile/ButtonSecondary'

import './humbergerheader.css';
import '../../Icon/Mobile/Icon';
import humbergerlogo from '../../../asset/logo/humbergerlogo.svg';

const HumbergerHeader = props => {
    const openNav = () => {
        console.log("button is running");
        document.getElementById("mySidenavhumberger").style.width = "100%";
    }
      
    const closeNav = () => {
        document.getElementById("mySidenavhumberger").style.width = "0";
    }
  
    return (
        <>
            <Container id="humbergerHeaderContainer" fluid>
                <Row>
                    <Col className="humbergerLogo">
                        <img width="64px" height="23px" src={humbergerlogo} />
                    </Col>
                    <Col className="humbergerbutton">
                        <a onClick={()=>{openNav()}}><Icon name="navicon" color="#ffffff" font="EvilIcons" size={28} /></a>
                    </Col>
                </Row>
                <Row> 
                    <Col>
                    <div id="mySidenavhumberger" className="sidenavHumberger">
                        <a href="javascript:void(0)" className="closebtn" onClick={()=>{closeNav()}}>&times;</a>
                        <a href="/">Home</a>
                        <a href="/contactus">Hubungi Kami</a>
                        <a href="/getaccess">Daftarkan Sekolah</a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

HumbergerHeader.propTypes = {
    onClickHeader : PropTypes.func,
    text          : PropTypes.string
}

export default HumbergerHeader;