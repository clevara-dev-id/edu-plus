import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./jumbotrondesktopblue.css"

import logoeduplus from '../../../asset/logo/eduplusheader.svg';
import ImageJumbotron from '../../../asset/images/Header/Jumbotron.svg';
import Button from '../Button/PrimaryButtonDesktop';

import { Container, Row, Col, Badge } from 'react-bootstrap';
const JumbotronDesktopBlue = props => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                bottom: "0px"
              }}
            >
              <ul style={{ margin: "0px", paddingLeft: "0px"}}> {dots} </ul>
            </div>
          ),
        };
    return (
        <>
            <Container id="jumbotronDesktopBlueContainer">
                <Row>
                    <Col lg={5}>
                        <Row>
                            <Col>
                                <DivLogo><img src={logoeduplus} width="271px" height="102px" /></DivLogo>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <DivText>{props.text}</DivText>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <DivButton id="jumbotronDesktopButton">
                                    <Button
                                        color="#1A6EB2"
                                        name="CARI SEKOLAH"
                                        width="227px"
                                        fontSize="15px"
                                        onClick={props.onClickHeader}
                                    />
                                </DivButton>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={7} style={{textAlign:"right"}}>
                        <DivImage>
                            <img src={ImageJumbotron} width="373px" height="365px" />
                        </DivImage>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const DivImage = styled.div`
    margin-top: 55px;
    margin-right: 70px;
`;

const DivLogo = styled.div`
    margin-top: 71px;
    text-align: left;
    // padding-right: 15px;
    // padding-left: 15px;
`;

const DivText = styled.div`
    width: 406px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin-top: 36px;
    // padding-right: 15px;
    // padding-left: 15px;

    /* or 137% */
    text-align: justify;

    /* Gray 6 */
    color: #F2F2F2;
`;

const DivButton = styled.div`
    margin-top: 56px;
    text-align: left;
    // padding-right: 15px;
    // padding-left: 15px;
    // width: 227px;
`;


JumbotronDesktopBlue.propTypes = {
    store : PropTypes.object
}

export default JumbotronDesktopBlue;