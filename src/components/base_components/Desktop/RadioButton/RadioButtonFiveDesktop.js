import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from 'react-web-vector-icons';
// import $ from 'jquery';

import '../Icon/Icon';
import './radiobuttonfivedesktop.css';
import { Container, Row, Col } from 'react-bootstrap';

const RadioButtonFiveDesktop = props => {
    const [icon,setIcon]=useState('');
    return (
        <>
            <Container id="radioButtonFiveDesktopContainer">
                <div className="radio-toolbar">
                    <Row><Col className="radioTitle">Pilih Jenjang Pendidikan</Col></Row>
                    <Row>
                        <Col className="bsjpFive" lg={3}>
                            <Input 
                                type="radio" id="inputsd" 
                                name="radioFruit" value="apple" 
                                value="sd"
                                onClick={props.onClick}
                                onChange={()=>{setIcon('sd')}} 
                            />
                            <label htmlFor="inputsd" >
                                <div>
                                    <Icon 
                                        font="FontAwesome"
                                        name={icon === 'sd' ? 'check-circle' : "circle-o"} 
                                        color="black" 
                                        size={24} 
                                    />
                                    <div>SD {"&"} MI</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjpFive" lg={3}>
                            <Input 
                                type="radio" id="inputSMP" 
                                name="radioFruit" 
                                value="smp" 
                                onClick={props.onClick}
                                onChange={()=>{setIcon('smp')}} />
                            <label htmlFor="inputSMP" >
                                <div>
                                    <Icon 
                                        font="FontAwesome"
                                        name={icon === 'smp' ? 'check-circle' : "circle-o"} 
                                        color='black' size={24} 
                                    />
                                    <div>SMP {"&"} MTs</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjpFive" lg={3}>
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
                                    <Icon
                                        font="FontAwesome"
                                        name={icon === 'sma' ? 'check-circle' : "circle-o"} 
                                        color='black' 
                                        size={24} 
                                    />
                                    <div>SMA/SMK {"&"} MA</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjpFive" lg={3}>
                            {/* <Input 
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
                            </label> */}
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col className="bsjpFive" lg={3}>
                            <Input 
                                type="radio" 
                                id="inputKursus" 
                                name="radioFruit" 
                                value="kursus" 
                                onClick={props.onClick}
                                onChange={()=>{setIcon('kursus')}} 
                            />
                            <label htmlFor="inputKursus" >
                                <div>
                                    <FontAwesome name={icon === 'kursus' ? 'check-circle' : "circle-o"} color='black' size={24} />
                                    <div>Tempat Kursus</div>
                                </div>
                            </label>
                        </Col>
                    </Row> */}
                </div>
            </Container>
        </>
    );  
}

const Input = styled.input`
`;

RadioButtonFiveDesktop.propTypes  = {
    onClick : PropTypes.func
}

export default RadioButtonFiveDesktop


