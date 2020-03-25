import React, { Component } from 'react';
import styled from 'styled-components';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../css/radioButtonFour.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class RadioButtonFour extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            counter: 0, 
            icon:'circle-o',
            iconSmp : 'circle-o',
            iconSma : 'circle-o',
            iconUniv : 'circle-o',
         };
        //this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = () => {
        document.getElementById("inputsd").checked === true ? this.setState({icon:"check-circle"}) : this.setState({icon:"circle-o"});
        document.getElementById("inputSMP").checked === true ? this.setState({iconSmp:"check-circle"}) : this.setState({iconSmp:"circle-o"});
        document.getElementById("inputSMA").checked === true ? this.setState({iconSma:"check-circle"}) : this.setState({iconSma:"circle-o"});
        document.getElementById("inputUniv").checked === true ? this.setState({iconUniv:"check-circle"}) : this.setState({iconUniv:"circle-o"});
    }
    render() {
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
                                    onClick={this.props.onClick}
                                    onChange={()=>{this.handleClick()}} 
                                />
                                <label htmlFor="inputsd" >
                                    <div>
                                        <FontAwesome name={this.state.icon} color="black" size={24} />
                                        <div>SD</div>
                                    </div>
                                </label>
                            </Col>
                            <Col className="bsjp" xs={6} style={{paddingLeft: '5px'}}>
                                <Input 
                                    type="radio" id="inputSMP" 
                                    name="radioFruit" 
                                    value="smp" 
                                    onClick={this.props.onClick}
                                    onChange={()=>{this.handleClick()}} />
                                <label htmlFor="inputSMP" >
                                    <div>
                                        <FontAwesome name={this.state.iconSmp} color='black' size={24} />
                                        <div>SMP</div>
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
                                    onClick={this.props.onClick}
                                    onChange={()=>{this.handleClick()}} 
                                />
                                <label htmlFor="inputSMA" >
                                    <div>
                                        <FontAwesome name={this.state.iconSma} color='black' size={24} />
                                        <div>SMA</div>
                                    </div>
                                </label>
                            </Col>
                            <Col className="bsjp" xs={6} style={{paddingLeft: '5px'}}>
                                <Input 
                                    type="radio" 
                                    id="inputUniv" 
                                    name="radioFruit" 
                                    value="univ" 
                                    onClick={this.props.onClick}
                                    onChange={()=>{this.handleClick()}} 
                                />
                                <label htmlFor="inputUniv" >
                                    <div>
                                        <FontAwesome name={this.state.iconUniv} color='black' size={24} />
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
}

const Input = styled.input`
    bgcolor : red;
`;

