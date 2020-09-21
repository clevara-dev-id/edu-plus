import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import imageLoading from '../../../asset/images/Header/Jumbotron.svg';
import './loadingcomponents.css'

const LoadingComponents = props => {
    return (
        <>
            <Container id="loadingComponentsContainer">
                <Row>
                    {/* {props.store.map((data)=>{
                        return( */}
                        <Col>
                            <img src={imageLoading} />
                        </Col>
                        {/* ); */}
                    {/* })} */}
                </Row>
            </Container>
        </>
    );
}

const CardTitle = styled.h3`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0125em;
    text-transform: uppercase;

    color: #FFFFFF;
`;
const CardCount = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    text-align: left;

    color: #FFFFFF;
`;

const BottomStyle = styled.div`
    min-height: 83%;
`;

LoadingComponents.propTypes = {
    store : PropTypes.object
}

export default LoadingComponents;