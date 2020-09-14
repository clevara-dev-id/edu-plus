import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const TitleDropDownList = props => {
    return (
        <>
            <Container id="dropdownfilter">
                <Row>
                    <Col>
                        <TitleDiv>{props.name}</TitleDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleDiv = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.001em;

    color: #000000;
`;

TitleDropDownList.propTypes = {
    name : PropTypes.string
}

export default TitleDropDownList;