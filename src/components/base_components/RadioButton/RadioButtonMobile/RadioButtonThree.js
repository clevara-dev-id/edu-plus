import React, { Component, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './radioButtonThree.css';
import { Container, Row, Col } from 'react-bootstrap';

const RadioButtonThree = props =>{  
    const [icon,setIcon]=useState('');
    return(
        <>
            <Container id="radioThreeid">
                <div className="radio-toolbarThree">
                    <Row><Col className="radioTitle">Filter Status Sekolah</Col></Row>
                    <Row>
                        <Col className="bsjp" xs={4}>
                            <Input 
                                type="radio" id="inputnegeri" 
                                name="radioThreeMobile" value="apple" 
                                value="negeri"
                                onClick={props.onClick}
                                onChange={()=>{setIcon('negeri')}} 
                            />
                            <label htmlFor="inputnegeri" >
                                <div>
                                    <FontAwesome name={icon === 'negeri' ? 'check-circle' : "circle-o"} color="black" size={24} />
                                    <div>Negeri</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjp" xs={4} style={{paddingLeft : "5px", paddingRight : "5px"}}>
                            <Input 
                                type="radio" id="inputswasta" 
                                name="radioThreeMobile" 
                                value="swasta" 
                                onClick={props.onClick}
                                onChange={()=>{setIcon('swasta')}} />
                            <label htmlFor="inputswasta" >
                                <div>
                                    <FontAwesome name={icon === 'swasta' ? 'check-circle' : "circle-o"} color='black' size={24} />
                                    <div>Swasta</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjp" xs={4} style={{paddingLeft : "0px"}} >
                            <Input 
                                type="radio" 
                                id="inputkursus" 
                                name="radioThreeMobile" 
                                value="kursus" 
                                onClick={props.onClick}
                                onChange={()=>{setIcon('kursus')}} 
                            />
                            <label htmlFor="inputkursus" >
                                <div>
                                    <FontAwesome name={icon === 'kursus' ? 'check-circle' : "circle-o"} color='black' size={24} />
                                    <div>Kursus</div>
                                </div>
                            </label>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

const Input = styled.input`
    bgcolor : red;
`;

RadioButtonThree.propTypes  = {
    onClick : PropTypes.func
}

export default RadioButtonThree;



