import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './jumbotrondesktop.css'

const JumbotronDesktop = props => {
    return (
        <>
            <Container id="jumbotronDesktopContainer">
                <Row>
                    <Col>
                        <Jumbotron>
                            <Col style={{textAlign:"left"}}>
                                <h1>Hello, world!</h1>
                                <p>
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                </p>
                                <p style={{marginTop:"25px"}}>
                                    <Button variant="primary">Learn more</Button>
                                </p>
                            </Col>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default JumbotronDesktop;