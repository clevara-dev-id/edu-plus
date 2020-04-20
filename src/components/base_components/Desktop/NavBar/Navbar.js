import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import './navbar.css'

const Navbar = props => {
    return (
        <>
        <Container id="navbarDesktop">
            <Row>
                <Col>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Col lg={2} className="labelNavbar">
                                <NavTitle>EduPlus</NavTitle>  
                            </Col>
                            <Col lg={10} className="d-flex justify-content-end buttonNav" style={{textAlign:"right"}} >
                                <div className="navbar collapse navbar-collapse" id="navbarTogglerDemo03">
                                <Col lg={9}>
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center">
                                        {props.store.map((data)=>{
                                            return(
                                                <LiMyMenubar>
                                                    <MyMenubar href={data.link}>{data.name}<span className="sr-only">(current)</span></MyMenubar>
                                                </LiMyMenubar>
                                            );
                                        })}
                                    </ul>
                                </Col>
                                <Col lg={3} id="buttonNavbarId">
                                    <div className="form-inline my-2 my-lg-0">
                                        <NavbarButton onClick={props.onClickButton}>Daftarkan Sekolah</NavbarButton>
                                    </div>
                                </Col>
                                
                            </div>
                            </Col>
                    </nav>
                </Col>
            </Row>
        </Container>
        </>
    );
}

const NavTitle = styled.a`
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    color: #000000;
`;
const LiMyMenubar = styled.li`
    margin-right: 32px
`;
const MyMenubar = styled.a`
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    /* identical to box height */
    text-align: right;

    color: #000000;
    transition: .05s all;
    text-decoration: none;
    &:hover{
        color:#DBDBDB !important;
        cursor: pointer;
        text-decoration: none;
    }
`;

const NavbarButton = styled.button`
    border: 0px solid transparent;
    width: 169px;
    height: 41px;

    background: #FFFFFF;

    /* shadow 1 */
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03);
    border-radius: 4px;

    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;

    /* identical to box height */
    text-align: center;
    transition: .05s all;

    color: #000000;
    &:hover{
        border: 2px solid #DBDBDB;
        background: transparent;
        color: #DBDBDB;
    }
`;

Navbar.propTypes = {
    store           : PropTypes.object,
    onClickButton   : PropTypes.func
}

export default Navbar;