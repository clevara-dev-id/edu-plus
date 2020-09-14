import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Icon from 'react-web-vector-icons';

import './Icon';
import './desktopiconwithtitle.css';

const DesktopIconWithTitle = props => {
    return (
        <>
            <Container id="desktopIconWithTitleContainer">
                <Row>
                    <Col>
                        <DivIcon>
                            <Icon  
                                name={props.icon ? props.icon : "book"} 
                                color={props.iconColor ? props.iconColor : "#1A6EB2"} 
                                font={props.fontFamily ? props.fontFamily : "Feather"} 
                                size={props.size ? props.size : 16} 
                            />
                            <NameItem>{props.name}</NameItem>
                        </DivIcon>
                        <DivIcon>
                        </DivIcon>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const DivIcon = styled.div`
    text-align : left ;
`;

const NameItem = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-left:15px;

    /* identical to box height */
    letter-spacing: 0.015em;
    text-transform: capitalize;
    color: #242424;
`;

DesktopIconWithTitle.propTypes = {
    name       : PropTypes.string,
    icon       : PropTypes.string,
    iconColor  : PropTypes.string,
    fontFamily : PropTypes.string
}

export default DesktopIconWithTitle;