import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Icon from 'react-web-vector-icons';
// import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './Icon';
// import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
// import FeatherIcon from 'react-native-vector-icons/dist/Feather';

const MobileIcon = props => {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{display: "block ruby", alignSelf: "center"}}>
                        <ItemTag><Icon name={props.icon} color={props.iconColor} font={props.fontFamily} size={23} /></ItemTag>
                        {/* <Feather name="arrow-down-circle" size={30} color="#404" /> */}
                        {/*  */}
                    </Col>
                <Row>
                </Row>
                    <Col>
                        <NameItem>{props.name}</NameItem>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const ItemTag = styled.div`
    width: 56px;
    height: 56px;
    padding-top: 18px;
    /*padding-bottom:16px;*/
    margin-top: 10px;
    margin-bottom: 10px;
    
    /* white */
    border: 1px solid rgba(0, 0, 0, 0.08);
    /* shadow-1 */
    background: #FFFFFF;

    /* shadow-1 */
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); */
    border-radius: 8px;
`;

const NameItem = styled.div`
    color : #4A4A4A;
    font-style: normal;
    font-weight: normal;
    font-size: 14px !important;
    line-height: 17px;
    text-align: -moz-center;
    letter-spacing: 0.0025em;
`;

MobileIcon.propTypes = {
    name       : PropTypes.string,
    icon       : PropTypes.string,
    iconColor  : PropTypes.string,
    fontFamily : PropTypes.string
}

export default MobileIcon;