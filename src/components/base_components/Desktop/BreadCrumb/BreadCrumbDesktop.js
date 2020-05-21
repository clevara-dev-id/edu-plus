import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import styled from 'styled-components';

import './breadcrumbdesktop.css'

const BreadCrumbDesktop = props => {
    return (
        <>
            <Container id="breadCrumbDesktopContainer">
                <Row>
                    <Col>
                        <Breadcrumb >
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

BreadCrumbDesktop.propTypes = {
    store : PropTypes.object}

export default BreadCrumbDesktop;