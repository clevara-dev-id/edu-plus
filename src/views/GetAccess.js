import React, { Component } from 'react';
import $ from 'jquery'

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';

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
            fieldRsult: "",
        }
    }
    onClickRegisterHandle = () =>{
        window.location="/register";
    }
    // componentDidMount = ()=>{
    //     this.handleOnChange();
    // }
    // componentDidUpdate = () =>{
    //     this.handleOnChange();
    // }
    handleOnChange = () => {
        $(document).ready(()=>{
            $("#firstLoadItemFromGetAccess").hide();
        }); 
    }
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
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
                            <div style={{marginTop:"25px"}}></div>
                            <InputSearchMobileSecondary 
                                title="Cari sekolah/Tempat Kursus disini"
                                onChange={(e)=>{this.setState({fieldRsult:e.target.value}); this.handleOnChange()}}
                                label="Masukannamasekolah"
                                placeholder="Masukan nama Sekolah/Kursusan"
                            />
                            {this.state.fieldRsult ? <MessageGetAccessResult 
                            name={this.state.fieldRsult} sumOf="5" fontSize="13px" /> : ""}
                            <div id="firstLoadItemFromGetAccess" style={{marginTop:"300px"}}></div>
                        </section>
                        <section id="mobileSDdanMI" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            { storeMobile!==null && storeMobile.length > 0 && this.state.fieldRsult!=="" && this.state.fieldRsult!=="notfound" ? 
                            <CardImageTertiary store={storeMobile} /> : ""}
                        </section>
                        <section>
                        {this.state.fieldRsult === "notfound" ? 
                            <LabelMobileComponents
                                label="Mohon maaf data tidak ditemukan"
                            />
                            :""}
                        </section>
                        <section >
                            <div style={{marginTop: "48px"}}></div>
                            {storeMobile!==null && storeMobile.length > 0 || this.state.fieldRsult === "notfound" ? 
                                <LineComponents marginTop="7px" marginBottom="25px" /> : ""}
                            {storeMobile!==null && storeMobile.length > 0 || this.state.fieldRsult === "notfound" ? 
                                <TitleBottomSecondary 
                                name="Tidak Menemukan Data sekolah/Tempat kursus? Klik tombol dibawah untuk daftarkan sekolah/tempat kursus"
                                link=""
                                namelink=""
                                nameSecondary=""
                                fontSize="13px"
                            /> : ""}
                        </section>
                        <section id="mobileSDdanMI" className="tabcontendetail">
                            { storeMobile!==null && storeMobile.length > 0 || this.state.fieldRsult === "notfound" ?<ButtonPrimary
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
