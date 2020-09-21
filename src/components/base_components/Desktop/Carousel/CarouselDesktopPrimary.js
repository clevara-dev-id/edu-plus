import React, { useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import PopUpPromoDetailDesktop from '../CardPromo/PopUpPromoDetailDesktop';


// import styled from 'styled-components';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carouseldesktopprimary.css"

// import logoeduplus from '../../../asset/logo/eduplusheader.svg';
// import Button from '../Button/PrimaryButtonDesktop';


import '../Icon/Icon'

import { Container, Row, Col } from 'react-bootstrap';
const CarouselDesktopPrimary = props => {
    const [modalShow, setModalShow] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');

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
                                        <img 
                                            className="classNameForImageCraousel"
                                            src={data.image} 
                                            alt=" " 
                                            onClick={()=>{
                                                    setModalShow(true);
                                                    setModalImage(data.image);
                                                    setModalTitle(data.titleCard);
                                                    setModalDescription(data.descrip);
                                                }
                                            }
                                        />
                                    </div>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <PopUpPromoDetailDesktop
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            sourceImageModal={modalImage}
                            TitleCard={modalTitle}
                            descripModal={modalDescription}
                    />
                    </Col>
                </Row> */}
            </Container>
            <PopUpPromoDetailDesktop
                show={modalShow}
                onHide={() => setModalShow(false)}
                sourceImageModal={modalImage}
                TitleCard={modalTitle}
                descripModal={modalDescription}
            />
        </>
    )
}



CarouselDesktopPrimary.propTypes = {
    store : PropTypes.object
}

export default CarouselDesktopPrimary;