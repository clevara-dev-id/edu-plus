import React, { Component, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col, Toast } from 'react-bootstrap';

const ToastMobile = props => {
    const [show, setShow] = useState(true);
        return (
        <>
            
            {(props.storeToast) ?
            <Container>
                <Row>
                    <Col>
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="mr-auto">{props.storeToast.title}</strong>
                            </Toast.Header>
                            <Toast.Body>{props.storeToast.message}</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
            </Container> : ""
            
            }
            
        </>
    );

}

export default ToastMobile;