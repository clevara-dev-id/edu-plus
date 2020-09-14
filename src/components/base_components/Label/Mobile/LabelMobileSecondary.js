import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import './labelmobilesecondary.css'
const LabelMobileComponents = props => {
    return (
        <>
            <Container id="labelMobileSecondaryContainer">
                <Row>
                    <Col>
                        <DivLine><H5>{props.label}</H5></DivLine>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivLine = styled.div`
    height: 48px;
    background: #ffffff;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.0125em;
    text-transform: capitalize;
    border: .05px solid rgba(0, 0, 0, 0.1);

    /* danger */
    color: #FF3860;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
`;

const H5 = styled.h5`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.0125em;
    text-transform: capitalize;
    padding-top: 13px;
    

    /* darkblue-eduplus */
    color: #1A6EB2;
`;

LabelMobileComponents.propTypes = {
    label : PropTypes.string,
}

export default LabelMobileComponents;