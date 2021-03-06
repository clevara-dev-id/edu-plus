import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import $ from 'jquery';
import Icon from 'react-web-vector-icons';

import './dropdownlistfourregisterdesktop.css';
import '../../Icon/Mobile/Icon';


const DropDownListFourResgisterDesktop = props => {
    const [visible, setVisible]=useState(false);
    const [pickItem, setMyPickItem]=useState(props.placeholder);
    const [visibleTwo, setVisibleTwo]=useState(false);
    // const [pickItemTwo, setMyPickItemTwo]=useState(props.placeholderTwo);
    
    const show = () =>{
        $(`.${props.className}`).css({"display":"block"});
        setVisible(true);
    }
    const hide = () =>{
        $(`.${props.className}`).css({"display":"none"});
        setVisible(false);
    }
    const showTwo = () =>{
        $(`.${props.classNameTwo}`).css({"display":"block"});
        setVisibleTwo(true);
    }
    const hideTwo = () =>{
        $(`.${props.classNameTwo}`).css({"display":"none"});
        setVisibleTwo(false);
    }
    $(document).ready(()=> {
        $(`.${props.buttonClass}`).click(()=>{
            visible === false ? show() : hide();
        });
        $(`.${props.buttonClassTwo}`).click(()=>{
            visibleTwo === false ? showTwo() : hideTwo();
        });
    });

    return (
        <>
            <Container id="dropDownFourRegisterDesktopContainer">
                <Row>
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
                                        <MyDropDownButton id="mybuttonFilterDesktop" 
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
                                        <DropDownListContent id="myDropdownFilterFour" className={props.className} >
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
                </Row>
            </Container>
        </>
    );
}




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
    z-index: 4;

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

 DropDownListFourResgisterDesktop.propTypes = {
     placeholder : PropTypes.string,
     title       : PropTypes.string,
     store       : PropTypes.object,
     onClick     : PropTypes.func,
     className   : PropTypes.string
 }

export default DropDownListFourResgisterDesktop;