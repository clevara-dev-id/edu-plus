import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Icon from 'react-web-vector-icons';
import { Container, Row, Col } from 'react-bootstrap';

// import ButtonPrimary from '../../Button/ButtonMobile/ButtonPrimary';
// import LineComponents from '../../LineComponents/Mobile/LineComponents';
import './formregistersinglewithdropdownlistdesktop.css';
import '../../Icon/Icon';

const FormRegisterSingleWithDropDownListDesktop = props => {
    //BOTTOM FORM
    const [visible, setVisible]=useState(false);
    const [pickItem, setMyPickItem]=useState(props.placeholder);
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
    });
    return (
        <>
            <Container id="formRegisterSingleWithDropDownListDesktopContainer">
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
                    <Col>
                        <CardDropdown>
                                <Row>
                                    <Col>
                                        <TitleCard>{props.title}</TitleCard>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <MyDropDownDiv> 
                                            <MyDropDownButton onClick={props.onButtonClick} id="mybuttonFilter" 
                                            className={props.buttonClass ? props.buttonClass : "defaultclassbitton"}>
                                                <Col className="placeholderclass" xs={11}>
                                                    {pickItem}
                                                </Col>
                                                <Col className="iconClass" xs={1}>
                                                    <Icon 
                                                        name={visible === true ? 'angle-down':'angle-right'} 
                                                        color="#222222" 
                                                        font="FontAwesome" size={22} 
                                                    />
                                                </Col>
                                            </MyDropDownButton>
                                            <DropDownListContent id="myDropdownSecondary" className={props.className} >
                                                {props.store.map((data)=>{
                                                    return(
                                                        <li onClick={()=>{setMyPickItem(data.name);hide()}}>
                                                            <option value={data.id} onClick={props.onClick}>{data.name}</option>
                                                        </li>
                                                    );
                                                })}
                                            </DropDownListContent>                
                                        </MyDropDownDiv>
                                    </Col>
                                </Row>
                            </CardDropdown>
                    </Col>
                    <Col></Col>
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
const CardDropdown = styled.div`
    max-width: 343px;
    height: 64px;

    /* White */
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

const TitleCard = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 11px;
    margin-left: 20px;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.001em;

    /* Gray */
    color: #9B9B9B;
`;
const MyDropDownDiv = styled.div`
    position: relative;
    display: inline-block;
    margin-top: 3px;
    margin-left: 20px;
`;

const MyDropDownButton = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    width: 308px;
    left: 0px;

    /* identical to box height */
    display: flex;
    letter-spacing: 0.0025em;

    /* Black */
    color: #222222;
    cursor: pointer;
`;

const DropDownListContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    overflow: auto;
    right: 0;
    left: auto;
    z-index: 1;

    min-width: 180px;
    max-height:378px;
    min-height: 120px;

    /* white */
    background: #FFFFFF;

    /* white ter */
    border: 1px solid #F5F5F5;
    box-sizing: border-box;

    /* shadow 1 */
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
 `;

FormRegisterSingleWithDropDownListDesktop.propTypes = {
    title            : PropTypes.string,
    onChangeName     : PropTypes.func,
    onChangeEmail    : PropTypes.func,
    onChangePhone    : PropTypes.func,
    onClickButton    : PropTypes.func,
}

export default FormRegisterSingleWithDropDownListDesktop;