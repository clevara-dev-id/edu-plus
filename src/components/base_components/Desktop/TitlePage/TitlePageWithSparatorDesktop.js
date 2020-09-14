import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import "./titlepagewithseparatordesktop.css";

const TitlePageWithSparatorDesktop = props => {
    return (
        <>
            <Container id="titleWithSeparatorDesktopContainer">
                <Row>
                    <Col>
                        <DivContent>{props.store.join(", ")}</DivContent>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivContent = styled.div`
    text-align: justify;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    
    /* or 143% */
    display: flex;
    align-items: center;
    letter-spacing: 0.0125em;
    
    /* grey light */
    color: #B5B5B5;
`;

TitlePageWithSparatorDesktop.propTypes ={
    name : PropTypes.string
}

export default TitlePageWithSparatorDesktop;