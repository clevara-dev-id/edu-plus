import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Icon from 'react-web-vector-icons';

import './Icon';
import './mobileiconwithtitle.css';

const MobileIconWithTitle = props => {
    return (
        <>
            <Container id="mobileIconWithTitleContainer">
                <Row>
                    <Col xs={2}>
                        <DivIcon>
                            <Icon  
                                name={props.icon ? props.icon : "book"} 
                                color={props.iconColor ? props.iconColor : "#1A6EB2"} 
                                font={props.fontFamily ? props.fontFamily : "Feather"} 
                                size={props.size ? props.size : 16} 
                            />
                        </DivIcon>
                    </Col>
                    <Col xs={10} >
                        <DivIcon><NameItem>{props.name}</NameItem></DivIcon>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivIcon = styled.div`
    text-align : left ;
`;

const NameItem = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */
    letter-spacing: 0.015em;
    text-transform: capitalize;
    color: #242424;
`;

MobileIconWithTitle.propTypes = {
    name       : PropTypes.string,
    icon       : PropTypes.string,
    iconColor  : PropTypes.string,
    fontFamily : PropTypes.string
}

export default MobileIconWithTitle;