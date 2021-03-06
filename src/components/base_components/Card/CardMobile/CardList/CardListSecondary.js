import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Row, Col, Card } from 'react-bootstrap';
import './cardlistsecondary.css'
import TitlePage from '../../../TitlePage/TitleMobile/TitlePage';

const CardListSecondary = props => {
    let store = [{
        image   : "http://via.placeholder.com/104x104",
        brand   : "NASIONAL",
        title   : "SMAN 14 JAKARTA",
        address : "Jl. SMA BARAT, CILILITAN",
        phone   : "021 - 525 8721"
    }];
    console.log(props.store);
    props.store ? store=props.store : store=store; 
    return (
        <>
        <Container id="cardimgesearchseconadary">
            { 
            store.map((data)=>{return (
            <Row>
                <Col>
                    <MyCard>
                        <CardBody>
                            <CardTitle>{data.title}</CardTitle>
                            <CardContact>{data.address}</CardContact>
                            <CardContactPhone>{data.phone}</CardContactPhone>
                        </CardBody>
                    </MyCard>
                </Col>
            </Row>
            );})}
        </Container>
        </>
    );
}

const CardImage = styled.div`
    width: 104px;
    height: 104px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;    
`;

const MyCard = styled.div`
    position: relative;
    min-height: 104px; 
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color:#fff;
    background-clip: border-box;
    border: 1px solid #DBDBDB;
    border-radius: 8px;
    box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
    margin-bottom: 18px;
`;

const CardBody = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    padding-top: 16px;
    padding-left: 11px;
    padding-bottom: 10px
`;

const Brand = styled.h6`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    text-align: Left;
    color: #3273DC;
`;

const CardTitle = styled.h3`
    text-align: Left;
    margin-top: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 15.5px;
    line-height: 19px;

    /* identical to box height */
    letter-spacing: 0.0015em;

    color: #000000;
`;

const CardContact = styled.h5`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0025em;
    margin-top: -3px;
`;
const CardContactPhone = styled.h5`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0025em;
    margin-top: -3px;
`;

CardListSecondary.propTypes = {
    store : PropTypes.object,
}

export default CardListSecondary;