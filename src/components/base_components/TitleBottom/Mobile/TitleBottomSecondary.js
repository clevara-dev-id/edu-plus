import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import './titlebottomsecondary.css'

const TitleBottomSecondary = props => {
    return (
        <>
            <Container id="bottomtitlesecondarycontainer">
                <Row>
                    <Col xs={1}>
                        <H5Styled className="titlestyle">{props.name}
                            <LinkRegister href={props.link}>{props.namelink}</LinkRegister>{props.nameSecondary}
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
    font-size: 14px !important;
    line-height: 14px;
    word-wrap: break-word;
    letter-spacing: 0px;

    /* grey dark */
    color: #4A4A4A;
`;

const LinkRegister = styled.a`
    font-style: normal;
    font-weight: bold;
    /* identical to box height */
    // letter-spacing: 0.005em;

    /* Black */
    color: #3273DC;
    &:hover{
        text-decoration: none;
        cursor:pointer;
        color: #3273DC;
    }
`;

TitleBottomSecondary.propTypes = {
    name          : PropTypes.string,
    namelink      : PropTypes.string,
    link          : PropTypes.string,
    nameSecondary : PropTypes.string,
}

export default TitleBottomSecondary;