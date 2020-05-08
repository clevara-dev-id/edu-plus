import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./jumbotronWithcarousel.css"

import logoeduplus from '../../../asset/logo/eduplusheader.svg';
import Button from '../../Button/ButtonMobile/ButtonSecondary';

import { Container, Row, Col, Badge } from 'react-bootstrap';
const JumbotronWithCarousel = props => {
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
              <ul style={{ margin: "0px", paddingLeft: "0px" }}> {dots} </ul>
            </div>
          ),
        };
    return (
        <>
            <Container id="jumbotronMobileCarousel">
                <Row>
                    <Col>
                        <Slider {...settings} className="mobileJumbotronCarouselSlider">
                            <div className="firstCarouselImagecssJumbotron" >
                                <Row>
                                    <Col style={{display:"ruby"}}>
                                        <DivLogo><img src={logoeduplus} width="138px" height="52px" /></DivLogo>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DivText>{props.text}</DivText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DivButton id="jumbotronMobileButton">
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
                            </div>
                            {props.store.map((data)=>{
                                return (
                                    <div className="carouselImagecssJumbotron" >
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
    margin-top: 60px;
    text-align: center;
    padding-right: 15px;
    padding-left: 15px;
    text-align: center;
`;

const DivText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-top: 24px;
    text-align: center;
    padding-right: 15px;
    padding-left: 15px;

    /* or 137% */
    display: flex;
    align-items: center;
    text-align: center;

    /* Gray 6 */
    color: #F2F2F2;
`;

const DivButton = styled.div`
    margin-top: 60px;
    padding-right: 15px;
    padding-left: 15px;
    // width: 227px;
`;


JumbotronWithCarousel.propTypes = {
    store : PropTypes.object
}

export default JumbotronWithCarousel;