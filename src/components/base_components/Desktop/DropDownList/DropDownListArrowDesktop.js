import React, { useState }  from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from 'react-web-vector-icons';
import { Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

import '../../Icon/Mobile/Icon';
// import arrowicon from '../../../asset/images/ShortButton/icon.svg';
// import filtericon from '../../../asset/images/ShortButton/filter.svg';
import './dropdownlistarrowdesktop.css';

const DropDownListArrowDesktop = props => {
    const [filter, setFilter]=useState('URUTKAN');
    // const [filterArea, setFilterArea]=useState('FILTER');
    const showfunction = () => {
        $("#myDropdownLetterDesktop").toggle();
    }
    // const showfunctionArea = () => {
    //     $("#myDropdownAreaDesktop").toggle();
    // }
    // const hidefunctionArea = () => {
    //     $("#myDropdownAreaDesktop").hide();   
    // }
    $(document).ready(function(){
        $("#azbutton").click( function()
           {
             setFilter('Abjad A-Z');
             $(".dropdown-content-desktop").css({"display" :"none"});
           }
        );
        $("#zabutton").click( function()
           {
             setFilter('Abjad Z-A');
             $(".dropdown-content-desktop").css({"display" :"none"});
           }
        );

        //Area
        // $("#provbutton").click( function()
        //    {
        //         hidefunctionArea();
        //         setFilterArea("Provinsi");
        //    }
        // );
        // $("#citybutton").click( function()
        //    {
        //         hidefunctionArea();
        //         setFilterArea("Kabupaten / Kota");
        //    }
        // );
        // $("#districtbutton").click( function()
        //    {
        //         hidefunctionArea();
        //         setFilterArea("Kecamatan");
        //    }
        // );
        // $("#villagebutton").click( function()
        //    {
        //         hidefunctionArea();
        //         setFilterArea("Desa / Kelurahan");
        //    }
        // );
    });
    return (
        <>
            <Container id="dropDownListArrowDesktopContainer">
                <Row>
                    <Col lg={2} className="filterSearch">
                        <div className="dropdownDesktop">
                            <MyButton onClick={()=>{showfunction()}} className="dropbtnDesktop">
                                <Icon  
                                    name="swap-vert" 
                                    color="#1A6EB2"
                                    font="MaterialIcons"
                                    size={22} 
                                />
                                <span className="fildfilterDesktop" >{filter}</span>
                            </MyButton>
                            <div id="myDropdownLetterDesktop" class="dropdown-content-desktop">
                                <option
                                    id="azbutton"
                                    value="az" 
                                    onClick={props.onClick}
                                    >Abjad A-Z</option>
                                <option 
                                    id="zabutton"
                                    value="za" 
                                    onClick={props.onClick}
                                    >Abjad Z-A
                                </option>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} className="filterSearchDesktop">
                        {/* <div className="dropdownDesktop">
                            <MyButton onClick={()=>{showfunctionArea()}} className="dropbtnDesktop">
                                <Icon  
                                    name="filter" 
                                    color="#1A6EB2"
                                    font="AntDesign"
                                    size={20} 
                                />
                                <span className="fildfilterDesktop" >{filterArea}</span>
                            </MyButton>
                            <div id="myDropdownAreaDesktop" class="dropdown-content-desktop">
                                <option id="provbutton" value="provinsi" onClick={props.onClickArea}>Provinsi</option>                                
                                <option id="citybutton" value="kota" onClick={props.onClickArea}>Kabupaten / Kota</option>
                                <option id="districtbutton" value="kecamatan" onClick={props.onClickArea}>Kecamatan</option>
                                <option id="villagebutton" value="kelurahan" onClick={props.onClickArea}>Desa / Kelurahan</option>
                            </div>
                        </div> */}
                    </Col>
                    <Col lg={2} className="filterSearchDesktop"></Col>
                    <Col lg={2} className="filterSearchDesktop"></Col>
                    <Col lg={2} className="filterSearchDesktop"></Col>
                    <Col lg={2} className="filterSearchDesktop"></Col>
                </Row>
            </Container>
        </>
    );
}

const MyButton = styled.button`
`;

DropDownListArrowDesktop.propTypes = {
    onClick     : PropTypes.func,
    onClickArea : PropTypes.func,
}

export default DropDownListArrowDesktop;