import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Icon from 'react-web-vector-icons';

import './desktopbadgesusingRadiobutton.css';
import '../Icon/Icon';

const DesktopBadgeUsingRadioButton = props => {
    const openPage = (cityName) =>{
        var i, tabcontent;
        tabcontent = document.getElementsByClassName("tabcontendetailDesktop");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
    }
    return (
        <>
        <Container id="desktopBadgesUsingRadiobuttonContainer">
            <Row>
                <Col className="badgescol" lg={8}>
                    <div className="radio-toolbarTwo">
                    <div>
                        <div id="childBadgesDesktop" >
                            {props.store.map((data)=>{
                                return(
                                    props.store[0].name === data.name ?
                                    <>
                                        <Input 
                                            type="radio" 
                                            id={data.otherId} 
                                            name="radioBadgesDesktop" 
                                            value="schools"
                                            onClick={(e)=>{openPage(data.idContent)}}
                                            onLoad={(e)=>{openPage(data.idContent)}}
                                            defaultChecked
                                        />
                                        <label htmlFor={data.otherId}>
                                            <div>
                                                <div>{data.name}</div>
                                            </div>
                                        </label>   
                                    </>
                                    :
                                    <>
                                    <Input 
                                        type="radio" 
                                        id={data.otherId}
                                        name="radioBadgesDesktop" 
                                        value="schools"
                                        onClick={(e)=>{openPage(data.idContent)}}
                                    />
                                    <label htmlFor={data.otherId}>
                                        <div>
                                            <div>{data.name}</div>
                                        </div>
                                    </label>     
                                    </> 
                                );
                            })}
                        </div>
                    </div>
                    </div>
                </Col>
                <Col className="badgescolrightside d-flex flex-row-reverse" lg={4}>
                    <InputGroup>
                        <Icon name="search" color="#B5B5B5" font="Feather" size={22} />
                        <FormControl
                        className="inputTextBadges"
                        placeholder={props.placeholderSearch}
                        onChange={props.onChangeSearch}
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        </>
    );
}

const Input = styled.input`
    bgcolor : red;
`;

DesktopBadgeUsingRadioButton.propTypes = {
    name : PropTypes.object,
}

export default DesktopBadgeUsingRadioButton;