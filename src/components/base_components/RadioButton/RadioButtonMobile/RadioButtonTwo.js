import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from 'react-web-vector-icons';
// import $ from 'jquery';

import '../../Icon/Mobile/Icon'
import './radioButtonTwo.css';
import { Container, Row, Col } from 'react-bootstrap';

const RadioButtonTwo = props =>{  
    const [icon,setIcon]=useState('');
    return(
        <>
            <Container id="radioTwoMobileid">
                <div className="radio-toolbarTwo">
                    <Row><Col className="radioTitle">{props.title}</Col></Row>
                    <Row>
                        <Col className="bsjpTwo" xs={4}>
                            <Input 
                                type="radio" id="inputnegeri" 
                                name="radioTwoMobile" 
                                value="negeri"
                                onClick={props.onClick}
                                onChange={()=>{setIcon('negeri')}} 
                            />
                            <label htmlFor="inputnegeri" >
                                <div>
                                    <Icon 
                                        font="FontAwesome"
                                        name={icon === 'negeri' ? 'check-circle' : "circle-o"} 
                                        size={24} 
                                        color="black" 
                                    />
                                    <div>Negeri</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjpTwo" xs={5} style={{paddingLeft : "5px", paddingRight : "5px"}} id="midConten">
                            <Input 
                                type="radio" id="inputswasta" 
                                name="radioTwoMobile" 
                                value="swasta" 
                                onClick={props.onClick}
                                onChange={()=>{setIcon('swasta')}} />
                            <label htmlFor="inputswasta" >
                                <div>
                                    <Icon 
                                        font="FontAwesome"
                                        name={icon === 'negeri' ? 'check-circle' : "circle-o"} 
                                        size={24} 
                                        color="black" 
                                    />
                                    <div>Swasta</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjpTwo" xs={2} style={{paddingLeft : "0px"}} >
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



