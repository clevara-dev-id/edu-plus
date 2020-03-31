import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Badge } from 'react-bootstrap';

import './singlebadges.css'

const SingleBadges = props => {
    return (
        <>
        <Container id="singlebadges">
            <Row>
                <Col className="badgeclasssingle">
                    <Badge variant="primary">{props.name}</Badge> 
                </Col>
            </Row>
        </Container>
        </>
    );
}

SingleBadges.propTypes = {
    name : PropTypes.object,
}

export default SingleBadges;