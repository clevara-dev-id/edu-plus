import React, { Component } from 'react';
import $ from 'jquery'

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';

//Mobile Item
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import CardImageSingleMobile from '../components/base_components/Card/CardMobile/SingleImage/CardImageSingleMobile';
import LabelMobileSecondary from '../components/base_components/Label/Mobile/LabelMobileSecondary';
import LabelMobileSecondaryEvent from '../components/base_components/Label/Mobile/LabelMobileSecondaryEvent';
import TitlePageWithAddress from '../components/base_components/TitlePage/TitleMobile/TitlePageWithAddress';
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
import MobileIconWithTitle from '../components/base_components/Icon/Mobile/MobileIconWithTitle';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import MobileDescription from '../components/base_components/Description/Mobile/MobileDescription';
import PriceListMobile from '../components/base_components/PriceList/Mobile/PriceListMobile';
import PrimaryFacility from '../components/base_components/Facility/MobileFacility/PrimaryFacility';
import OtherFacility from '../components/base_components/Accordion/Mobile/AccordionComponents';
import Ekstrakulikuler from '../components/base_components/Facility/MobileFacility/PrimaryFacility';
import InformasiSekolah from '../components/base_components/Footer/Mobile/InformasiSekolah';
import MapsComponents from '../components/base_components/MapsComponents/Mobile/MapsComopnets';
import TitleBottomSecondary from '../components/base_components/TitleBottom/Mobile/TitleBottomSecondary';
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import MobileDescriptionWithIcon from '../components/base_components/Description/Mobile/MobileDescriptionWithIcon';


//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'


//dummy Mobile
// const storeMobile = [];
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "DKI Jakarta",
        descrip   : "15 Sekolah"
    },
];

const storeMobileTwo =[
    {
        name:"021 - 525 8721",
        icon:"phone",
        iconColor:"",
        fontFamily:"Feather",
        size:"",
    },
    {
        name:"sdsumbangsih@mail.com",
        icon:"mail",
        iconColor:"",
        fontFamily:"Feather",
        size:""
    },
    {
        name:"sdsumbangsih.sch.id",
        icon:"globe",
        iconColor:"",
        fontFamily:"Feather",
        size:""
    }
];

const storeMobileThree = [
    {   title:"Uang Pangkal", 
        description : "Rp. 3,000,000"
    },
    {   title:"SPP Bulanan", 
        description : "Rp. 550,000"
    },
    {   title:"Uang Kegiatan", 
        description : "Rp. 1,550,000"
    },
    {   title:"Uang Buku", 
        description : "Rp. 1,550,000"
    },
    {   title:"Potongan / Diskon", 
        description : "Rp. 1,550,000"
    },
];

const storeMobileFour = [
    {   title:"Kepala Sekolah", 
        description : "Anis Mulyanis S.pd"
    },
    {   title:"Jumlah Siswa", 
        description : "451"
    },
    {   title:"Akreditasi", 
        description : "A"
    },
    {   title:"Status", 
        description : "swasta"
    },
    {   title:"Jam Sekolah", 
        description : "06:30 - 12:00"
    },
];

const storeMobileFive = [
    {   title:"Pendaftaran", 
        description : "24-29 Mei 2020"
    },
    {   title:"Pengumuman", 
        description : "31 Mei 2020"
    },
    {   title:"Daftar Ulang", 
        description : "17 - 18 Juni 2020"
    },
];



const storeMobileSeven =[
    {
        name:"Perpustakaan",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:"",
    },
    {
        name:"Laboratorium",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:""
    },
    {
        name:"Lapangan Olahraga",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:""
    },
    {
        name:"Air Conditioning",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:""
    },
];

const storeMobileEight =[
    {
        name:"Sepak Bola",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:"",
    },
    {
        name:"Bola Voli",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:""
    },
    {
        name:"Pramuka",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:""
    },
    {
        name:"Bola Basket",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:""
    },
];

const storeMobile2 =[
    {name:"SD & MI", idContent: "mobileSDdanMI"},
    {name:"SMP & MTS", idContent: "mobileSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "mobileSmaSmkMa"},
    {name:"Universitas", idContent: "mobileUniv"},
];

const storeMobilebadges =[    
    {name:"Kontak Sekolah", idContent: "mobileSchoolsContactId"},
    {name:"Informasi Sekolah", idContent: "mobileDescriptionId"},
    {name:"Biaya Sekolah", idContent: "studentConstId"},
    {name:"Pendaftaran", idContent: "registerTimeId"},
    // {name:"Jurusan", idContent: "mobileDirectionId"},
    {name:"Fasilitas", idContent: "mobileprimaryFasilityId"},
    {name:"Ekstrakulikuler", idContent: "extracurricularContentId"}

];

const store3 = [
    {iconname:"snowflake-o", name: "Air conditioning", fontFamily : "FontAwesome"}, 
    {iconname:"desktop", name: "Lab. Komputer", fontFamily : "FontAwesome"},
    {iconname:"wifi", name: "Akses Internet", fontFamily : "FontAwesome"}, 
]

const store4 =[
    {name:"Lapangan Olahraga"},
    {name:"Tempat Ibadah"},
    {name:"Kantin"}
];

const store5 = {
    center: {
        lat: -6.2260798,
        lng: 106.8536369
    },
    zoom: 15,
    title:"Alamat Sekolah",
    addr : "jl. sma barat no 4, clilitan, Kramat jati, jakarta timur"
};

const store6 = [
    {iconname:"camera", name: "Fotografi", fontFamily : "FontAwesome"}, 
    {iconname:"soccer-ball-o", name: "Futsal", fontFamily : "FontAwesome"},
    {iconname:"dribbble", name: "BasketBall", fontFamily : "FontAwesome"}, 
]

const store7 =[
    {name:"Orchestra"},
    {name:"Paskibra"},
    {name:"Tari Saman"}
];

const store8 =[
    {name:"Informasi Sekolah", idContent: "mobileDescriptionId"},
    {name:"MAPS", idContent: "mapsContentId"},
    {name:"Biaya Pendidikan", idContent: "studentConstId"},
    {name:"Pendaftaran", idContent: "registerTimeId"},
    {name:"Jurusan", idContent: "majorsId"},
    {name:"Fasilitas", idContent: "primaryFasilityId"},
    {name:"Ekstrakulikuler", idContent: "extracurricularContentId"}
];

const store9 = [
    {   title:"Alamat", 
        description : "Jl.Rawa Belong No.2 , Kebon Jeruk, Jakarta Barat"
    },
    {   title:"Kurikulum Sekolah", 
        description : "International"
    },
    {   title:"Telepon", 
        description : "021-26678321"
    },
    {   title:"Web", 
        description : "www.smainternational.ac.id"
    },
    {   title:"Email", 
        description : "smainternational@mail.ac.id"
    },
    {   title:"Web", 
        description : "sdwidurijaya@blogspot.com"
    },
    {   title:"Jam Sekolah", 
        description : "06:30 - 12:00"
    },
    {   title:"Kepala Sekolah", 
        description : "Anita"
    },
    {   title:"Jumlah Siswa", 
        description : "2000 Siswa"
    }
];

const store10 = [
    {   title:"Uang Pangkal", 
        description : "Rp. 3,000,000"
    },
    {   title:"SPP Bulanan", 
        description : "Rp. 550,000"
    },
    {   title:"Uang Kegiatan", 
        description : "Rp. 1,550,000"
    },
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


class GetAccessDetail extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            opsSekolah: false,
        }
    }
    onClickGetAccessHandle = () =>{
        window.location="/getaccessinput";
    }
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
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[
                                    {name:"Detail Sekolah"},
                                    {name:"Dapatkan Akses", link:"#"},
                                ]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <CardImageSingleMobile store={storeMobile} />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <TitlePageWithAddress
                                title="SD Sumbangsih"
                                text="Jalan Duren Bangka No. 36, Bangka, Mampang Prapatan, Jakarta Selatan, DKI Jakarta"
                            />
                            <LineComponents 
                                marginTop="-20px"
                            />
                            <MobileIconWithTitle 
                                name="Kurikulum K-13"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BadgesGroupSecondary
                                store={storeMobilebadges}
                            />
                        </section>
                        <section style={{display: "none"}} id="mobileSchoolsContactId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={storeMobileTwo}
                            />
                        </section>
                        <section style={{display: "none"}} id="mobileDescriptionId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription store={storeMobileFour} />
                        </section>
                        <section style={{display: "none"}} id="studentConstId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription store={storeMobileThree} />
                        </section>
                        <section style={{display: "none"}} id="registerTimeId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription store={storeMobileFive} />
                        </section>
                        {/* <section style={{display: "none"}} id="mobileDirectionId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={storeMobileSix}
                            />
                        </section> */}
                        <section style={{display: "none"}} id="mobileprimaryFasilityId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={storeMobileSeven}
                            />
                        </section>
                        <section style={{display: "none"}} id="extracurricularContentId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={storeMobileEight}
                            />
                        </section>
                        <section >
                            <div style={{marginTop: "48px"}}></div>
                               <LineComponents marginTop="7px" marginBottom="25px" /> 
                               {this.state.opsSekolah ? 
                               <TitleBottomSecondary 
                                name="Sekolah ini sudah memiliki Operator. Klik tombol"
                                link=""
                                namelink=" login "
                                nameSecondary="untuk mengubah atau menambahkan data di sekolah ini"
                                fontSize="13px"
                                textAlign="justify"/> : 
                                <TitleBottomSecondary 
                                name="Sekolah ini belum terverifikasi. Klik tombol"
                                link=""
                                namelink=" dapatkan akses "
                                nameSecondary="untuk mengubah atau menambahkan data di sekolah ini"
                                fontSize="13px"
                                textAlign="justify"/>}
                        </section>
                        <section>
                            {this.state.opsSekolah ? 
                                <ButtonPrimary
                                    name="LOGIN"
                                    id="buttonmesaageFormcontact"
                                    background="#1A6EB2"
                                    onClick={()=>{console.log("get Login")}}
                                /> :
                                <ButtonPrimary
                                    name="DAPATKAN AKSES"
                                    id="buttonmesaageFormcontact"
                                    background="#1A6EB2"
                                    onClick={()=>{this.onClickGetAccessHandle()}}
                            /> }
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default GetAccessDetail;
