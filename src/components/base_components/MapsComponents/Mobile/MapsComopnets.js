import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
// import Icon from 'react-web-vector-icons';

import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './mapscomponents.css'

const AnyReactComponent = ({ text }) => 
        <div><FontAwesome name="map-marker" color="red" size={20} /></div>;

const MapsComopnets = props => {
    return (
        <>
            <Container id="mapscomponents">
                <Row>
                    <Col><TitleMaps>{props.store.title}</TitleMaps></Col>
                </Row>
                <Row>
                    <Col><AddressMaps>{props.store.addr}</AddressMaps></Col>
                </Row>
                <Row>
                    <Col>
                        <div className="mapsstyle" style={{ height: '158px', width: '100%' }}>        
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCZhTB2-kwjgpSjBPTpN-v-DkSEZprlMgU"}}
                                defaultCenter={props.store.center}
                                defaultZoom={props.store.zoom}
                                >
                                <AnyReactComponent
                                    lat={props.store.center.lat}
                                    lng={props.store.center.lng}
                                />
                            </GoogleMapReact>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivLinkMaps>
                            <LinkMaps href={`https://www.google.com/maps/?q=${props.store.center.lat},${props.store.center.lng}`} target="_blank">
                                Lihat di peta
                            </LinkMaps>
                        </DivLinkMaps>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const TitleMaps = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    margin-bottom: 10px;
    text-align: left;

    /* identical to box height */
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    

    /* black */
    color: #0A0A0A;
`;

const AddressMaps = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.004em;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 16px;

    /* dark */
    color: #363636;
`;

const DivLinkMaps = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    margin-top: 15px;

    /* identical to box height */
    letter-spacing: 0.0125em;
    text-transform: uppercase;

    /* link */
    color: #3273DC;
`;

const LinkMaps = styled.a`
    text-decoration: none;
    color: #3273DC;
    &:hover{
        color: #3273DC;
        text-decoration: none;
    }
`;

MapsComopnets.propTypes = {
    store : PropTypes.object
}

export default MapsComopnets;