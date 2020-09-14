import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import './labeldesktopcomponents.css'
const LabelDesktopPrimary = props => {
    return (
        <>
            <Container id="labelDesktopComponentsContainer">
                <Row>
                    <Col>
                        <DivLine>{props.label}</DivLine>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivLine = styled.h6`
    width: 537px;
    background: #ffffff;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    justify-content: center;
    letter-spacing: 0.0125em;
    text-transform: capitalize;
    padding-top: 16px;
    padding-bottom: 15px;
    border: .05px solid rgba(0, 0, 0, 0.1);

    /* danger */
    color: #FF3860;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
`;

LabelDesktopPrimary.propTypes = {
    label : PropTypes.string,
}

export default LabelDesktopPrimary;