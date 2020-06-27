import React, { Component } from 'react';
import { connect } from 'react-redux';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import CardImageTertiarayDesktop from '../components/base_components/Desktop/CardImage/CardImageTertiarayDesktop';
import SingleDesktopBadges from '../components/base_components/Desktop/Badges/SingleDesktopBadges';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import DesktopDescriptionWithIcon from '../components/base_components/Desktop/Description/DesktopDescriptionWithIcon';
import DesktopDescription from '../components/base_components/Desktop/Description/DesktopDescription';
import TitlePageWithAddressDesktop from '../components/base_components/Desktop/TitlePage/TitlePageWithAddressDesktop';
import DesktopIconWithTitle from '../components/base_components/Desktop/Icon/DesktopIconWithTitle ';
import LineComponentsDesktop from '../components/base_components/Desktop/LineComponents/LineComponentsDesktop';
import TitileCardDesktopViewAll from '../components/base_components/Desktop/TitlePage/TitileCardDesktopViewAll';
import CarouselDesktopSecondary from '../components/base_components/Desktop/Carousel/CarouselDesktopSecondary';
import ButtonAnotherSchoolsDesktop  from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';


//Mobile
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import MobileDescription from '../components/base_components/Description/Mobile/MobileDescription';
import CarouselMobileSecondary from '../components/base_components/Carousel/CarouselMobile/CarouselMobileSecondary';
import TitleCardImageScroll from '../components/base_components/TitlePage/TitleMobile/TitleCardImageScroll';
import CardImageMobileScroll from '../components/base_components/Card/CardMobile/CardImage/CardImageMobileScroll';
import MobileDescriptionWithIcon from '../components/base_components/Description/Mobile/MobileDescriptionWithIcon';
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import TitlePageWithAddress from '../components/base_components/TitlePage/TitleMobile/TitlePageWithAddress';
import MobileIconWithTitle from '../components/base_components/Icon/Mobile/MobileIconWithTitle';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';

//Detail Fetch Redux
import { 
    detailFetchData, 
    fetchDataCity,
} from './redux/actions/detail';


//Import Image Desktop
import SlideImageDesktop1 from '../components/asset/images/Detail/sekolah.png';

//Import Image Mobile
import slideImage1 from '../components/asset/images/CarouselSlider/slider1.png';
import slideImage2 from '../components/asset/images/CarouselSlider/slider2.png';
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

//Image For School List
import ImageSchool from '../asset/image/SchoolLists/schoolsILustrator.png';


//dummy Mobile
const mobileBadgesStore =[
    {name:"Kontak Sekolah", idContent: "mobileSchoolsContactId"},
    {name:"Informasi Sekolah", idContent: "mobileDescriptionId"},
    {name:"Biaya Sekolah", idContent: "studentConstId"},
    {name:"Pendaftaran", idContent: "registerTimeId"},
    {name:"Fasilitas", idContent: "mobileprimaryFasilityId"},
    {name:"Ekstrakulikuler", idContent: "extracurricularContentId"}
];

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

//dummy desktop

const DesktopSlider = [
    {image : SlideImageDesktop1},
    // {image : SlideImageDesktop1},
    // {image : SlideImageDesktop1},
    // {image : SlideImageDesktop1}
];

const storeDesktop2 =[
    {name:"Kontak Sekolah", idContent: "desktopSchoolsContactId"},
    {name:"Informasi Sekolah", idContent: "desktopDescriptionId"},
    {name:"Biaya Sekolah", idContent: "desktopstudentConstId"},
    {name:"Pendaftaran", idContent: "desktopregisterTimeId"},
    {name:"Fasilitas", idContent: "desktopprimaryFasilityId"},
    {name:"Ekstrakulikuler", idContent: "desktopextracurricularContentId"}
];

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          favoriteData:[],
        };
    }
    componentDidMount=async ()=>{
        this.getDetailData(1);
        this.getCityData(1);
    }
    getDetailData=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('uuid');
        const data = await this.props.fetchData(`http://localhost:8000/api/schools/${myParamId}`);
    }
    getCityData=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('schid');
        const myEduStage = urlParams.get('edustage');
        let ParameterPostData = {
            "stage":myEduStage,
            "status":"1",
            "province":myParamId.substr(0,2),
            "regency":myParamId,
        }
        const data = await this.props.fetchSchoolsCity(`http://localhost:8000/api/search/?page=${page}`,ParameterPostData);
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        // let schoolAddresss=[
        //     this.props.detail.address,
        //     this.props.
        //  ];
        let newArraySchoolsDetail=[], schoolsDetailPageIndex=0, imageForSchools;
        this.props.getDataSchools.forEach((newData, index)=>{
            if(newData.images!==undefined && newData.images.length>0){
                imageForSchools=newData.image;
            }
            else{
                imageForSchools=ImageSchool;
            }
            newArraySchoolsDetail[schoolsDetailPageIndex]={
                image     : imageForSchools,
                titleCard : newData.name,
                descrip   : newData.address,
                link      : `#`,
            }
            schoolsDetailPageIndex++;
        
        });
        // console.log(newArraySchoolsDetail);
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
                                title={this.props.detail.name}
                                text={[
                                    this.props.detail.address,
                                    this.props.detail.village_id,
                                    this.props.detail.district_id,
                                    this.props.detail.regency_id,
                                    this.props.detail.province_id,
                                ].join(", ")}
                            />
                            <LineComponentsDesktop 
                                // marginTop="-20px"
                            />
                            <div style={{marginBottom: "20px"}} />
                            <DesktopIconWithTitle 
                                name={this.props.detail.status === 1 ? "Kurikulum K-13" : this.props.detail.curriculum}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section>
                            <SingleDesktopBadges
                                store={storeDesktop2}
                            />
                        </section>
                        <section style={{display: "none"}} id="desktopSchoolsContactId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescriptionWithIcon
                                store={[
                                    {
                                        name:this.props.detail.phone_number ? this.props.detail.phone_number : "[Data Belum di Update]",
                                        icon:"phone",
                                        iconColor:"",
                                        fontFamily:"Feather",
                                        size:"",
                                    },
                                    {
                                        name:this.props.detail.email ? this.props.detail.email : "[Data Belum di Update]",
                                        icon:"mail",
                                        iconColor:"",
                                        fontFamily:"Feather",
                                        size:""
                                    },
                                    {
                                        name:this.props.detail.website ? this.props.detail.website : "[Data Belum di Update]",
                                        icon:"globe",
                                        iconColor:"",
                                        fontFamily:"Feather",
                                        size:""
                                    }
                                ]}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopDescriptionId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescription
                                store={[
                                    {   title:"Kepala Sekolah", 
                                        description : this.props.detail.headmaster ? this.props.detail.headmaster : "[Data Belum di Update]"
                                    },
                                    {   title:"Jumlah Siswa", 
                                        description : this.props.detail.total_student ? this.props.detail.total_student : "[Data Belum di Update]"
                                    },
                                    {   title:"Akreditasi", 
                                        description : this.props.detail.accreditation ? this.props.detail.accreditation : "[Data Belum di Update]"
                                    },
                                    {   title:"Status", 
                                        description : this.props.detail.status === 1 ? "Negeri" : this.props.detail.status === 0 ? "Swasta" : "[Data Belum di Update]"
                                    },
                                    {   title:"Jam Sekolah", 
                                        description : this.props.detail.schools_hour ? this.props.detail.schools_hour : "[Data Belum di Update]"
                                    },
                                ]}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopstudentConstId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescription
                                store={storeMobileThree}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopregisterTimeId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescription
                                store={storeMobileFive}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopprimaryFasilityId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescriptionWithIcon
                                store={storeMobileSeven}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopextracurricularContentId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescriptionWithIcon
                                store={storeMobileEight}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <TitileCardDesktopViewAll
                                name="Daftar Sekolah Lainnya"
                                link="#"
                                linkName="Lihat Semua"
                            />
                        </section>
                        <section>
                            <CardImageTertiarayDesktop 
                                store={newArraySchoolsDetail.slice(0,6)}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <ButtonAnotherSchoolsDesktop
                                name="CARI SEKOLAH LAINNYA"
                                width="277px"
                            />
                            <div style={{marginTop: "79px"}}></div>
                        </section>
                    </OnDesktop>
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
                            <BadgesGroupSecondary store={mobileBadgesStore} />
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

const mapStateToProps = (state) => {
    return {
        detail: state.detail,
        getDataSchools: state.getCityDataSchools,
        hasError: state.detailHaveError,
        isLoading: state.detailAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(detailFetchData(url, data)),
        fetchSchoolsCity: (url, data) => dispatch(fetchDataCity(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
