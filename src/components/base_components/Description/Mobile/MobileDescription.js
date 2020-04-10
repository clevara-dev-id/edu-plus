import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './mobiledescription.css'

import { Container, Row, Col } from 'react-bootstrap';

const MobileDescription = props => {
    return (
        <>
            <Container id="descriptionmobile">
                {props.store.map((data)=>{
                    return(
                        <GroupDescription>
                            <Row>
                                <Col>
                                    <TitleDescription>{data.title}</TitleDescription>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FillDescription>{data.description}</FillDescription>
                                </Col>
                            </Row>
                        </GroupDescription>
                    );
                })}
            </Container>
        </>
    );
}

const GroupDescription = styled.div`
    margin-bottom: 16px;
    margin-right: 15px;
`;

const TitleDescription = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: justify;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.001em;

    /* grey light */
    color: #B5B5B5;
`;

const FillDescription = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 3px;
    text-align: justify;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;

    /* grey dark */
    color: #4A4A4A;
`;

MobileDescription.propTypes = {
    store : PropTypes.object
}

export default MobileDescription;