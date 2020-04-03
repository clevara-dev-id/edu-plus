import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import './inputlogin.css';

const InputLogin = props => {
    return (
        <>
            <Container id="inputlogin">
                <Row className="rowemaillogin">
                    <Col>
                        <DivInput>
                            <DivTitle>Name</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    type="text" 
                                    name="name"
                                    pattern="[A-Za-z]{3}"
                                    onChange={props.onChangeName}
                                    value={props.valueName}
                                    onBlur={props.onBlurName}
                                />
                            </div>
                        </DivInput>
                        {(props.nameError) ? <span>{props.nameError}</span> : "" }
                    </Col>
                </Row>
                <Row className="rowemaillogin">
                    <Col>
                        <DivInput>
                            <DivTitle>Email</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    refs={props.refsEmail}
                                    type="email" 
                                    name="email"
                                    placeholder="ex. jhondoe@gmail.com"  
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                    onChange={props.onChangeEmail}
                                    value={props.valueEmail}
                                    onBlur={props.onBlurEmail}
                                />
                            </div>
                        </DivInput>
                        {(props.emailError) ? <span>{props.emailError}</span> : "" }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>Password</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    type="password" 
                                    name="password"
                                    onChange={props.onChangePassword}
                                    onBlur={props.onBlurPassword}
                                    value={props.valuePassword}
                                />
                            </div>
                        </DivInput>
                        {(props.passwordError) ? <span>{props.passwordError}</span> : "" }
                    </Col>
                </Row>
            </Container>
        </>
    );

}

const DivInput = styled.div`
    width: 343px;
    height: 64px;
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

const DivTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-left: 20px;
    padding-top: 11px;
    text-align: left;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.001em;

    /* Gray */
    color: #9B9B9B;
`;

const InputEmail = styled.input`
    width: 305px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-left: 20px;
    border : none;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;

    color: #2D2D2D;
`;

export default InputLogin;