import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';

import ButtonPrimary from '../../Button/ButtonMobile/ButtonPrimary';
import './formcontactcomponents.css';

const FormContactComponents = props => {
    const [enableButton, setEnableButton] = useState(false);
    const IsNameValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("nameFormContactComponent").value;
          
        if (!valueInput) {
          text = "Name cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById("errorValueName").innerHTML = text;
        return formIsValid;
    }

    const IsMessageValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("messageFormContactComponent").value;
          
        if (!valueInput) {
          text = "Message cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById("errorValueMessage").innerHTML = text;
        return formIsValid;
    }

    const IsEmailValid = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("emailFormContactComponent").value;
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
  
        document.getElementById("errorValueEmail").innerHTML = text;
        return formIsValid;
    }
    const buttonClickHandle = () => {
        let formIsValid=true;
        if(!IsNameValid()){
            formIsValid=false;
        }
        if(!IsMessageValid()){
            formIsValid=false;
        }
        if(!IsEmailValid()){
            formIsValid=false;
        }
        return formIsValid;
    }
    $(document).ready(()=> {
        $("#buttonmesaageFormcontactMobile").click(()=>{
            if(buttonClickHandle()){
                setEnableButton(true);
            }

        });
    });
    return (
        <>
            <Container id="formContactContainer">
                <Row>
                    <Col>
                        <DivTitile>{props.title}</DivTitile>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>Nama</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="nameFormContactComponent"
                                    type="text" 
                                    name="name"
                                    placeholder="Masukan nama anda"
                                    onChange={props.onChangeName}
                                    onKeyUp={()=>{IsNameValid()}}
                                />
                            </div>
                        </DivInput>
                        <div className="errorClassDiv">
                            <span id="errorValueName" ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>Email</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="emailFormContactComponent"
                                    type="email" 
                                    name="email"
                                    placeholder="Masukan email anda"
                                    onChange={props.onChangeEmail}
                                    onKeyUp={()=>{IsEmailValid()}}
                                />
                            </div>
                        </DivInput>
                        <div className="errorClassDiv">
                            <span id="errorValueEmail" ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivTextArea>
                            <DivTitle>Pesan</DivTitle>
                            <div className="inputClass">
                                <InputMessage 
                                    id="messageFormContactComponent"
                                    name="name"
                                    placeholder="Masukan nama anda"
                                    onChange={props.onChangeMessage}
                                    onKeyUp={()=>{IsMessageValid()}}>
                                </InputMessage>
                                
                            </div>
                        </DivTextArea>
                        <div className="errorClassDiv">
                            <span id="errorValueMessage" ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonPrimary
                            name="KIRIM"
                            id="buttonmesaageFormcontactMobile"
                            background="#1A6EB2"
                            onClick={enableButton === true ? props.onClickButton : false}
                        />
                    </Col>
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
    width: 343px;
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

FormContactComponents.propTypes = {
    title            : PropTypes.string,
    onChangeName     : PropTypes.func,
    onChangeEmail    : PropTypes.func,
    onChangeMessage  : PropTypes.func,
    onClickButton    : PropTypes.func,
}

export default FormContactComponents;