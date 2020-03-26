import React, { Component, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

const TitlePage = props => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={1}>
                    <HeaderDiv>    
                        <h1>{props.name}</h1>
                    </HeaderDiv>
                    </Col>
                </Row>
            </Container>
        </>
    );

}
const HeaderDiv = styled.div(
    props => ({
        width       : props.width ? props.width : "227px",
        textAlign   : props.textAlign ? props.textAlign : "Left",
        paddingLeft : "0px"
})) 

TitlePage.propTypes = {
    name        : PropTypes.string,
    width       : PropTypes.string,
    textAlign   : PropTypes.string
};

export default TitlePage;