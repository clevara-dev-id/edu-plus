import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import styled from 'styled-components';
import './accordionaddress.css';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import $ from 'jquery';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css';
import iconConten from '../../../asset/logo/According/check-circle.svg'

import axios from 'axios';
const API_URL = 'http://dev.farizdotid.com/api/daerahindonesia/provinsi';

const AccordionAddress = props => {
    const [Icon, setIcon] = useState('angle-right');
    const [IconKec, setIconKec] = useState('angle-right');
    const [provinsidata, setProvinsidata] = useState('');
    const [choiceprovinsi, setChoiceProvinsi] = useState('Pilih Provinsi');
    const [datakecamatan, setDatakecamatan] = useState('');
    const [choicekecamatan, setChoicekecamatan] = useState('Pilih Kecamatan');
    const myfunction=(id, res)=>{
        setChoiceProvinsi(res);
        getKabupaten(id);
        changeIcon();
        $( ".collapse" ).removeClass('show');
    }
    const myfunctionKec=(res)=>{
        setChoicekecamatan(res);
        changeIconKec();
        $( ".closeButtonKec" ).removeClass('show');
    }
    const changeIcon = () =>{
        $( ".collapse" ).hasClass("show") ? setIcon('angle-right') : setIcon('angle-down');
    }
    const changeIconKec = () =>{
        $( ".closeButtonKec" ).hasClass("show") ? setIconKec('angle-right') : setIconKec('angle-down');
    }
    const getPropinsi = async() =>{
        const response = await axios.get(API_URL);
        const getData = await response;
        setProvinsidata(getData.data.semuaprovinsi);
    }
    const getKabupaten = async(id) =>{
        let newDataKecamatan=[], countIndex=0, countIndexKab=0;
        const API_URL_KABUPATEN = `http://dev.farizdotid.com/api/daerahindonesia/provinsi/${id}/kabupaten`
        const response = await axios.get(API_URL_KABUPATEN);
        const getData = await response;
        const sumKab = getData.data.lenght;
        getData.data.kabupatens.map(async(data, index)=>{
            const kecamatandata = await getKecamatan(data.id);
            // console.log(kecamatandata);
            kecamatandata.data.kecamatans.forEach((kecdata)=>{
                newDataKecamatan[countIndex]=kecdata;
                countIndex++;
            });
            
        });
        setDatakecamatan(newDataKecamatan);
    }
    const getKecamatan = async(id) =>{
        const API_URL_KECAMATAN = `http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/${id}/kecamatan`
        const response = await axios.get(API_URL_KECAMATAN);
        const getData = await response;
        // console.log(getData);
        return getData;
    } 
    // console.log(datakecamatan);
    return (
        <>
        <Container id="acorrdingaddress">
            <Row id="rowprov">
                <Col>
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Card.Header className="headerbuttonaccordion" >
                            <Accordion.Toggle 
                                as={MyButton} 
                                variant="link" 
                                eventKey="0" 
                                onClick={()=>{changeIcon(); getPropinsi()}}>
                                <TitleSelectArrow>Provinsi</TitleSelectArrow>
                                <SelectArrow>
                                    {choiceprovinsi}
                                    <IconButton className="iconbuttonaccordion">
                                        <FontAwesome name={Icon} color="gray" size={22} />
                                    </IconButton>
                                </SelectArrow>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body id="bodyAccordionAddress">
                                <div className="vertical-menu">
                                    {provinsidata ? provinsidata.map((data)=>{
                                        return(
                                            <LiContent onClick={()=>{myfunction(data.id, data.nama)}}>
                                                <option className="optionbutton" value={data.id} onClick={props.clickProvinsi}>{data.nama}</option>
                                            </LiContent>
                                        );
                                    }) : provinsidata }
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
            <Row id="rowkec" >
                <Col>
                    <Accordion defaultActiveKey="2">
                        <Card>
                            <Card.Header className="headerbuttonaccordion" >
                            <Accordion.Toggle 
                                as={MyButton} 
                                variant="link" 
                                eventKey="1" 
                                onClick={()=>{changeIconKec()}}>
                                <TitleSelectArrow>Kecamatan</TitleSelectArrow>
                                <SelectArrow>
                                    {choicekecamatan}
                                    <IconButton className="iconbuttonaccordion">
                                        <FontAwesome name={IconKec} color="gray" size={22} />
                                    </IconButton>
                                </SelectArrow>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1" className="closeButtonKec">
                            <Card.Body id="bodyAccordionAddress">
                                <div className="vertical-menu">
                                    {datakecamatan ? datakecamatan.map((data)=>{
                                        return(
                                            <LiContent onClick={()=>{myfunctionKec(data.nama)}}>
                                                <option className="optionbutton" value={data.id} onClick={props.clickKecamatan}>{data.nama}</option>
                                            </LiContent>
                                        );
                                    }) : datakecamatan }
                                </div>
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
    border: none;
    color: #3273DC !important;
    text-align: left;
    text-decoration: none;
    width: 345px;
    /*font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-left: 0px;
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;*/
`;

const IconButton = styled.span`
    float: right;
    margin-right: 0px; 
`;

const SelectArrow = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.0025em;

    /* Black */
    color: #222222;
`;
const TitleSelectArrow = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.001em;

    /* Gray */
    color: #9B9B9B;
`;

const LiContent = styled.li`
    width: 100%;
    height: 40px;
    margin-right: 10px;
    list-style-type: none;


    /* White */
    background: #FFFFFF;

    /* Gray */
    box-sizing: border-box;
    font-weight: normal;
    font-size: 16px;
    line-height: 17px;
    padding-top: 10px;
    padding-left: 20px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0025em;

    /* Black */
    color: #222222;
`;

AccordionAddress.propTypes = {
    clickProvinsi   : PropTypes.func,
    clickKecamatan  : PropTypes.func
}

export default AccordionAddress;