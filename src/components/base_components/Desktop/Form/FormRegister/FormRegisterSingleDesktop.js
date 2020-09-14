import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';
import { Container, Row, Col } from 'react-bootstrap';

// import ButtonPrimary from '../../Button/ButtonMobile/ButtonPrimary';
// import LineComponents from '../../LineComponents/Mobile/LineComponents';
import './formregistersingledesktop.css';


const FormRegisterSingleDesktop = props => {
    //BOTTOM FORM
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
    return (
        <>
            <Container id="formRegisterSingleDesktopContainer">
                <Row>
                    <Col>
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

FormRegisterSingleDesktop.propTypes = {
    title            : PropTypes.string,
    onChangeName     : PropTypes.func,
    onChangeEmail    : PropTypes.func,
    onChangePhone    : PropTypes.func,
    onClickButton    : PropTypes.func,
}

export default FormRegisterSingleDesktop;