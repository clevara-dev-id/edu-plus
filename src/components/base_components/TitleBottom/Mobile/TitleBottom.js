import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import './titlebottom.css'

const TitleBottom = props => {
    return (
        <>
            <Container id="bottomtitle">
                <Row>
                    <Col xs={1}>
                        <H5Styled className="titlestyle">{props.name}
                            <LinkRegister href={props.link}>{props.namelink}</LinkRegister>
                        </H5Styled>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const H5Styled = styled.h5`
    width: 342px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px !important;
    line-height: 19px;
    text-align: center;

    /* identical to box height */
    letter-spacing: 0.005em;

    /* Black */
    color: #222222;
`;

const LinkRegister = styled.a`
    font-style: normal;
    font-weight: normal;
    font-size: 16px !important;
    line-height: 19px;
    margin-left: 5px;

    /* identical to box height */
    letter-spacing: 0.005em;

    /* Black */
    color: #3273DC;
    &:hover{
        text-decoration: none;
        cursor:pointer;
        color: #3273DC;
    }
`;

export default TitleBottom;