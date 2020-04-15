import React, { Component, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

const TitleDetail = props => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <H2>{props.name}</H2>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const H2 = styled.h2`
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    // display: flex;   
    word-wrap: break-word;

    color: #000000;
`;

TitleDetail.propTypes ={
    name : PropTypes.string
}

export default TitleDetail;