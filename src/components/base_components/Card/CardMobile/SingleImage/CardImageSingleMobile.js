import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import './cardimagesinglemobile.css'

const CardImageSingleMobile = props => {
    return (
        <>
            <Container id="cardImageMobileSingleContainer">
            {props.store.map((data)=>{
                return(
                    <Row>
                        <Col>
                            <Card className="text-white">
                                <Card.Img src={data.image} alt="Card image" height={189} />
                            </Card>
                        </Col>
                    </Row>
                  );
                })
            }
            </Container>
        </>
    );
}


CardImageSingleMobile.propTypes = {
    store : PropTypes.object
}

export default CardImageSingleMobile;