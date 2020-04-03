import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 

const LineComponents = props => {
    return (
        <>
            <Container id="lineComponents">
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
        border       : "1px solid #DBDBDB",
        marginTop    : props.marginTop ? props.marginTop : "10px",
        marginBottom : props.marginBottom ? props.marginBottom : "10px"
    })
);

LineComponents.propTypes = {
    marginTop    : PropTypes.string,
    marginBottom : PropTypes.string
}

export default LineComponents;