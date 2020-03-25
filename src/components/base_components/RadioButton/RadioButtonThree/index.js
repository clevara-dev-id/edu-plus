import React, { Component } from 'react';
import styled from 'styled-components';

import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../css/radioButtonThree.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class RadioButtonThree extends Component {
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
        document.getElementById("inputnegeri").checked === true ? this.setState({icon:"check-circle"}) : this.setState({icon:"circle-o"});
        document.getElementById("inputswasta").checked === true ? this.setState({iconSmp:"check-circle"}) : this.setState({iconSmp:"circle-o"});
        document.getElementById("inputkursus").checked === true ? this.setState({iconSma:"check-circle"}) : this.setState({iconSma:"circle-o"});
    }
    render() {
        return (
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
                                    onClick={this.props.onClick}
                                    onChange={()=>{this.handleClick()}} 
                                />
                                <label htmlFor="inputnegeri" >
                                    <div>
                                        <FontAwesome name={this.state.icon} color="black" size={24} />
                                        <div>Negeri</div>
                                    </div>
                                </label>
                            </Col>
                            <Col className="bsjp" xs={4} style={{paddingLeft : "5px", paddingRight : "5px"}}>
                                <Input 
                                    type="radio" id="inputswasta" 
                                    name="radioThreeMobile" 
                                    value="swasta" 
                                    onClick={this.props.onClick}
                                    onChange={()=>{this.handleClick()}} />
                                <label htmlFor="inputswasta" >
                                    <div>
                                        <FontAwesome name={this.state.iconSmp} color='black' size={24} />
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
                                    onClick={this.props.onClick}
                                    onChange={()=>{this.handleClick()}} 
                                />
                                <label htmlFor="inputkursus" >
                                    <div>
                                        <FontAwesome name={this.state.iconSma} color='black' size={24} />
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
}

const Input = styled.input`
    bgcolor : red;
`;

