import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './linecomponentsdesktop.css';

const LineComponentsDesktop = props => {
    return (
        <>
            <Container id="lineComponentsDesktopContainer">
                <Row>
                    <Col>
                        <DivLine {...props} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivLine = styled.div(
    props => ({
        border       : props.border ? props.border : "1px solid #F5F5F5",
        marginTop    : props.marginTop ? props.marginTop : "10px",
        marginBottom : props.marginBottom ? props.marginBottom : "10px"
    })
);

LineComponentsDesktop.propTypes = {
    marginTop    : PropTypes.string,
    marginBottom : PropTypes.string
}

export default LineComponentsDesktop;