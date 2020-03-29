import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Badge } from 'react-bootstrap';

import './badgesgroup.css'

const BadgesGroup = props => {
    return (
        <>
        <Container id="badgesgroup">
            <Row><Col>
            <div className="scrollmenu">
                <div id="childscroll" >
                    {props.store.map((data)=>{
                        return(
                            <Badge variant="primary">{data.name}</Badge>        
                        );
                    })}
                </div>
            </div>
            </Col></Row>
        </Container>
        </>
    );
}

BadgesGroup.propTypes = {
    name : PropTypes.object,
}

export default BadgesGroup;