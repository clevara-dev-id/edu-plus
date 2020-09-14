import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
// import styled from 'styled-components';

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

BreadCrumbMobile.propTypes = {
    store : PropTypes.object}

export default BreadCrumbMobile;