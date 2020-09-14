import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Icon from 'react-web-vector-icons';
import styled from 'styled-components';
import $ from 'jquery';

import './accordioncomponents.css';

import '../../Icon/Mobile/Icon';

const AccordionComponents = props => {
   const [Icon, setIcon] = useState('');
    
    return (
        <>
        <Container id="acorrdingcomponents">
            <Row>
                <Col>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle 
                                as={MyButton} 
                                variant="link" 
                                eventKey="0" 
                                onClick={()=>{Icon === "active" ? setIcon('') : setIcon('active') }}>
                                {props.title} 
                                <IconButton>
                                    <Icon
                                        font="FontAwesome"
                                        name={Icon === "active" ? "angle-down":"angle-right"} 
                                        color="gray" 
                                        size={16} 
                                    />
                                </IconButton>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <DivConten>
                                    {props.store.map((data)=>{
                                        return(
                                            <>
                                                <DivIcon>
                                                    <IconConten><img src={iconConten} style={{"marginTop": "-5px"}} /></IconConten>
                                                    <TextConten>{data.name}</TextConten>
                                                </DivIcon>
                                            </>
                                        );
                                    })}
                                    
                                </DivConten>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </>
    );

}

const MyButton = styled.a`
    /*background-color: #4CAF50;  Green */
    border: none;
    color: #3273DC !important;
    padding: 0px;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 345px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-left: 0px;
`;

const IconButton = styled.span`
    margin-left: 10px;
`;

const DivConten = styled.div`
    margin-bottom : 25px;
`;

const IconConten = styled.span`
    width   : 16px;
    height  : 16px;
    text-align : left;
    margin-top: -5px;
`;

const DivIcon = styled.div`
    text-align : left;
    margin-bottom: 29px;
    
`;

const TextConten = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */
    letter-spacing: 0.0025em;

    /* dark */
    color: #363636;
    margin-left: 10px;
`;

AccordionComponents.propTypes = {
    title : PropTypes.string,
    store : PropTypes.object
}

export default AccordionComponents;