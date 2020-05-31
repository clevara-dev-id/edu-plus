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
import CardImageTertiarayDesktop from '../components/base_components/Desktop/CardImage/CardImageTertiarayDesktop';
import PrimaryButtonDesktop from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';
import LineComponentsDesktop from '../components/base_components/Desktop/LineComponents/LineComponentsDesktop';
import TitleBottomDesktopSecondary from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktopSecondary';
import LabelDesktopPrimary from '../components/base_components/Desktop/Label/LabelDesktopPrimary';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 

//Mobile Item
// import CardImageMobileSecondary from '../components/base_components/Card/CardMobile/CardImage/CardImageMobileSecondary';
// import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import InputSearchMobileSecondary from '../components/base_components/InputSearch/Mobile/InputSearchMobileSecondary';
// import MobileHomePageTitle from '../components/base_components/TitlePage/TitleMobile/MobileHomePageTitle';
// import JumbotronMobileSecondary from '../components/base_components/Jumbotron/Mobile/JumbotronMobileSecondary';
// import ButtonLoadMore from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
// import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import CardImageTertiary from '../components/base_components/Card/CardMobile/CardImage/CardImageTertiary';
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
import TitleBottomSecondary from '../components/base_components/TitleBottom/Mobile/TitleBottomSecondary';
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import MessageGetAccessResult from '../components/base_components/Message/Mobile/MessageGetAccessResult';
import LabelMobileComponents from '../components/base_components/Label/Mobile/LabelMobileComponents';


//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'


//dummy Mobile
// const storeMobile = [];
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "SDN Islam Harapan Ibu",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur",
        link      : "/getaccessdetail",
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDIT Insan Mandiri Jakarta",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur",
        link      : "/getaccessdetail",
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SDS Islam Harapan Ibu",
        descrip   : "Jl. H. Banan No. 1, Kebayoran Lama",
        link      : "/getaccessdetail",
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDS Pangudi Luhur Jakarta",
        descrip   : "Jl. H. Nawi Raya No. 21, Cilandak",
        link      : "/getaccessdetail",
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SD Charitas",
        descrip   : "Jalan Swakarya C.13 A No. 1 4, Cilandak",
        link      : "/getaccessdetail",
    },

];

const storeMobile2 =[
    {name:"SD & MI", idContent: "mobileSDdanMI"},
    {name:"SMP & MTS", idContent: "mobileSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "mobileSmaSmkMa"},
    {name:"Universitas", idContent: "mobileUniv"},
];

//dummy Desktop
const storeDesktop = [
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "DKI Jakarta",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "Jawa Barat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "Jawa Tengah",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "Bali",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "Sumatra Utara",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "Kalimantan",
        descrip   : "15 Sekolah"
    }
];

const storeDesktop2 =[
    {name:"SD & MI", idContent: "desktopSDdanMI"},
    {name:"SMP & MTS", idContent: "desktopSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "desktopSmaSmkMa"},
    {name:"Universitas", idContent: "desktopUniv"},
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
                            <div style={{marginTop: "48px"}}></div>
                            { storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" && this.state.fieldResult!=="notfound" ? 
                            <CardImageTertiarayDesktop store={storeMobile} /> : ""}
                        </section>
                        <section>
                        {this.state.fieldResult === "notfound" ? 
                            <LabelDesktopPrimary
                                label="Mohon maaf data tidak ditemukan"
                            />
                            :""}
                        </section>
                        <section >
                            <div style={{marginTop: "48px"}}></div>
                            {storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" || this.state.fieldResult === "notfound" ? 
                                <LineComponentsDesktop 
                                marginTop="7px" 
                                border="1px solid #DBDBDB"
                                marginBottom="25px" /> : ""}
                            {storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" || this.state.fieldResult === "notfound" ? 
                                <TitleBottomDesktopSecondary 
                                name="Tidak Menemukan Data sekolah/Tempat kursus? Klik tombol dibawah untuk daftarkan sekolah/tempat kursus"
                                link=""
                                namelink=""
                                nameSecondary=""
                                fontSize="13px"
                                width="100%"
                            /> : ""}
                        </section>
                        <section>
                            { storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" || this.state.fieldResult === "notfound" ?
                            <PrimaryButtonDesktop
                                width="343px"
                                name="DAFTARKAN SEKOLAH/TEMPAT KURSUS"
                                onClick={()=>{this.onClickRegisterHandle()}}
                            /> : ""}
                            <div style={{marginTop: "70px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Hubungi Kami"
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
                            <div style={{marginTop: "48px"}}></div>
                            { storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" && this.state.fieldResult!=="notfound" ? 
                            <CardImageTertiary store={storeMobile} /> : ""}
                        </section>
                        <section>
                        {this.state.fieldResult === "notfound" ? 
                            <LabelMobileComponents
                                label="Mohon maaf data tidak ditemukan"
                            />
                            :""}
                        </section>
                        <section >
                            <div style={{marginTop: "48px"}}></div>
                            {storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" || this.state.fieldResult === "notfound" ? 
                                <LineComponents marginTop="7px" marginBottom="25px" /> : ""}
                            {storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" || this.state.fieldResult === "notfound" ? 
                                <TitleBottomSecondary 
                                name="Tidak Menemukan Data sekolah/Tempat kursus? Klik tombol dibawah untuk daftarkan sekolah/tempat kursus"
                                link=""
                                namelink=""
                                nameSecondary=""
                                fontSize="13px"
                            /> : ""}
                        </section>
                        <section>
                            { storeMobile!==null && storeMobile.length > 0 && this.state.fieldResult!=="" || this.state.fieldResult === "notfound" ?
                            <ButtonPrimary
                                name="DAFTARKAN SEKOLAH/TEMPAT KURSUS"
                                id="buttonmesaageFormcontact"
                                background="#1A6EB2"
                                onClick={()=>{this.onClickRegisterHandle()}}
                            /> : ""}
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default GetAccess;
