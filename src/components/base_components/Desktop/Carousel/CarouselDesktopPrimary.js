import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carouseldesktopprimary.css"

import logoeduplus from '../../../asset/logo/eduplusheader.svg';
import Button from '../Button/PrimaryButtonDesktop';

import '../Icon/Icon'

import { Container, Row, Col, Badge } from 'react-bootstrap';
const CarouselDesktopPrimary = props => {
    const settings = {
        // className: "center",
        // centerMode: true,
        centerPadding: "60px",
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 3,
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
            <Container id="CarouselDesktopPrimaryContainer">
                <Row>
                    <Col>
                        <Slider {...settings} className="carouselDesktopPrimarySlider">
                            {props.store.map((data)=>{
                                return (
                                    <div className="carouselDesktopPrimaryImage" >
                                        <img src={data.image} />
                                    </div>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const DivLogo = styled.div`
    margin-top: 63px;
    text-align: center;
    padding-right: 15px;
    padding-left: 15px;
    text-align: center;
`;

const DivText = styled.div`
    min-width: 624px;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
    margin-top: 36px;
    padding-right: 15px;
    padding-left: 15px;

    /* or 137% */
    text-align: center;

    /* Gray 6 */
    color: #F2F2F2;
`;

const DivButton = styled.div`
    margin-top: 56px;
    // padding-right: 15px;
    // padding-left: 15px;
    // width: 227px;
`;


CarouselDesktopPrimary.propTypes = {
    store : PropTypes.object
}

export default CarouselDesktopPrimary;