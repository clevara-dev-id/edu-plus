import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carouselslider.css"

import dataImage1 from '../../../asset/images/CarouselSlider/slider1.png'
import dataImage2 from '../../../asset/images/CarouselSlider/slider2.png'

import { Container, Row, Col, Badge } from 'react-bootstrap';
const CarouselMobile = props => {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        arrows: false,
        focusOnSelect: true,
        // dotsClass: button__bar,
        };
    return (
        <>
            <Container id="mobilecarousel">
                <Row>
                    <Col>
                        <Slider {...settings}>
                            {props.store.map((data)=>{
                                return (
                                    <div className="carouselimagecss" >
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

CarouselMobile.propTypes = {
    store : PropTypes.object
}

export default CarouselMobile;