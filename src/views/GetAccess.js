import React, { Component } from 'react';
import $ from 'jquery'

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';
import InputSearchDesktop from '../components/base_components/Desktop/InputSearch/InputSearchDesktop';
import SecondaryButtonDesktop from '../components/base_components/Desktop/Button/SecondaryButtonDesktop';
import MessageGetAccessResultDesktop from '../components/base_components/Desktop/Message/MessageGetAccessResultDesktop';
import CardImageWithButtonDesktop from '../components/base_components/Desktop/CardImage/CardImageWithButtonDesktop';
import CardImageNotFoundDesktop from '../components/base_components/Desktop/CardImage/CardImageNotFoundDesktop'
import PrimaryButtonDesktop from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';
import LineComponentsDesktop from '../components/base_components/Desktop/LineComponents/LineComponentsDesktop';
import TitleBottomDesktopSecondary from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktopSecondary';
import LabelDesktopPrimary from '../components/base_components/Desktop/Label/LabelDesktopPrimary';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 


//Mobile Item
import InputSearchMobileSecondary from '../components/base_components/InputSearch/Mobile/InputSearchMobileSecondary';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import CardImageWithButtonMobile from '../components/base_components/Card/CardMobile/CardImage/CardImageWithButtonMobile';
// import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
// import TitleBottomSecondary from '../components/base_components/TitleBottom/Mobile/TitleBottomSecondary';
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import MessageGetAccessResult from '../components/base_components/Message/Mobile/MessageGetAccessResult';
// import LabelMobileComponents from '../components/base_components/Label/Mobile/LabelMobileComponents';
import CardImageNotFoundMobile from '../components/base_components/Card/CardMobile/CardImage/CardImageNotFoundMobile'


//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'


//dummy Mobile
// const storeMobile = [];
const storeMobile = [
    {
        uuid      : "123xyz",
        image     : JakartaImage,
        titleCard : "SDN Islam Harapan Ibu",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur",
        link      : "/getaccessdetail",
        operator  : false,
    },
    {
        uuid      : "456xyz",
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDIT Insan Mandiri Jakarta",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur",
        link      : "/getaccessdetail",
        operator  : true,
    },
    {
        uuid      : "789xyz",
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SDS Islam Harapan Ibu",
        descrip   : "Jl. H. Banan No. 1, Kebayoran Lama",
        link      : "/getaccessdetail",
        operator  : true,
    },
    {
        uuid      : "123abc",
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDS Pangudi Luhur Jakarta",
        descrip   : "Jl. H. Nawi Raya No. 21, Cilandak",
        link      : "/getaccessdetail",
        operator  : true,
    },
    {
        uuid      : "456abc",
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SD Charitas",
        descrip   : "Jalan Swakarya C.13 A No. 1 4, Cilandak",
        link      : "/getaccessdetail",
        operator  : false,
    },

];

class GetAccess extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fieldResult: "",
        }
    }
    onClickRegisterHandle = () =>{
        window.location="/register";
    }
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageHeaderDesktop
                                name="Daftarkan Sekolah / Tempat Kursus"
                                color="#1A6EB2"
                                width="100%"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"0px"}}></div>
                            <InputSearchDesktop 
                                title="Cari sekolah/Tempat Kursus disini"
                                onChange={(e)=>{this.setState({fieldResult:e.target.value})}}
                                // onChange={(e)=>{console.log(e.target.value)}}
                                label="Masukannamasekolah"
                                placeholder="Masukan nama Sekolah/Kursusan"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"10px"}}></div>
                            {this.state.fieldResult === "" ?
                            <SecondaryButtonDesktop
                                name="CARI"
                                id="buttonsearchcontact"
                                background="#1A6EB2"
                                width="343px"
                                onClick={()=>{console.log("Seach Button")}}
                            /> : ""}
                            {this.state.fieldResult === "" ?
                            <div style={{marginTop:"300px"}}></div>
                            :""}
                        </section>
                        <section>
                                <div style={{marginTop:"-15px"}}></div>
                                {this.state.fieldResult ? <MessageGetAccessResultDesktop 
                                name={this.state.fieldResult} sumOf="5" fontSize="13px" /> : ""}
                        </section>
                        <section>
                            {this.state.fieldResult === "notfound" ? 
                            <div style={{marginTop: "90px"}}></div>:
                            <div style={{marginTop: "48px"}}></div>}
                            { storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" && this.state.fieldResult!=="notfound" ? 
                            <CardImageWithButtonDesktop store={storeMobile} /> : ""}
                            {this.state.fieldResult === "notfound" ? <CardImageNotFoundDesktop /> : ""}
                            <div style={{marginTop: "170px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Dapatkan Accesss"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"0px"}}></div>
                            <InputSearchMobileSecondary 
                                title="Cari sekolah/Tempat Kursus disini"
                                onChange={(e)=>{this.setState({fieldResult:e.target.value})}}
                                label="Masukannamasekolah"
                                placeholder="Masukan nama Sekolah/Kursusan"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"10px"}}></div>
                            {this.state.fieldResult === "" ?
                            <ButtonPrimary
                                name="CARI"
                                id="buttonsearchcontact"
                                background="#1A6EB2"
                                onClick={()=>{console.log("Seach Button")}}
                            /> : ""}
                            {this.state.fieldResult === "" ?
                            <div style={{marginTop:"300px"}}></div>
                            :""}
                        </section>
                        <section>
                                <div style={{marginTop:"-15px"}}></div>
                                {this.state.fieldResult ? <MessageGetAccessResult 
                                name={this.state.fieldResult} sumOf="5" fontSize="13px" /> : ""}
                        </section>
                        <section>
                            { storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" && this.state.fieldResult!=="notfound" ?
                                <div style={{marginTop: "36px"}}></div> : ""}
                            {this.state.fieldResult==="notfound" ? <div style={{marginTop: "76px"}}></div> : "" }
                            { storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" && this.state.fieldResult!=="notfound" ? 
                            <CardImageWithButtonMobile store={storeMobile} /> : ""}
                            {this.state.fieldResult==="notfound" ? <CardImageNotFoundMobile /> : ""}
                            <div style={{marginBottom: "70px"}}></div>
                        </section>

                    </OnMobile>
                </div>
            </>
        );
    }
}

export default GetAccess;
