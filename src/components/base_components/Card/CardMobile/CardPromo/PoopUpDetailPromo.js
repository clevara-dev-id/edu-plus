import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import './cardimagepromo.css'



const PoopUpDetailPromo =(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalPromoDetailMobileId"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Promo Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div><img src={props.sourceImage} alt="" /></div>
            <DivLine></DivLine>
            <TitleModal>{props.TitleCard}</TitleModal>
            <DescriptionModal>{props.descripModal}</DescriptionModal>
        </Modal.Body>
      </Modal>
    );
}


const TitleModal = styled.h3`
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #363636;
`;

const DescriptionModal = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #4A4A4A;
    margin-bottom:25px;
`;

const DivLine = styled.div`
    width: 100%;
    border: 1px solid #DBDBDB;
    margin-top: 28px;
    margin-bottom: 28px;
`;

PoopUpDetailPromo.propTypes = {
    store : PropTypes.object
}

export default PoopUpDetailPromo;

