import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import styled from 'styled-components';

import './breadcrumbmobile.css'

const BreadCrumbMobile = props => {
    return (
        <>
            <Container id="breadCrumbMobileContainer">
                <Row>
                    <Col>
                        <Breadcrumb>
                        {props.store.map((data, index)=>{
                            return(
                                ((props.store.length-1)!==index) ?
                                <Breadcrumb.Item href={data.link}>{data.name}</Breadcrumb.Item> :
                                <Breadcrumb.Item active>{data.name}</Breadcrumb.Item>
                            );
                        })}     
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleDiv = styled.h5`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: left;   
    letter-spacing: 0px;

    /* darkblue-eduplus */
    color: #1A6EB2;

`;

BreadCrumbMobile.propTypes = {
    store : PropTypes.object}

export default BreadCrumbMobile;