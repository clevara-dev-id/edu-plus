import React, { Component } from 'react';
import $ from 'jquery'

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import SingleDesktopBadges from '../components/base_components/Desktop/Badges/SingleDesktopBadges';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import DesktopDescriptionWithIcon from '../components/base_components/Desktop/Description/DesktopDescriptionWithIcon';
import DesktopDescription from '../components/base_components/Desktop/Description/DesktopDescription';
import TitlePageWithAddressDesktop from '../components/base_components/Desktop/TitlePage/TitlePageWithAddressDesktop';
import DesktopIconWithTitle from '../components/base_components/Desktop/Icon/DesktopIconWithTitle ';
import LineComponentsDesktop from '../components/base_components/Desktop/LineComponents/LineComponentsDesktop';
import CarouselDesktopSecondary from '../components/base_components/Desktop/Carousel/CarouselDesktopSecondary';
import PrimaryButtonDesktop from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';
import SecondaryButtonDesktop from '../components/base_components/Desktop/Button/SecondaryButtonDesktop';
import TitleBottomDesktopSecondary from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktopSecondary';

//Mobile Item
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import CardImageSingleMobile from '../components/base_components/Card/CardMobile/SingleImage/CardImageSingleMobile';
import TitlePageWithAddress from '../components/base_components/TitlePage/TitleMobile/TitlePageWithAddress';
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
import TitleBotttomTertiary from '../components/base_components/TitleBottom/Mobile/TitleBotttomTertiary';
import FormGetAccessMobile from '../components/base_components/Form/FormGetAccess/FormGetAccessMobile';

//Import Image Desktop
import SlideImageDesktop1 from '../components/asset/images/Detail/sekolah.png';


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

const storeMobile2 =[
    {name:"SD & MI", idContent: "mobileSDdanMI"},
    {name:"SMP & MTS", idContent: "mobileSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "mobileSmaSmkMa"},
    {name:"Universitas", idContent: "mobileUniv"},
];

const storeMobilebadges =[
    {name:"Informasi Sekolah", idContent: "mobileDescriptionId"},
    {name:"MAPS", idContent: "mapsContentId"},
    {name:"Biaya Pendidikan", idContent: "studentConstId"},
    {name:"Pendaftaran", idContent: "registerTimeId"},
    {name:"Jurusan", idContent: "majorsId"},
    {name:"Fasilitas", idContent: "primaryFasilityId"},
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

//dummy desktop

const DesktopSlider = [
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1}
];

class GetAccessInput extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            opsSekolah: false,
        }
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
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Daftar Sekolah"},{name:"Detail Sekolah", link:"#"}]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "10px"}} />
                            <CarouselDesktopSecondary store={DesktopSlider} />
                        </section>
                        <section>
                            <div style={{marginTop:"38px"}}></div>
                            <TitlePageWithAddressDesktop
                                title="SD Sumbangsih"
                                text="Jalan Duren Bangka No. 36, Bangka, Mampang Prapatan, Jakarta Selatan, DKI Jakarta"
                            />
                            <LineComponentsDesktop 
                                // marginTop="-20px"
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section >
                            <div style={{marginTop: "48px"}}></div>
                               <LineComponentsDesktop marginTop="7px" marginBottom="25px" /> 
                               {this.state.opsSekolah ? 
                               <TitleBottomDesktopSecondary  
                                width="100%"
                                name="Sekolah ini sudah memiliki Operator. Klik tombol"
                                link=""
                                namelink=" login "
                                nameSecondary="untuk mengubah atau menambahkan data di sekolah ini"
                                fontSize="13px"
                                textAlign="center"/> : 
                                <TitleBottomDesktopSecondary 
                                width="100%"
                                name="Sekolah ini belum terverifikasi. Klik tombol"
                                link=""
                                namelink=" dapatkan akses "
                                nameSecondary="untuk mengubah atau menambahkan data di sekolah ini"
                                fontSize="13px"
                                textAlign="center"/>}
                        </section>
                        <section>
                            {this.state.opsSekolah ? 
                                <PrimaryButtonDesktop
                                    name="LOGIN"
                                    id="buttonmesaageFormcontact"
                                    width="343px"
                                    onClick={()=>{console.log("get Login")}}
                                /> :
                                <SecondaryButtonDesktop
                                    name="DAPATKAN AKSES"
                                    id="buttonmesaageFormcontact"
                                    background="#1A6EB2"
                                    onClick={()=>{this.onClickGetAccessHandle()}}
                            /> }
                            <div style={{marginBottom: "40px"}} />
                        </section>
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
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <FormGetAccessMobile 
                                title="Atau Kirimkan pesan anda"
                                onChangeName={(e)=>{console.log(e.target.value)}}
                                onChangePosition={(e)=>{console.log(e.target.value)}}
                                onChangeEmail={(e)=>{console.log(e.target.value)}}
                                onChangePhone={(e)=>{console.log(e.target.value)}}
                                onClickButton={()=>{console.log("Button Is Activated !")}}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "48px"}}></div>
                                <TitleBotttomTertiary 
                                name="Pihak Eduplus melalui email"
                                link=""
                                namelink=" halo@eduplus.com "
                                nameSecondary="atau no. telp. "
                                linkSecondary=""
                                namelinkSecondary=" +62 999 9999 9999 "
                                nameTertiary="akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih"
                                fontSize="13px"
                                textAlign="justify"/>
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default GetAccessInput;
