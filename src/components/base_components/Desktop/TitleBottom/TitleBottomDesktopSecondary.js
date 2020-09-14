import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import './titlebottomdesktopsecondary.css'

const TitleBottomDesktopSecondary = props => {
    return (
        <>
            <Container id="bottomTitleDesktopSecondaryContainer">
                <Row>
                    <Col>
                        <H5Styled {...props} className="titlestyle">{props.name}
                            <LinkRegister href={props.link}>{props.namelink}</LinkRegister>{props.nameSecondary}
                        </H5Styled>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const H5Styled = styled.h5(
    props => ({
    width: props.width ? props.width : "342px",
    fontStyle: props.fontStyle ? props.fontStyle : "normal",
    fontWeight: props.fontWeight ? props.fontWeight: "normal",
    fontSize: props.fontSize ? props.fontSize : "14px !important",
    lineHeight: props.lineHeight ? props.lineHeight : "14px",
    letterSpacing: "0px",
    textAlign: props.textAlign ? props.textAlign : "center",

    /* grey dark */
    color: props.color ? props.color : "#4A4A4A",
    })
)

const LinkRegister = styled.a`
    font-style: normal;
    font-weight: bold;
    /* identical to box height */
    // letter-spacing: 0.005em;

    /* Black */
    color: #1A6EB2;
    &:hover{
        text-decoration: none;
        cursor:pointer;
        color: #1A6EB2;
    }
`;

TitleBottomDesktopSecondary.propTypes = {
    name          : PropTypes.string,
    namelink      : PropTypes.string,
    link          : PropTypes.string,
    nameSecondary : PropTypes.string,
    width         : PropTypes.string,
    fontStyle     : PropTypes.string,
    fontWeight    : PropTypes.string,
    fontSize      : PropTypes.string,
    lineHeight    : PropTypes.string,
    color         : PropTypes.string,
}

export default TitleBottomDesktopSecondary;