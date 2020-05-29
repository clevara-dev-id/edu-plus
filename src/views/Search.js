import React, { Component } from 'react';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';
import DropDownListFilterFourDesktop from '../components/base_components/Desktop/DropDownList/DropDownListFilterFourDesktop';
import RadioButtonFiveDesktop from '../components/base_components/Desktop/RadioButton/RadioButtonFiveDesktop';
import RadioButtonTwoDesktop from '../components/base_components/Desktop/RadioButton/RadioButtonTwoDesktop';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import TitleBottomDesktop from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktop';

//Mobile Item
import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import RadioButtonThree from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonThree';
import RadioButtonFive from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonFive'
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import ButtonGray from '../components/base_components/Button/ButtonMobile/ButtonGray';
import AccordionAddress from '../components/base_components/Accordion/Mobile/AccordionAddress';
import BottomTitle from '../components/base_components/TitleBottom/Mobile/TitleBottom';
import DropdownListFilter from '../components/base_components/DropDwonList/DropdownMobile/DropDownListFilter';
import DropdownListFilterFour from '../components/base_components/DropDwonList/DropdownMobile/DropDownListFilterFour';
import TitleDropDownList from '../components/base_components/TitlePage/TitleMobile/TitleDropDownList';
import RadioButtonTwo from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonTwo';
import SecondaryButtonDesktop from '../components/base_components/Desktop/Button/SecondaryButtonDesktop';




const store = [
    {id:"001", name:'SD'},
    {id:"002", name:'Madrasah Tsanawiyah'},
    {id:"003", name:'SMP'},
    {id:"004", name:'SMA'},
    {id:"005", name:'Madrasah Aliyah'},
];
const store2 = [
    {id:"001", name:'Jakarta'},
    {id:"002", name:'Jawa Barat'},
];

const store3 = [
    {id:"001", name:'Jakarta Selatan'},
    {id:"002", name:'Jakarta Barat'},
];

const store4 = [
    {id:"001", name:'Manggarai'},
    {id:"002", name:'Tebet'},
];

const store5 = [
    {id:"001", name:'Tebet Timur'},
    {id:"002", name:'Tebet Utara'},
];

//dummy Desktop

const RegionProv = [
    {id:"001", name:'Jakarta'},
    {id:"002", name:'Jawa Barat'},
];

const RegionCity = [
    {id:"011", name:'Jakarta Barat'},
    {id:"012", name:'Jakarta Selatan'},
];

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


class Search extends Component {
    onClickSearchDetailHandle = () =>{
        window.location="/searchresult";
    }
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageHeaderDesktop
                                name="Mulai cari informasi sekolah disini"
                                color="#1A6EB2"
                                width="100%"
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            {/* <TitleDropDownList name="Pilih Alamat"/> */}
                            <DropDownListFilterFourDesktop
                                onClick={(e)=>{console.log(e.target.value)}}
                                store={RegionProv} 
                                placeholder="Pilih Provinsi"
                                title="Provinsi"
                                className="provdropdownclass"
                                buttonClass="provbuttonclickprovregistercontent"
                                onClickTwo={(e)=>{console.log(e.target.value)}}
                                storeTwo={RegionCity} 
                                placeholderTwo="Pilih Kab/Kota"
                                titleTwo="Kabupaten / Kota"
                                classNameTwo="citydropdownclass"
                                buttonClassTwo="citybuttonclickprovregistercontent"
                            />
                            <div style={{marginTop: "25px"}}></div>
                            <DropDownListFilterFourDesktop
                                onClick={(e)=>{console.log(e.target.value)}}
                                store={RegionProv} 
                                placeholder="Pilih Kecamatan"
                                title="Kecamatan"
                                className="districtkecdropdownclass"
                                buttonClass="districtButtonclickprovregistercontent"
                                onClickTwo={(e)=>{console.log(e.target.value)}}
                                storeTwo={RegionCity} 
                                placeholderTwo="Pilih Kelurahan/Desa"
                                titleTwo="Kelurahan / Desa"
                                classNameTwo="villagedropdownclass"
                                buttonClassTwo="villagebuttonclickprovregistercontent"
                            />
                            <div style={{marginBottom: "25px"}}></div>
                        </section>
                        <section>
                            <div style={{marginTop: "35px"}}></div>
                            <RadioButtonFiveDesktop onClick={(e)=>{console.log(e.target.value)}} />
                        </section>
                        <section>
                            <div style={{marginTop: "35px"}}></div>
                            <RadioButtonTwoDesktop 
                            title="Filter Status Sekolah"
                            onClick={(e)=>{console.log(e.target.value)}} />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <SecondaryButtonDesktop 
                                name="CARI SEKARANG"
                                onClick={()=>{console.log("button cari")}}
                            />
                            <div style={{marginTop: "25px"}}></div>
                        </section>
                        <section>
                            <div style={{marginTop: "7px"}}></div>
                            <TitleBottomDesktop 
                                name="Daftarkan Sekolah atau tempat kursus anda" 
                                namelink="disini"
                                link="/register" 
                            />
                            <div style={{marginBottom: "30px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        
                        {/* <section>
                            <div style={{marginTop: "48px"}}></div>
                            <Title name="Mulai cari informasi sekolah disini" />
                        </section> */}
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Mulai cari informasi sekolah disini"
                                color="#1A6EB2"
                            />
                        </section>
                        {/* <section>
                            <div style={{marginTop: "25px"}}></div>
                            <DropdownListFilter 
                                onClick={(e)=>{console.log(e.target.value)}}
                                store={store} 
                                placeholder="Pilih Pendidikan"
                                title="Pendidikan"
                            />
                        </section> */}
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            {/* <TitleDropDownList name="Pilih Alamat"/> */}
                            <DropdownListFilterFour
                                onClick={(e)=>{console.log(e.target.value)}}
                                store={store2} 
                                placeholder="Pilih Provinsi"
                                title="Provinsi"
                                className="provdropdownclass"
                                buttonClass="citybuttonclickprovregistercontent"
                            />
                            <DropdownListFilterFour
                                onClick={(e)=>{console.log(e.target.value)}}
                                store={store3} 
                                placeholder="Pilih Kota / Kabupaten"
                                title="Kota / Kabupaten"
                                className="citydropdownclass"
                                buttonClass="citybuttonclickcityregistercontent"
                            />
                            <DropdownListFilterFour
                                onClick={(e)=>{console.log(e.target.value)}}
                                store={store4} 
                                placeholder="Pilih Kecamatan"
                                title="Kecamatan"
                                className="subcitydropdownclass"
                                buttonClass="citybuttonclickDistricregistercontent"
                            />
                            <DropdownListFilterFour
                                onClick={(e)=>{console.log(e.target.value)}}
                                store={store5} 
                                placeholder="Pilih Kelurahan / Desa"
                                title="Kelurahan / Desa"
                                className="secondsubcitydropdownclass"
                                buttonClass="citybuttonclickVilegeregistercontent"
                            />
                        </section>
                        {/* <section>
                            <div style={{marginTop: "25px"}}></div>
                            <AccordionAddress clickProvinsi={(e)=>{console.log(e.target.value)}} clickKecamatan={(e)=>{console.log(e.target.value)}} />
                        </section> */}
                        <section>
                            <div style={{marginTop: "35px"}}></div>
                            <RadioButtonFive onClick={(e)=>{console.log(e.target.value)}} />
                        </section>
                        <section>
                                <div style={{marginTop: "25px"}}></div>
                                <RadioButtonTwo 
                                    title="Filter Status  Sekolah"
                                    onClick={(e) => {console.log(e.target.value)}} 
                                />
                            </section>
                        {/* <section>
                            <div style={{marginTop: "25px"}}></div>
                            <RadioButtonThreeGray onClick={(e) => {console.log(e.target.value)}} />
                        </section> */}
                        {/* <section>
                            <div style={{marginTop: "25px"}}></div>
                            <ButtonPrimary name="CARI SEKARANG" onClick={(e)=>{console.log("this is button !")}} />
                        </section> */}
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <ButtonPrimary
                                name="CARI SEKARANG" 
                                onClick={(e)=>{this.onClickSearchDetailHandle()}} 
                                background="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "7px"}}></div>
                            <BottomTitle 
                                name="Daftarkan Sekolah atau tempat kursus anda" 
                                namelink="disini"
                                link="/register" 
                            />
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default Search;