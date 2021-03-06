import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';

import ButtonPrimary from '../../Button/SecondaryButtonDesktop';
import './formGetaccessdesktop.css';

const FormGetAccessDesktop = props => {
    const [buttonEnable, setButtonEnable]=useState(false);
    const IsSchoolsNameValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("schoolsNameFormContactComponent").value;
          
        if (!valueInput) {
          text = "Schools name cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById("errorValueSchoolsName").innerHTML = text;
        return formIsValid;
    }
    const IsSchoolsIdValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("schoolsIdFormContactComponent").value;
          
        if (!valueInput) {
          text = "NPSN cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById("errorValueSchoolsId").innerHTML = text;
        return formIsValid;
    }
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

    const IsPositionValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("positionFormContactComponent").value;
          
        if (!valueInput) {
          text = "Position cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById("errorValuePosition").innerHTML = text;
        return formIsValid;
    }

    const IsPhoneValid = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("phoneFormContactComponent").value;
          
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

        document.getElementById("errorValuePhone").innerHTML = text;
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
        if(!IsSchoolsNameValid()){
            formIsValid=false;
        }
        if(!IsSchoolsIdValid()){
            formIsValid=false;
        }
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
        $(`#buttonGetAccessDataInput`).click(()=>{
            if(buttonClickHandle()){
                setButtonEnable(true);
            }

        });
    });
    return (
        <>
            <Container id="formGetAccessDesktopContainer">
                <Row>
                    <Col>
                        <DivInputSchools {...props}>
                            <DivTitle>Masukkan Nama Sekolah</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsNameFormContactComponent"
                                    type="text" 
                                    name="schoolsname"
                                    placeholder="Masukan Nama Sekolah"
                                    onChange={props.onChangeSchoolsName}
                                    onKeyUp={()=>{IsSchoolsNameValid()}}
                                    disabled={props.schoolsDisable}
                                    value={props.valueSchoolsName}
                                />
                            </div>
                        </DivInputSchools>
                    </Col>
                    <Col>
                        <DivInput {...props}>
                            <DivTitle>NPSN</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="schoolsIdFormContactComponent"
                                    type="text" 
                                    name="schoolsid"
                                    placeholder="Nomor Pokok Sekolah Nasional"
                                    onChange={props.onChangeSchoolsId}
                                    onKeyUp={()=>{IsSchoolsIdValid()}}
                                    // disabled={props.schoolsDisable}
                                    // value={props.valueSchoolsId}
                                />
                            </div>
                        </DivInput>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="errorClassDiv">
                            <span id="errorValueSchoolsName" ></span>
                        </div>
                    </Col>
                    <Col>
                        <div className="errorClassDiv">
                            <span id="errorValueSchoolsId" ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>Masukkan Nama anda</DivTitle>
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
                    </Col>
                    <Col>
                        <DivInput>
                            <DivTitle>Jabatan</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="positionFormContactComponent"
                                    type="text" 
                                    name="position"
                                    placeholder="Jabatan anda di sekolah ini"
                                    onChange={props.onChangePosition}
                                    onKeyUp={()=>{IsPositionValid()}}
                                />
                            </div>
                        </DivInput>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="errorClassDiv">
                            <span id="errorValueName" ></span>
                        </div>
                    </Col>
                    <Col>
                        <div className="errorClassDiv">
                            <span id="errorValuePosition" ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivInput>
                            <DivTitle>Email Sekolah</DivTitle>
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
                    </Col>
                    <Col>
                        <DivInput>
                            <DivTitle>No. Telepon Sekolah</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id="phoneFormContactComponent"
                                    type="text" 
                                    name="phone"
                                    placeholder="Masukan nomor telepon"
                                    onChange={props.onChangePhone}
                                    onKeyUp={()=>{IsPhoneValid()}}
                                />
                            </div>
                        </DivInput>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="errorClassDiv">
                            <span id="errorValueEmail" ></span>
                        </div>
                    </Col>
                    <Col>
                        <div className="errorClassDiv">
                            <span id="errorValuePhone" ></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonPrimary
                            name="DAPATKAN AKSES"
                            id="buttonGetAccessDataInput"
                            background="#1A6EB2"
                            // disabled={true}
                            onClick={buttonEnable ? props.onClickButton : false}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );

}

const DivInput = styled.div(
    props => ({
        width: "343px",
        height: "64px",
        background: "#FFFFFF",
        boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        marginBottom: "16px",
    })    
);

const DivInputSchools = styled.div(
    props => ({
        width: "343px",
        height: "64px",
        background: props.schoolsDisable===true ? "#E3E3E3":"#FFFFFF",
        boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        marginBottom: "16px",
    })    
);

const DivTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;


    /* black */
    color: #0A0A0A;
    margin-left: 20px;
    padding-top: 13px;
    text-align: left;
    letter-spacing: 0.001em;
`;

const InputEmail = styled.input`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    margin-left: 18px;
    border : none;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;

    color: #2D2D2D;
`;

FormGetAccessDesktop.propTypes = {
    title            : PropTypes.string,
    onChangeName     : PropTypes.func,
    onChangePosition : PropTypes.func,
    onChangeEmail    : PropTypes.func,
    onChangePhone    : PropTypes.func,
    onClickButton    : PropTypes.func,
}

export default FormGetAccessDesktop;