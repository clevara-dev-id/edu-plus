import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from 'react-web-vector-icons';
// import $ from 'jquery';

import '../../Icon/Mobile/Icon'
import './radiobuttontwotab.css';
import { Container, Row, Col } from 'react-bootstrap';

const RadioButtonTwoTab = props =>{  
    const [icon,setIcon]=useState('negeri');
    const openPage = (evt, cityName) =>{
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontenRadioButtonRegister");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
    }
    return(
        <>
            <Container id="radioButtonTabContainer">
                <div className="radio-toolbarTwo">
                    <Row>
                        <Col className="bsjp2" xs={6}>
                            <Input 
                                type="radio" 
                                id="inputSchools" 
                                name="radioTwoTabMobile" 
                                value="schools"
                                onClick={(e)=>{openPage(e,props.store[0].idContent)}}
                                onChange={()=>{setIcon('negeri')}}
                                defaultChecked
                            />
                            <label htmlFor="inputSchools" >
                                <div>
                                    <Icon 
                                        font="FontAwesome"
                                        name={icon === 'negeri' ? 'check-circle' : "circle-o"} 
                                        size={24} 
                                        color="black" 
                                    />
                                    <div>{props.store[0].name}</div>
                                </div>
                            </label>
                        </Col>
                        <Col className="bsjp2" xs={6} style={{paddingLeft : "5px", paddingRight : "5px"}} id="midConten">
                            <Input 
                                type="radio" id="inputTraining" 
                                name="radioTwoTabMobile" 
                                value="training" 
                                onClick={(e)=>{openPage(e,props.store[1].idContent)}}
                                onChange={()=>{setIcon('swasta')}} 
                                />
                            <label htmlFor="inputTraining" >
                                <div>
                                    <Icon 
                                        font="FontAwesome"
                                        name={icon === 'swasta' ? 'check-circle' : "circle-o"} 
                                        size={24} 
                                        color="black" 
                                    />
                                    <div>{props.store[1].name}</div>
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

RadioButtonTwoTab.propTypes  = {
    onClick : PropTypes.func
}

export default RadioButtonTwoTab;




