import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import './cardimagepromodesktop.css'


const PopUpPromoDetailDesktop=(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="modalPromoDetailDesktopId"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Promo Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div><img src={props.sourceImageModal} width="480px" height="259px" alt="" /></div>
            <DivLine></DivLine>
            <TitleModal>{props.TitleCard}</TitleModal>
            <DescriptionModal>{props.descripModal}</DescriptionModal>
        </Modal.Body>
      </Modal>
    );
}


const DivLine = styled.div`
    width: 100%;
    border-top: 2px solid #DBDBDB;
    margin-top: 28px;
    margin-bottom: 28px;
`;

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


PopUpPromoDetailDesktop.propTypes = {
    store : PropTypes.object
}

export default PopUpPromoDetailDesktop;