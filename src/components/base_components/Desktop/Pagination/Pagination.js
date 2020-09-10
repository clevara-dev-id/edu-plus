import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col } from 'react-bootstrap';

import './pagination.css'
import '../Icon/Icon';


const Pagination = props => {
    const pageNumbers = [];
    for (let i = 1; i <= props.lastPage; i++) {
        pageNumbers.push(i);
    }
    const openPage = (evt) =>{
        let i, tablinks;
        tablinks = document.getElementsByClassName("paginationButtonNumber");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" activeClassPagination", "");
        }
        $(`#idForPaginationButtonNumber${props.currentPage}`).addClass(" activeClassPagination");
    }
    $(document).ready(()=>{
        openPage(0);
    });
    return(
        <>
            <Container id="paginationContainer">
                <Row>
                    <Col>
                        <DivMessage></DivMessage>
                    </Col>
                    <Col></Col>
                    <Col>
                        <DivButtonPagination className="classDivPagination">
                            <ButtonPaginationArrow 
                                id="paginationPrevButton"
                                className="paginationButtonArrow"
                                onClick={props.onClickPrev}
                                value={props.currentPage-1}
                            >
                                <Icon  
                                    name="chevron-left" 
                                    color="#000000"
                                    font="Feather"
                                    size={20} 
                                />
                            </ButtonPaginationArrow>
                            {pageNumbers.map((data)=>{
                                return(
                                <ButtonPagination 
                                    id={`idForPaginationButtonNumber${data}`}
                                    className="paginationButtonNumber"
                                    onClick={props.onClickNumber}
                                    value={data}
                                >{data}</ButtonPagination>
                                );
                            })}
                            <ButtonPaginationArrow 
                                id="paginationNextButton"
                                className="paginationButtonArrow"
                                onClick={props.onClickNext}
                                value={props.currentPage+1}
                            >
                                <Icon  
                                    name="chevron-right" 
                                    color="#000000"
                                    font="Feather"
                                    size={20} 
                                />
                            </ButtonPaginationArrow>
                        </DivButtonPagination>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

const DivMessage = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #000000;
    margin-top: 26px;

    justify-content: flex-start;
    display: flex;
`;
const DivButtonPagination = styled.div`
    display: inline-flex;
    position: absolute;
    right: 0px;
    margin-top: 22px;
`;

const ButtonPaginationArrow = styled.button`
    width: 36px;
    height: 36px;
    left: 1153px;
    background: #FFFFFF;
    border: 2px solid #DBDBDB;
    box-sizing: border-box;
    border-radius: 50%/50%;
    margin-left: 8px;

    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

const ButtonPagination = styled.option`
    width: 36px;
    height: 36px;
    left: 1153px;
    background: #FFFFFF;
    border: 2px solid #DBDBDB;
    box-sizing: border-box;
    border-radius: 50%/50%;
    margin-left: 8px;

    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #172B4D;
`;

Pagination.prototype = {
    onClick      : PropTypes.func,
}

export default Pagination;