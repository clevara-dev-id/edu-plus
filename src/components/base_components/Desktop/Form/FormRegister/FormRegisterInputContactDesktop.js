import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';

import ButtonPrimary from '../../Button/SecondaryButtonDesktop';
import './formregisterinputcontactdesktop.css';

const FormRegisterInputContactDesktop = props => {
    const IsNameValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(props.nameFormRegisterId).value;
          
        if (!valueInput) {
          text = "Name cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById(props.errorNameFormRegisterId).innerHTML = text;
        return formIsValid;
    }

    const IsPositionValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(props.positionFormRegisterId).value;
          
        if (!valueInput) {
          text = "Position cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById(props.errorPositionRegisterId).innerHTML = text;
        return formIsValid;
    }

    const IsPhoneValid = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(props.phoneFormRegisterId).value;
          
        if (!valueInput) {
          text = "Phone Number cannot be empty !";
          formIsValid=false;
        }

        if (isNaN(valueInput)) {
            text = "Phone Number Must be Integer !";
            formIsValid=false;
        } 

        if (valueInput < 0) {
            text = "Phone Number Must Positive Number !";
            formIsValid=false;
        }

        if (valueInput.length > 14) {
            text = "Phone Number max 14 Digit !";
            formIsValid=false;
        } 

        document.getElementById(props.errorPhoneFormRegisterId).innerHTML = text;
        return formIsValid;
    }

    const IsEmailValid = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(props.emailFormRegisterId).value;
        if (!valueInput) {
            text = "e-Mail cannot be empty !";
            formIsValid=false;
        }
        else if(typeof valueInput !== "undefined"){
            let lastAtPos = valueInput.lastIndexOf('@');
            let lastDotPos = valueInput.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && valueInput.indexOf('@@') == -1 && lastDotPos > 2 && (valueInput.length - lastDotPos) > 2)) {
                text = "Invalid Format";
                formIsValid=false;
            }
        }
  
        document.getElementById(props.errorEmailFormRegisterId).innerHTML = text;
        return formIsValid;
    }
    const buttonClickHandle = () => {
        let formIsValid=true;
        if(!IsNameValid()){
            formIsValid=false;
        }
        if(!IsPhoneValid()){
            formIsValid=false;
        }
        if(!IsPositionValid()){
            formIsValid=false;
        }
        if(!IsEmailValid()){
            formIsValid=false;
        }
        return formIsValid;
    }
    $(document).ready(()=> {
        $("#buttonmesaageFormcontact").click(()=>{
            if(buttonClickHandle()){
                $("#buttonmesaageFormcontact").attr("onclick",props.onClickButton);
            }

        });
    });
    return (
        <>
            <Container id="formRegisterInputContactDesktopContainer">
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>Masukkan Nama anda</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id={props.nameFormRegisterId}
                                    type="text" 
                                    name="name"
                                    placeholder="Masukan nama anda"
                                    onChange={props.onChangeName}
                                    onBlur={()=>{IsNameValid()}}
                                />
                            </div>
                        </DivInput>
                    </Col>
                    <Col>
                        <DivInput>
                            <DivTitle>Jabatan</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id={props.positionFormRegisterId}
                                    type="text" 
                                    name="position"
                                    placeholder="Masukan jabatan anda"
                                    onChange={props.onChangePosition}
                                    onBlur={()=>{IsPositionValid()}}
                                />
                            </div>
                        </DivInput>
                    </Col>
                    <Col>
                        <DivInput>
                            <DivTitle>Email Sekolah</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id={props.emailFormRegisterId}
                                    type="email" 
                                    name="email"
                                    placeholder="Masukan email anda"
                                    onChange={props.onChangeEmail}
                                    onBlur={()=>{IsEmailValid()}}
                                />
                            </div>
                        </DivInput>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="errorClassDiv">
                            <span id={props.errorNameFormRegisterId} ></span>
                        </div>
                    </Col>
                    <Col>
                        <div className="errorClassDiv">
                            <span id={props.errorPositionRegisterId} ></span>
                        </div>
                    </Col>
                    <Col>
                        <div className="errorClassDiv">
                            <span id={props.errorEmailFormRegisterId} ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>No. Telepon Sekolah</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id={props.phoneFormRegisterId}
                                    type="text" 
                                    name="phone"
                                    placeholder="Masukan nomor telepon"
                                    onChange={props.onChangePhone}
                                    onBlur={()=>{IsPhoneValid()}}
                                />
                            </div>
                        </DivInput>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <div className="errorClassDiv">
                            <span id={props.errorPhoneFormRegisterId} ></span>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );

}

const DivTitile = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    text-align: left;
    margin-bottom: 16px;

    /* black ter */
    color: #242424;
`;

const DivInput = styled.div`
    max-width: 343px;
    width:100%;
    height: 64px;
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-bottom: 16px;
`;

const DivTextArea = styled.div`
    width: 343px;
    height: 200px;
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-bottom: 16px;
`;

const DivTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;


    /* black */
    color: #0A0A0A;
    margin-left: 20px;
    padding-top: 11px;
    text-align: left;
    letter-spacing: 0.001em;
`;

const InputEmail = styled.input`
    // width: 305px;
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

const InputMessage = styled.textarea`
    width: 305px;
    height: 157px;
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

FormRegisterInputContactDesktop.propTypes = {
    title            : PropTypes.string,
    onChangeName     : PropTypes.func,
    onChangePosition : PropTypes.func,
    onChangeEmail    : PropTypes.func,
    onChangePhone    : PropTypes.func,
    onClickButton    : PropTypes.func,
}

export default FormRegisterInputContactDesktop;