import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'react-web-vector-icons';

import '../Icon/Icon' 
import './desktopdescriptionwithicon.css'

const DesktopDescriptionWithIcon = props => {
    return(
        <>
            <Container id="desktopDescriptionWithIconContainer">
                {props.store.map((data)=>{
                    return(
                        <Row>
                            <Col>
                                <SecondTitileKontak>
                                    <span>
                                        <Icon  
                                            name={data.icon ? data.icon : "book"} 
                                            color={data.iconColor ? data.iconColor : "#1A6EB2"} 
                                            font={data.fontFamily ? data.fontFamily : "FontAwesome"} 
                                            size={data.size ? data.size : 16} 
                                        />
                                    </span>
                                    <BodyKontak>{data.name}</BodyKontak>
                                </SecondTitileKontak>
                            </Col>
                        </Row>
                    );
                })}
                
            </Container>
        </>
    );
}

const SecondTitileKontak = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    margin-bottom: 10px;

    /* identical to box height */
    letter-spacing: 0.0025em;
    /* grey dark */
    color: #000000
`;

const BodyKontak = styled.span`
    margin-left: 10px;
`;

DesktopDescriptionWithIcon.propTypes = {
    store : PropTypes.object
}

export default DesktopDescriptionWithIcon;