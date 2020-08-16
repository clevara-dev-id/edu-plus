import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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

// const getUrlBackend = "http://localhost:8000/"
// const getUrlBackend = "http://139.180.184.84/"
// const getUrlBackend = "https://admin.edukasiplus.com/"
const getUrlBackend = "https://backend.edukasiplus.com/"


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          favoriteData:[],
        };
    }
    componentDidMount=async ()=>{
        this.getDetailData(1);
        // this.getCityData(1);
    }
    getDetailData=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('uuid');
        const data = await this.props.fetchData(`${getUrlBackend}api/schools/${myParamId}`);
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
        const data = await this.props.fetchSchoolsCity(`${getUrlBackend}api/search/?page=${page}`,ParameterPostData);
    }
    handleClickViewAll=async()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamPageFrom = urlParams.get('page_from');
        const myParamSchID = urlParams.get('schid');
        const myParamEducationStage = urlParams.get('edustage');
        let status="";
        if(myParamPageFrom.length > 1){
            this.props.detail.status === 1 ? status="negeri" : status="swasta"; 
            if(myParamPageFrom === "searchresult"){
                window.location.href=`/searchresult?district_id=${this.props.detail.district_id_number}&&educationstage=${myParamEducationStage}&&status=${status}`;
            }
            if(myParamPageFrom === "favoritedetail"){
                window.location.href=`/favoritedetail?id=${myParamSchID}`;
            }  
        }
    }
    searchAnotherSchools=()=>{
        window.location.href="/search";
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        let newArraySchoolsDetail=[], schoolsDetailPageIndex=0, imageForSchools;
        let newArrayCost=[];
        let newArrayImage=[];
        let newArrayFacilities=[];
        let newArrayExtracurricular=[];
        let newArrayRegistration=[];
        const urlParams = new URLSearchParams(window.location.search);
        const myParamUUID = urlParams.get('uuid');
        const myParamSchID = urlParams.get('schid');
        const myParamEducationStage = urlParams.get('edustage');
        const myParamPageFrom = urlParams.get('page_from');
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
                link      : `/detail?uuid=${newData.uuid}&&schid=${myParamSchID}&&edustage=${myParamEducationStage}&&page_from=${myParamPageFrom}`,
            }
            schoolsDetailPageIndex++;
        
        });

        //Cost
        // if(this.props.schoolsCost !==null){
        //     this.props.schoolsCost.map((data, index)=>{
        //         const newCost = parseInt(data.cost);
        //         newArrayCost[index]={   
        //             title:data.name, 
        //             description : newCost.toLocaleString("id-ID", {style: "currency", currency: "IDR"})
        //         }
        //     });
        // }
        
        if(this.props.schoolsCost !==null){
            const downPayment = parseInt(this.props.schoolsCost.etf_cost);
            const monthlyFee = parseInt(this.props.schoolsCost.spp_cost);
            const advenceCost = parseInt(this.props.schoolsCost.activities_cost);
            const otherCostForBook = parseInt(this.props.schoolsCost.book_cost);
            newArrayCost=[
                {   
                    title:"Uang Pangkal", 
                    description : Number.isInteger(downPayment) ? downPayment.toLocaleString("id-ID", {style: "currency", currency: "IDR"}) :"-"
                },
                {   
                    title:"SPP Bulanan", 
                    description : Number.isInteger(monthlyFee) ? monthlyFee.toLocaleString("id-ID", {style: "currency", currency: "IDR"}) :"-"
                },
                {   
                    title:"Uang Kegiatan", 
                    description : Number.isInteger(advenceCost) ? advenceCost.toLocaleString("id-ID", {style: "currency", currency: "IDR"}) :"-"
                },
                {   
                    title:"Uang Buku", 
                    description : Number.isInteger(otherCostForBook) ? otherCostForBook.toLocaleString("id-ID", {style: "currency", currency: "IDR"}) :"-"
                },
                {   
                    title:"Potongan / Diskon", 
                    description : this.props.schoolsCost.discount ? this.props.schoolsCost.discount : "-"
                }
            ];
        }
        

        //Registration newArrayRegistration
        // if(this.props.schoolsRegistration !==null){
        //     this.props.schoolsRegistration.map((data, index)=>{
        //         // const newCost = parseInt(data.cost);
        //         newArrayRegistration[index]={   
        //             title:data.name, 
        //             description : data.registration
        //         }
        //     });
        // }

        if(this.props.schoolFacilities.length > 0){
            this.props.schoolFacilities.map((data, index)=>{
                newArrayFacilities[index]= {
                    name:data.name,
                    icon:"check-circle",
                    fontFamily:"Feather",
                }
            });
        }
        if(this.props.schoolsExtracurricular.length > 0){
            this.props.schoolsExtracurricular.map((data, index)=>{
                newArrayExtracurricular[index]= {
                    name:data.name,
                    icon:"check-circle",
                    fontFamily:"Feather",
                }
            });
        }
        // console.log(this.props.schoolsExtracurricular);
    //     {   title:"Uang Pangkal", schoolFacilities
    //     description : "Rp. 3,000,000"
    // },
        // console.log(this.props.schoolsRegistration);
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
                            <CarouselDesktopSecondary store={this.props.schoolsImage.length > 0 ? newArrayImage : [
                                    {image : ImageSchool}
                            ]} />
                        </section>
                        <section>
                            <div style={{marginTop:"38px"}}></div>
                            <TitlePageWithAddressDesktop
                                title={this.props.detail.name}
                                text={[
                                    this.props.detail.address,
                                    // this.props.detail.village_id,
                                    this.props.schoolsAdressDistrict.name,
                                    this.props.schoolsAdressRegency.name,
                                    this.props.schoolsAdressProvince.name,
                                ].join(", ")}
                                // text={"test address"}
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
                                        name:this.props.detail.phone_number ? this.props.detail.phone_number : "-",
                                        icon:"phone",
                                        iconColor:"",
                                        fontFamily:"Feather",
                                        size:"",
                                    },
                                    {
                                        name:this.props.detail.email ? this.props.detail.email : "-",
                                        icon:"mail",
                                        iconColor:"",
                                        fontFamily:"Feather",
                                        size:""
                                    },
                                    {
                                        name:this.props.detail.website ? this.props.detail.website : "-",
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
                                        description : this.props.detail.headmaster ? this.props.detail.headmaster : "-"
                                    },
                                    {   title:"Jumlah Siswa", 
                                        description : this.props.detail.total_student ? this.props.detail.total_student : "-"
                                    },
                                    {   title:"Akreditasi", 
                                        description : this.props.detail.accreditation ? this.props.detail.accreditation : "-"
                                    },
                                    {   title:"Status", 
                                        description : this.props.detail.status === 1 ? "Negeri" : this.props.detail.status === 0 ? "Swasta" : "-"
                                    },
                                    {   title:"Jam Sekolah", 
                                        description : this.props.detail.schools_hour ? this.props.detail.schools_hour : "-"
                                    },
                                ]}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopstudentConstId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescription
                                store={this.props.schoolsCost !==null ? newArrayCost : [
                                    {   
                                        title:"Potongan / Diskon", 
                                        description : "-"
                                    }  
                                ]}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopregisterTimeId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescription
                                store={this.props.schoolsRegistration !==null ? [
                                    {   title:"Pendaftaran", 
                                        description : moment(this.props.schoolsRegistration.registration).format('DD MMMM YYYY')
                                    },
                                    {   title:"Pengumuman", 
                                        description : moment(this.props.schoolsRegistration.annoucement).format('DD MMMM YYYY')
                                    },
                                    {   title:"Daftar Ulang", 
                                        description : moment(this.props.schoolsRegistration.re_registration).format('DD MMMM YYYY')
                                    },

                                ]:[
                                    {   title:"Pendaftaran", 
                                        description : "-"
                                    },
                                ]}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopprimaryFasilityId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescriptionWithIcon
                                store={ this.props.schoolFacilities.length > 0 ? newArrayFacilities :[{
                                        name:"-",
                                        icon:"check-circle",
                                        fontFamily:"Feather",
                                    }]}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section style={{display: "none"}} id="desktopextracurricularContentId" className="tabcontendetaildesktop">
                            <div style={{marginTop: "30px"}} />
                            <DesktopDescriptionWithIcon
                                store={this.props.schoolsExtracurricular.length > 0 ? newArrayExtracurricular :[{
                                    name:"-",
                                    icon:"check-circle",
                                    fontFamily:"Feather",
                                }]}
                            />
                            <div style={{marginBottom: "30px"}} />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <TitileCardDesktopViewAll
                                name="Daftar Sekolah Lainnya"
                                link="#"
                                linkName="Lihat Semua"
                                onClickLink={()=>{this.handleClickViewAll()}}
                            />
                        </section>
                        <section>
                            <CardImageTertiarayDesktop 
                                store={newArraySchoolsDetail.slice(0,3)}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <ButtonAnotherSchoolsDesktop
                                name="CARI SEKOLAH LAINNYA"
                                width="277px"
                                onClick={()=>{this.searchAnotherSchools()}}
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
                            <CarouselMobileSecondary 
                                store={this.props.schoolsImage.length > 0 ? newArrayImage : [
                                {image : ImageSchool}]} 
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"38px"}}></div>
                            <TitlePageWithAddress
                                title={this.props.detail.name}
                                text={[
                                    this.props.detail.address,
                                    // this.props.detail.village_id,
                                    this.props.schoolsAdressDistrict.name,
                                    this.props.schoolsAdressRegency.name,
                                    this.props.schoolsAdressProvince.name,
                                ].join(", ")}
                            />
                            <LineComponents 
                                marginTop="-20px"
                            />
                            <MobileIconWithTitle 
                                name={this.props.detail.status === 1 ? "Kurikulum K-13" : this.props.detail.curriculum}
                            />
                        </section>
                        <section>
                            <BadgesGroupSecondary store={mobileBadgesStore} />
                        </section>
                        <section style={{display: "none"}} id="mobileSchoolsContactId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={[
                                    {
                                        name:this.props.detail.phone_number ? this.props.detail.phone_number : "-",
                                        icon:"phone",
                                        iconColor:"",
                                        fontFamily:"Feather",
                                        size:"",
                                    },
                                    {
                                        name:this.props.detail.email ? this.props.detail.email : "-",
                                        icon:"mail",
                                        iconColor:"",
                                        fontFamily:"Feather",
                                        size:""
                                    },
                                    {
                                        name:this.props.detail.website ? this.props.detail.website : "-",
                                        icon:"globe",
                                        iconColor:"",
                                        fontFamily:"Feather",
                                        size:""
                                    }
                                ]}
                            />
                        </section>
                        <section style={{display: "none"}} id="mobileDescriptionId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription 
                                store={[
                                    {   title:"Kepala Sekolah", 
                                        description : this.props.detail.headmaster ? this.props.detail.headmaster : "-"
                                    },
                                    {   title:"Jumlah Siswa", 
                                        description : this.props.detail.total_student ? this.props.detail.total_student : "-"
                                    },
                                    {   title:"Akreditasi", 
                                        description : this.props.detail.accreditation ? this.props.detail.accreditation : "-"
                                    },
                                    {   title:"Status", 
                                        description : this.props.detail.status === 1 ? "Negeri" : this.props.detail.status === 0 ? "Swasta" : "-"
                                    },
                                    {   title:"Jam Sekolah", 
                                        description : this.props.detail.schools_hour ? this.props.detail.schools_hour : "-"
                                    },
                                ]} 
                            />
                        </section>
                        <section style={{display: "none"}} id="studentConstId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription store={this.props.schoolsCost !==null ? newArrayCost : [
                                    {   
                                        title:"Uang Pangkal", 
                                        description : "-"
                                    }  
                                ]} />
                        </section>
                        <section style={{display: "none"}} id="registerTimeId" className="tabcontendetail">
                            <div style={{marginTop: "18px"}} />
                            <MobileDescription store={storeMobileFive} />
                        </section>
                        <section style={{display: "none"}} id="mobileprimaryFasilityId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={ this.props.schoolFacilities.length > 0 ? newArrayFacilities :[{
                                    name:"-",
                                    icon:"check-circle",
                                    fontFamily:"Feather",
                                }]}
                            />
                        </section>
                        <section style={{display: "none"}} id="extracurricularContentId" className="tabcontendetail">
                            <div style={{marginTop: "30px"}} />
                            <MobileDescriptionWithIcon
                                store={this.props.schoolsExtracurricular.length > 0 ? newArrayExtracurricular :[{
                                    name:"-",
                                    icon:"check-circle",
                                    fontFamily:"Feather",
                                }]}
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
                            <CardImageMobileScroll store={newArraySchoolsDetail.slice(0,3)}  />
                        </section>
                        <section>
                            <div style={{marginTop: "0px"}}></div>
                            <ButtonSecondary
                                name="Cari Sekolah lainnya"
                                id="buttonDetailForm"
                                width="227px"
                                onClick={()=>{this.searchAnotherSchools()}}
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
        schoolsImage: state.schoolsImage,
        schoolsCost: state.schoolsCost,
        schoolFacilities: state.schoolFacilities,
        schoolsExtracurricular: state.schoolsExtracurricular,
        getDataSchools: state.getCityDataSchools,
        schoolsStatus: state.schoolsStatus,
        schoolsRegistration: state.schoolsRegistration,
        schoolsAdressProvince: state.schoolsAdressProvince, 
        schoolsAdressRegency: state.schoolsAdressRegency, 
        schoolsAdressDistrict: state.schoolsAdressDistrict,
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
