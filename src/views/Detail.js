import React, { Component } from 'react';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Mobile
import PrimaryFacility from '../components/base_components/Facility/MobileFacility/PrimaryFacility';
import OtherFacility from '../components/base_components/Accordion/Mobile/AccordionComponents';
import Ekstrakulikuler from '../components/base_components/Facility/MobileFacility/PrimaryFacility';
import InformasiSekolah from '../components/base_components/Footer/Mobile/InformasiSekolah';
import MapsComponents from '../components/base_components/MapsComponents/Mobile/MapsComopnets';
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import MobileDescription from '../components/base_components/Description/Mobile/MobileDescription';
import PriceListMobile from '../components/base_components/PriceList/Mobile/PriceListMobile';
import ButtonGray from '../components/base_components/Button/ButtonMobile/ButtonGray';
import CarouselMobileSecondary from '../components/base_components/Carousel/CarouselMobile/CarouselMobileSecondary';
import TitleDetail from '../components/base_components/TitlePage/TitleMobile/TitleDetail';
import TitleCardImageScroll from '../components/base_components/TitlePage/TitleMobile/TitleCardImageScroll';
import CardImageMobileScroll from '../components/base_components/Card/CardMobile/CardImage/CardImageMobileScroll';
import MobileDescriptionWithIcon from '../components/base_components/Description/Mobile/MobileDescriptionWithIcon';
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import TitlePageWithAddress from '../components/base_components/TitlePage/TitleMobile/TitlePageWithAddress';
import MobileIconWithTitle from '../components/base_components/Icon/Mobile/MobileIconWithTitle';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';



//Import Image
import slideImage1 from '../components/asset/images/CarouselSlider/slider1.png';
import slideImage2 from '../components/asset/images/CarouselSlider/slider2.png';
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'


//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "SD Al-Azhar Syifa Budi",
        descrip   : "Jalan Kemang Raya No. 3"
    },
    {
        image     : JakartaImage,
        titleCard : "SDIT Insan Mandiri Jakarta",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SDS Islam Harapan Ibu",
        descrip   : "Jl. H. Banan No. 1, Kebayoran Lama"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDS Pangudi Luhur Jakarta",
        descrip   : "Jl. H. Nawi Raya No. 21, Cilandak"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SD Charitas",
        descrip   : "Jalan Swakarya C.13 A No. 1 4, Cilandak"
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

const storeMobileSix =[
    {
        name:"IPA",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:"",
    },
    {
        name:"IPS",
        icon:"check-circle",
        iconColor:"",
        fontFamily:"Feather",
        size:""
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


const store = [
    {image : slideImage1},
    {image : slideImage2},
    {image : slideImage1},
    {image : slideImage2}
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
    {name:"Kontak Sekolah", idContent: "mobileSchoolsContactId"},
    {name:"Biaya Sekolah", idContent: "studentConstId"},
    {name:"Informasi Sekolah", idContent: "mobileDescriptionId"},
    {name:"Pendaftaran", idContent: "registerTimeId"},
    {name:"Jurusan", idContent: "mobileDirectionId"},
    {name:"Fasilitas", idContent: "mobileprimaryFasilityId"},
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
    {   title:"Uang Buku", 
        description : "Rp. 1,550,000"
    },
    {   title:"Potongan / Diskon", 
        description : "Rp. 1,550,000"
    },
];




class Detail extends Component {
    render() {
        return (
            <>
                
                <div>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Daftar Sekolah"},{name:"Detail Sekolah", link:"#"}]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "10px"}} />
                            <CarouselMobileSecondary store={store} />
                        </section>
                        {/* <section>
                            <div style={{marginTop: "18px"}} />
                            <TitleDetail name="SMA INTERNATIONAL" />
                        </section> */}
                        <section>
                            <div style={{marginTop:"38px"}}></div>
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
                            <BadgesGroupSecondary store={store8} />
                        </section>
                        <section style={{display: "none"}} id="mobileSchoolsContactId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={storeMobileTwo}
                            />
                        </section>
                        <section style={{display: "none"}} id="studentConstId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription store={storeMobileThree} />
                        </section>
                        <section style={{display: "none"}} id="mobileDescriptionId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription store={storeMobileFour} />
                        </section>
                        <section style={{display: "none"}} id="registerTimeId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription store={storeMobileFive} />
                        </section>
                        {/* <section style={{display: "none"}} id="mapsContentId" className="tabcontendetail">
                            <MapsComponents store={store5} />
                        </section> */}
                        <section style={{display: "none"}} id="mobileDirectionId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={storeMobileSix}
                            />
                        </section>
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
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <TitleCardImageScroll
                                name="Daftar Sekolah Lainnya"
                                link="#"
                                linkName="Lihat Semua"
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <CardImageMobileScroll store={storeMobile}  />
                        </section>
                        <section>
                            <div style={{marginTop: "0px"}}></div>
                            <ButtonSecondary
                                name="Cari Sekolah lainnya"
                                id="buttonDetailForm"
                                width="227px"
                                onClick={()=>{console.log("this is button")}}
                            />
                            <div style={{marginTop: "25px"}}></div>
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}



export default Detail;