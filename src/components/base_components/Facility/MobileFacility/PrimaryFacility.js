import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';
import "./facility.css"

import Item1 from "../../Icon/Mobile/MobileIcon";

// const data = [
//     {iconname:"snowflake-o", name: "Air conditioning"}, 
//     {iconname:"desktop", name: "Lab. Komputer"},
//     {iconname:"wifi", name: "Akses Internet"}, 
// ]

const PrimaryFacility = props => {
    return (
        <>
            <Container id="primaryFacilityContainer">
                    <Row>
                        <Col><TitleFasilitas>{props.title}</TitleFasilitas></Col>
                    </Row>
                    <Row>
                        {props.store.map((data)=>{
                         return(
                                <Col xs={4}>
                                    <Item1 
                                        icon={data.iconname} 
                                        iconColor="#3273DC" 
                                        name={data.name} 
                                        fontFamily={data.fontFamily} 
                                    />
                                </Col>
                            );
                        })}
                    </Row>
            </Container>
        </>
    );
}

const TitleFasilitas = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    color: #0A0A0A;
    text-align: left;
    margin-bottom: 12px;
`;

PrimaryFacility.propTypes = {
    title       : PropTypes.string,
    store       : PropTypes.object,
}

export default PrimaryFacility;