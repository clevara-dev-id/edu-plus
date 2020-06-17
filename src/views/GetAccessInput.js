import React, { Component } from 'react';
import $ from 'jquery'

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
// import SingleDesktopBadges from '../components/base_components/Desktop/Badges/SingleDesktopBadges';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import TitleBottomDesktopTertiary from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktopTertiary';
import FormGetAccessDesktop from '../components/base_components/Desktop/Form/FormGetAccess/FormGetAccessDesktop';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 

//Mobile Item
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
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

class GetAccessInput extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            opsSekolah: false,
            operator: true,
            valueSchoolsName:"",
            valueSchoolsId:"",
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
                            <TitlePageHeaderDesktop
                                name="Dapatkan Akses"
                                color="#1A6EB2"
                                width="100%"
                                textAlign="left"
                            />
                            <div style={{marginBottom:"25px"}}></div>
                        </section>
                        <section>
                            <div style={{marginTop:"70px"}}></div>
                            <FormGetAccessDesktop 
                                title="Atau Kirimkan pesan anda"
                                onChangeSchoolsName={(e)=>{this.setState({valueSchoolsName:e.target.value})}}
                                onChangeSchoolsId={(e)=>{this.setState({valueSchoolsId:e.target.value})}}
                                onChangeName={(e)=>{console.log(e.target.value)}}
                                onChangePosition={(e)=>{console.log(e.target.value)}}
                                onChangeEmail={(e)=>{console.log(e.target.value)}}
                                onChangePhone={(e)=>{console.log(e.target.value)}}
                                onClickButton={()=>{console.log("Button Is Activated !")}}
                                schoolsDisable={this.state.operator===true ? true : false}
                                valueSchoolsName={this.state.operator===true ?"SDN Palangkaraya 1":this.state.valueSchoolsName}
                                valueSchoolsId={this.state.operator===true ?"44123": this.state.valueSchoolsId}
                            />
                        </section>
                        <section >
                            <div style={{marginTop: "32px"}}></div>
                                <TitleBottomDesktopTertiary 
                                width="535px"
                                name="Pihak Eduplus melalui email"
                                link=""
                                namelink=" halo@eduplus.com "
                                nameSecondary="atau no. telp. "
                                linkSecondary=""
                                namelinkSecondary=" +62 999 9999 9999 "
                                nameTertiary="akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih"
                                fontSize="13px"
                                textAlign="center"
                                />
                            <div style={{marginBottom: "73px"}}></div>
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
                            {/* <div style={{marginTop:"36px"}}></div> */}
                            <TitlePageMobile
                                name="Dapatkan Akses"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <FormGetAccessMobile 
                                title="Atau Kirimkan pesan anda"
                                onChangeSchoolsName={(e)=>{this.setState({valueSchoolsName:e.target.value})}}
                                onChangeSchoolsId={(e)=>{this.setState({valueSchoolsId:e.target.value})}}
                                onChangeName={(e)=>{console.log(e.target.value)}}
                                onChangePosition={(e)=>{console.log(e.target.value)}}
                                onChangeEmail={(e)=>{console.log(e.target.value)}}
                                onChangePhone={(e)=>{console.log(e.target.value)}}
                                onClickButton={()=>{console.log("Button Is Activated !")}}
                                schoolsDisable={this.state.operator===true ? true : false}
                                valueSchoolsName={this.state.operator===true ?"SDN Palangkaraya 1":this.state.valueSchoolsName}
                                valueSchoolsId={this.state.operator===true ?"44123": this.state.valueSchoolsId}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                                <TitleBotttomTertiary 
                                name="Pihak Eduplus melalui email"
                                link=""
                                namelink=" halo@eduplus.com "
                                nameSecondary="atau no. telp. "
                                linkSecondary=""
                                namelinkSecondary=" +62 999 9999 9999 "
                                nameTertiary="akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih"
                                fontSize="13px"
                                textAlign="justify"
                                />
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default GetAccessInput;
