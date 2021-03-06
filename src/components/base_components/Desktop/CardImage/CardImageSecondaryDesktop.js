import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import SweetAlert from '../SweetAlertDesktop/SweetAlertDesktop';
import ButtonLoadMoreDesktop  from '../Button/PrimaryButtonDesktop';
import './cardimagesecondarydesktop.css'

const CardImageSecondaryDesktop = props => {
    return (
        <>
            <Container id="cardImageSecondaryDesktopContainer">
                <Row>
                    {props.store.map((data)=>{
                        return(
                        <Col lg={3}>
                            <LinkCardImage 
                                href={data.link} 
                                onClick={()=>{
                                    if(data.messageIfCommingSoon !== false){
                                        SweetAlert("Comming Soon !",data.messageIfCommingSoon, "warning" );
                                    }
                                }}>
                                <Card>
                                    <Card.Img variant="top" src={data.image} />
                                    <Card.Body>
                                        <CardTitle>{data.titleCard}</CardTitle>
                                        <CardCount>{data.descrip}</CardCount>
                                    </Card.Body>
                                </Card>
                            </LinkCardImage>
                        </Col>
                        );
                    })}
                </Row>
                {props.loadmoreEnable===true ?
                    <Row>
                        <Col>
                            <div style={{marginTop: "35px"}}></div>
                            <ButtonLoadMoreDesktop 
                                    name="MUAT LEBIH BANYAK"
                                    width="277px"
                                    boxShadow="none"
                                    background="#f3f3f3"
                                    onClick={props.onClickLoadmore}
                            />
                        </Col>
                    </Row>:
                    <Row><Col></Col></Row>
                }
            </Container>
        </>
    );
}

const CardTitle = styled.h3`
    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: left;

    /* identical to box height **/
    letter-spacing: 0.0125em;
    text-transform: uppercase;

    color: #242424;
`;
const CardCount = styled.div`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    text-align: left;

    color: #242424;
`;

const LinkCardImage = styled.a`
    text-decoration: none;
    &:hover{
        text-decoration: none;
    }
`;

CardImageSecondaryDesktop.propTypes = {
    store : PropTypes.object
}

export default CardImageSecondaryDesktop;