import React, { Component, useState } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
// import $ from 'jquery';

import './inputsearchdesktopsecondary.css';
import '../../Icon/Mobile/Icon';


const InputSearchDesktop = props => {
    const [isOptionClick, setIsOptionClick]=useState(false);

    // $(document).ready(function(){
    //     document.getElementById("defaultOpenBadges").click();  
    // })
    const handleOnkeyUP = () =>{
        if(props.autocompletedata.length > 0){
            $('#dropDownContentGetAccessList').css({"display" : "block"});
        }
        else{
            $('#dropDownContentGetAccessList').css({"display" : "none"});
        }
    }
    $(document).ready(()=>{
        // props.autocompletedata.length > 0 && isOptionClick===false ? $('#dropDownContentGetAccessList').css({"display" : "block"}) 
        // : $('#dropDownContentGetAccessList').css({"display" : "none"});
        // $('#searchFormInputGetAceess').change(()=>{
            
        // });

        // if(props.autocompletedata.length === 0){
        //     $('#dropDownContentGetAccessList').css({"display" : "none"});
        // }

        $('#dropDownContentGetAccessList > option').click(()=>{
            $('#dropDownContentGetAccessList').css({"display" : "none"});
        });
        // $('#searchFormInputGetAceess').keyup(handleOnkeyUP());
    });
    return (
        <>
        <Container id="inputSearchDesktopContainer">
            <Row>
                <Col>
                    <div className="titleInputSearch">
                        <DivTitle>{props.title}</DivTitle>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            autocomplete="off"
                            id="searchFormInputGetAceess"
                            className="inputTextBadges"
                            placeholder={props.placeholder}
                            aria-label={props.label}
                            aria-describedby="basic-addon1"
                            onChange={props.onChange}
                            onKeyPress={props.onKeyPress}
                            onKeyUp={()=>{handleOnkeyUP()}}
                            value={props.valueSearch}
                        />
                        <Icon name="search" color="#B5B5B5" font="Feather" size={20} />
                    </InputGroup>
                    <DivSearch id="dropDownContentGetAccessList">
                        {props.autocompletedata.map((data)=>{
                            return(
                                <option onClick={props.onClickAutoComplete} value={data.name}>{data.name}</option>
                            );
                        })}
                    </DivSearch>
                </Col>
            </Row>
        </Container>
        </>
    );
}

const DivSearch = styled.div`
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 537px;
    margin-top: 37px;
    display: none;
    position: absolute;
    min-width: 230px;
    overflow: auto;
    background: #FFFFFF;
    border: 1px solid #DBDBDB;
    z-index: 1;
    padding-top: 15px;
    padding-bottom: 10px;
`;

const DivTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    margin-bottom: 16px;

    /* black ter */
    color: #242424;
`;

InputSearchDesktop.propTypes = {
    onChange    : PropTypes.func,
    label       : PropTypes.string,
    placeholder : PropTypes.string
}

export default InputSearchDesktop;