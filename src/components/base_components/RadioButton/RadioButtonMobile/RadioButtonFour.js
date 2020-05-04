import React, { Component, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './radioButtonFour.css';
import { Container, Row, Col } from 'react-bootstrap';

const RadioButtonFour = props => {
    const [icon,setIcon]=useState('');
    return (
        <>
            <Container id="radioFourid">
                <div className="radio-toolbar">
                    <Row><Col className="radioTitle">Pilih Jenjang Pendidikan</Col></Row>
                    <Row>
                        <Col className="bsjp" xs={6}>
                            <Input 
                                type="radio" id="inputsd" 
                                name="radioFruit" value="apple" 
                                value="sd"
                                onClick={props.onClick}
                                onChange={()=>{setIcon('sd')}} 
                            />
                            <label htmlFor="inputsd" >
                                <div>
                                    <FontAwesome name={icon === 'sd' ? 'check-circle' : "circle-o"} color="black" size={24} />
                                    <div>SD {"&"} MI</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjp" xs={6} style={{paddingLeft: '5px'}}>
                            <Input 
                                type="radio" id="inputSMP" 
                                name="radioFruit" 
                                value="smp" 
                                onClick={props.onClick}
                                onChange={()=>{setIcon('smp')}} />
                            <label htmlFor="inputSMP" >
                                <div>
                                    <FontAwesome name={icon === 'smp' ? 'check-circle' : "circle-o"} color='black' size={24} />
                                    <div>SMP {"&"} MTs</div>
                                </div>
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="bsjp" xs={6}>
                            <Input 
                                type="radio" 
                                id="inputSMA" 
                                name="radioFruit" 
                                value="sma" 
                                onClick={props.onClick}
                                onChange={()=>{setIcon('sma')}} 
                            />
                            <label htmlFor="inputSMA" >
                                <div>
                                    <FontAwesome name={icon === 'sma' ? 'check-circle' : "circle-o"} color='black' size={24} />
                                    <div>SMA/SMK {"&"} MA</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjp" xs={6} style={{paddingLeft: '5px'}}>
                            <Input 
                                type="radio" 
                                id="inputUniv" 
                                name="radioFruit" 
                                value="univ" 
                                onClick={props.onClick}
                                onChange={()=>{setIcon('univ')}} 
                            />
                            <label htmlFor="inputUniv" >
                                <div>
                                    <FontAwesome name={icon === 'univ' ? 'check-circle' : "circle-o"} color='black' size={24} />
                                    <div>Universitas</div>
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

RadioButtonFour.propTypes  = {
    onClick : PropTypes.func
}

export default RadioButtonFour


