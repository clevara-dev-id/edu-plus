import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import './mobilehomepagetitle.css'

const MobileHomePageTitle = props => {
    return (
        <>
            <Container id="mobileHomePageTitleContainer">
                <Row>
                    <Col>
                        <TitleDiv>{props.name}</TitleDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleDiv = styled.h5(
    props => ({
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "21px",
    textAlign: "left",  
    letterSpacing: "0px",

    color: "#242424",
    })
);

MobileHomePageTitle.propTypes = {
    name : PropTypes.string
}

export default MobileHomePageTitle;