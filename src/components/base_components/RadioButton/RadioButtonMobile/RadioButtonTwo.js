import React, { Component, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import '../../Icon/Mobile/Icon'
import './radioButtonTwo.css';
import { Container, Row, Col } from 'react-bootstrap';

const RadioButtonTwo = props =>{  
    const [icon,setIcon]=useState('');
    return(
        <>
            <Container id="radioTwoid">
                <div className="radio-toolbarTwo">
                    <Row><Col className="radioTitle">Status Sekolah</Col></Row>
                    <Row>
                        <Col className="bsjp2" xs={4}>
                            <Input 
                                type="radio" id="inputnegeri" 
                                name="radioTwoMobile" 
                                value="negeri"
                                onClick={props.onClick}
                                onChange={()=>{setIcon('negeri')}} 
                            />
                            <label htmlFor="inputnegeri" >
                                <div>
                                    <FontAwesome name={icon === 'negeri' ? 'check-circle' : "circle-o"} size={24} color="black" />
                                    <div>Negeri</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjp2" xs={4} style={{paddingLeft : "5px", paddingRight : "5px"}} id="midConten">
                            <Input 
                                type="radio" id="inputswasta" 
                                name="radioTwoMobile" 
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
                        <Col className="bsjp2" xs={4} style={{paddingLeft : "0px"}} >
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

RadioButtonTwo.propTypes  = {
    onClick : PropTypes.func
}

export default RadioButtonTwo;



