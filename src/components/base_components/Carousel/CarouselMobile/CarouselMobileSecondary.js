import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carouselmobilesecondary.css"

import { Container, Row, Col, Badge } from 'react-bootstrap';
const CarouselMobileSecondary = props => {
    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    return (
        <>
            <Container id="mobilecarouselsecondary">
                <Row>
                    <Col>
                        <Slider {...settings} className="mobilecarouselsecondaryslider">
                            {props.store.map((data)=>{
                                return (
                                    <div className="carouselimagecssSecondary" >
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

CarouselMobileSecondary.propTypes = {
    store : PropTypes.object
}

export default CarouselMobileSecondary;