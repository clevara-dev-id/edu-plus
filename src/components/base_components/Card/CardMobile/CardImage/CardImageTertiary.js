import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import ButtonLoadMore from '../../../Button/ButtonMobile/ButtonSecondary';
import './cardimagemobiletertiary.css'

const CardImageTertiary = props => {
    return (
        <>
            <Container id="cardImageMobileTertiaryContainer">
            {props.store.map((data)=>{
                return(
                    <LinkCards href={data.link ? data.link : false}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={data.image} height={180}/>
                                <Card.Body>
                                    <CardTitle>{data.titleCard}</CardTitle>
                                    <CardCount>{data.descrip}</CardCount>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </LinkCards>
                  );
                })
            }
            <Row>
                {props.loadmoreEnable === true ? <div style={{marginTop: "25px"}}></div> : ""}
                {props.loadmoreEnable === true ?<ButtonLoadMore 
                    name="MUAT LEBIH BANYAK"
                    width="277px"
                    boxShadow="none"
                    background="#f3f3f3"
                    onClick={props.onClickLoadmore}

                /> : ""}
            </Row>
            </Container>
        </>
    );
}

const LinkCards = styled.a`
    text-decoration: none;
    &:hover{
        text-decoration: none;
    }
`; 

const CardTitle = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 17px;
    text-align: left;
    margin-top: 5px;

    /* identical to box height */
    letter-spacing: 0.0125em;
    color: #242424;
`;
const CardCount = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.0125em;
    text-align: left;
    color: #242424;
`;


CardImageTertiary.propTypes = {
    store : PropTypes.object
}

export default CardImageTertiary;