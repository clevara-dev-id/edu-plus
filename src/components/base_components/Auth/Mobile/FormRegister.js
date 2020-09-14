import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';

// import ButtonPrimary from '../../Button/ButtonMobile/ButtonPrimary';
// import LineComponents from '../../LineComponents/Mobile/LineComponents';
import './formregister.css';


const FormRegister = props => {
    //BOTTOM FORM
    const IsPhoneValid = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(props.phoneid ? props.phoneid :"phoneFormContactComponent").value;
          
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

        document.getElementById(props.phoneerrorid ? props.phoneerrorid : "errorValuePhone").innerHTML = text;
        return formIsValid;
    }

    const IsEmailValid = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(props.emailid ? props.emailid :"emailFormContactComponent").value;
        if (!valueInput) {
            text = "e-Mail cannot be empty !";
            formIsValid=false;
        }
        else if(typeof valueInput !== "undefined"){
            let lastAtPos = valueInput.lastIndexOf('@');
            let lastDotPos = valueInput.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && valueInput.indexOf('@@') === -1 && lastDotPos > 2 && (valueInput.length - lastDotPos) > 2)) {
                text = "Invalid Format";
                formIsValid=false;
            }
        }
  
        document.getElementById(props.emailerrorid ? props.emailerrorid : "errorValueEmail").innerHTML = text;
        return formIsValid;
    }
    const IsOperatorValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(props.opratorid ? props.opratorid : "operatorFormContactComponent").value;
          
        if (!valueInput) {
          text = "Operator Name cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById(props.opratorerrorid ? props.opratorerrorid : "errorValueOperator").innerHTML = text;
        return formIsValid;
    }
    return (
        <>
            <Container id="formRegisterContainer">
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>{props.phonetitle}</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id={props.phoneid ? props.phoneid :"phoneFormContactComponent"}
                                    type="text" 
                                    name="phone"
                                    placeholder="Masukan nomor telepon"
                                    onChange={props.onChangePhone}
                                    onBlur={()=>{IsPhoneValid()}}
                                />
                            </div>
                        </DivInput>
                        <div className="errorClassDiv">
                            <span id={props.phoneerrorid ? props.phoneerrorid : "errorValuePhone"} ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>{props.emailtitle}</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id={props.emailid ? props.emailid :"emailFormContactComponent"}
                                    type="email" 
                                    name="email"
                                    placeholder="Masukan email anda"
                                    onChange={props.onChangeEmail}
                                    onBlur={()=>{IsEmailValid()}}
                                />
                            </div>
                        </DivInput>
                        <div className="errorClassDiv">
                            <span id={props.emailerrorid ? props.emailerrorid : "errorValueEmail"} ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>Masukkan Nama Operator</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id={props.opratorid ? props.opratorid : "operatorFormContactComponent"}
                                    type="text" 
                                    name="operatorname"
                                    placeholder="Masukan nama Operator"
                                    onChange={props.onChangeOperator}
                                    onBlur={()=>{IsOperatorValid()}}
                                />
                            </div>
                        </DivInput>
                        <div className="errorClassDiv">
                            <span id={props.opratorerrorid ? props.opratorerrorid : "errorValueOperator"} ></span>
                        </div>
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

FormRegister.propTypes = {
    title            : PropTypes.string,
    onChangeName     : PropTypes.func,
    onChangeEmail    : PropTypes.func,
    onChangePhone    : PropTypes.func,
    onClickButton    : PropTypes.func,
    phoneid          : PropTypes.string,
    phoneerrorid     : PropTypes.string,
    emailid          : PropTypes.string,
    emailerrorid     : PropTypes.string,
    opratorid        : PropTypes.string,
    opratorerrorid   : PropTypes.string,
}

export default FormRegister;