import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col } from 'react-bootstrap';
import logoDesktop from '../../../asset/logo/logoDesktop.svg';
import ButtonDesktop from '../Button/PrimaryButtonDesktop';
import './navbarblue.css';
import '../Icon/Icon';

const NavBarBlue = props => {
    const onClickRegisterHandle = () =>{
        window.location="/getaccess";
    }
    const showHideFunctions = ()=>{
        $('#myDropdownNavbarDesktop').toggle();
    }
    const hideFunctions = ()=>{
        $('#myDropdownNavbarDesktop').hide();
    }
    $(document).ready(()=>{
        $('#myDropdownNavbarDesktop > option').click(()=>{
            hideFunctions();
        });
    });
    return (
        <>
        <Container id="navbarDesktopBlueContainer">
            <Row>
                <Col className="colLogoNavBar" lg={2}>
                    <img src={logoDesktop} width="100px" height="38px" alt="" />
                </Col>
                <Col className="colMenuBar" lg={7}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contactus">Hubungi Kami</a></li>
                        <li><a href="https://operator.edukasiplus.com/">Login</a></li>
                        <li>
                            <div className="dropdownNavbarDesktop">
                                <LinkForGuide className="guideBookNavbar"
                                    onClick={()=>{showHideFunctions()}}
                                >Panduan
                                    <Icon 
                                        name="angle-down" 
                                        color="#ffffff" 
                                        font="FontAwesome" size={22} 
                                    />
                                </LinkForGuide>
                                <div id="myDropdownNavbarDesktop" class="dropdown-contentNavBarDesktop">
                                    <option
                                        value="operator" 
                                        onClick={props.onClickModule}
                                        >Panduan Operator.pdf</option>
                                    <option 
                                        value="user" 
                                        onClick={props.onClickModule}
                                        >Panduan Penggunaan Website EduPlus.pdf
                                    </option>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Col>
                <Col className="colButtonNavBar" lg={3}>
                    <ButtonDesktop
                        name="DAFTARKAN SEKOLAH ANDA"
                        onClick={()=>{onClickRegisterHandle()}}
                    />
                </Col>
            </Row>
        </Container>
        </>
    );
}

const LinkForGuide = styled.a`
cursor: pointer;
`;

NavBarBlue.propTypes = {
    store           : PropTypes.object,
    onClickButton   : PropTypes.func
}

export default NavBarBlue;