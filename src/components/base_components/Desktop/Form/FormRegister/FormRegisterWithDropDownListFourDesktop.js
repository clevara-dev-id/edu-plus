import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';
// import Icon from 'react-web-vector-icons';
import { Container, Row, Col } from 'react-bootstrap';

import DropdownList from '../../DropDownList/DropDownListFourResgisterDesktop';
// import ButtonPrimary from '../../Button/ButtonMobile/ButtonPrimary';
// import LineComponents from '../../LineComponents/Mobile/LineComponents';
import './formregisterwithdropdownlistfourdesktop.css';
import '../../Icon/Icon';

const FormRegisterWithDropDownListFourDesktop = props => {
    //BOTTOM FORM
    const [visible, setVisible]=useState(false);

    const IsFormValid = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(props.idInputForm).value;
          
        if (!valueInput) {
          text = props.errorMessage;
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById(props.idErrorMessage).innerHTML = text;
        return formIsValid;
    }
    
    const show = () =>{
        $(`.${props.className}`).css({"display":"block"});
        setVisible(true);
    }
    const hide = () =>{
        $(`.${props.className}`).css({"display":"none"});
        setVisible(false);
    }
    $(document).ready(()=> {
        $(`.${props.buttonClass}`).click(()=>{
            visible === false ? show() : hide();
        });
        $(`#firstbuttonDropDownListClick`).click(async()=>{
            await hide();
        });
    });
    return (
        <>
            <Container id="formRegisterWithDropDownListDesktopFourContainer">
                <Row>
                    <Col lg={4}>
                        <DivInput>
                            <DivTitle>{props.title}</DivTitle>
                            <div className="inputClass">
                                <InputEmail 
                                    id={props.idInputForm}
                                    type="text" 
                                    name={props.nameInputForm}
                                    placeholder={props.placeholderForm}
                                    onChange={props.onChange}
                                    onBlur={()=>{IsFormValid()}}
                                />
                            </div>
                        </DivInput>
                        <div className="errorClassDiv">
                            <span id={props.idErrorMessage} ></span>
                        </div>
                    </Col>
                    <Col lg={4}>
                            <DropdownList
                                onClick={props.ProvOnClick}
                                store={props.storeProv} 
                                placeholder="Pilih Provinsi"
                                title="Provinsi"
                                className={props.classNameProv ? props.classNameProv :"provdropdownclass"}
                                buttonClass={props.buttonClassProv ? props.buttonClassProv : "provbuttonclickprovregistercontent"}
                            />
                    </Col>
                    <Col lg={4}>
                            <DropdownList
                                onClick={props.CityOnClick}
                                store={props.storeCity} 
                                placeholder="Pilih Kabupaten / Kota"
                                title="Kabupaten / Kota"
                                className={props.classNameCity ? props.classNameCity :"citydropdownclass"}
                                buttonClass={props.buttonClassCity ? props.buttonClassCity : "citysbuttonclickprovregistercontent"}
                            />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                                <DropdownList
                                    onClick={props.DistrictOnClick}
                                    store={props.storeDistrict} 
                                    placeholder="Pilih Kecamatan"
                                    title="Kecamatan"
                                    className={props.classNameDistrict ? props.classNameDistrict :"districtdropdownclass"}
                                    buttonClass={props.buttonClassDistrict ? props.buttonClassDistrict : "districtbuttonclickprovregistercontent"}
                                />
                        </Col>
                        <Col lg={4}>
                                <DropdownList
                                    onClick={props.VillageOnClick}
                                    store={props.storeVillage} 
                                    placeholder="Pilih Kelurahan / Desa"
                                    title="Kelurahan / Desa"
                                    className={props.classNameVillage ? props.classNameVillage :"villagedropdownclass"}
                                    buttonClass={props.buttonClassVillage ? props.buttonClassVillage : "villagebuttonclickprovregistercontent"}
                                />
                        </Col>
                </Row>
            </Container>
        </>
    );

}

const DivInput = styled.div`
    max-width: 343px;
    width: 100%;
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

 FormRegisterWithDropDownListFourDesktop.propTypes = {
    title            : PropTypes.string,
    onChangeName     : PropTypes.func,
    onChangeEmail    : PropTypes.func,
    onChangePhone    : PropTypes.func,
    onClickButton    : PropTypes.func,
}

export default FormRegisterWithDropDownListFourDesktop;