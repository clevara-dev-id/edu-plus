import React, { Component } from 'react';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import JumbotronDesktopBlueSecondary from '../components/base_components/Desktop/Jumbotron/JumbotronDesktopBlueSecondary';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import CardImageTertiarayDesktop from '../components/base_components/Desktop/CardImage/CardImageTertiarayDesktop';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import DropDownListSingleDesktop from '../components/base_components/Desktop/DropDownList/DropDownListSingleDesktop';
import ButtonLoadMoreDesktop  from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';


//Mobile Item
import CardImageTertiary from '../components/base_components/Card/CardMobile/CardImage/CardImageTertiary';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import InputSearchMobile from '../components/base_components/InputSearch/Mobile/InputSearchMobile';
import MobileHomePageTitle from '../components/base_components/TitlePage/TitleMobile/MobileHomePageTitle';
import JumbotronMobileSecondary from '../components/base_components/Jumbotron/Mobile/JumbotronMobileSecondary';
import ButtonLoadMore from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import DropDownListSingle from '../components/base_components/DropDwonList/DropdownMobile/DropDownListSingle';


//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'


//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "SDN Islam Harapan Ibu",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur"
    },
    {
        image     : "https://via.placeholder.com/256x242",
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
        titleCard : "SDS Islam Harapan Ibu",
        descrip   : "Jl. H. Banan No. 1, Kebayoran Lama"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "SD ISLAM TERPADU PONDOK PESANTREN UMAR BIN ABDUL AZIS WAHDAH ISLAMIYAH",
        descrip   : "JL. POROS BARAKA - PASUI, RUMBO"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "Jawa Tengah",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "SMPTK Charisma Global School",
        descrip   : "Jl. Villa Permata blok.C1 no.12-15 Lippo Karawaci, Kel. Bencongan Indah, Kec. Ke"
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


class FavoriteDetail extends Component {
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <JumbotronDesktopBlueSecondary
                                primaryText="Sekolah Favorit"
                                secondaryText="Jakarta Selatan"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home"},{name:"DKI Jakarta", link:"#"},{name:"Jakarta Selatan", link:"#"}]}
                            />
                        </section>
                        <section>
                            <BadgesDesktop
                                store={storeDesktop2}
                                placeholderSearch="Cari Kota/Kabupaten"
                                onChangeSearch={(e)=>{console.log(e.target.value)}}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <DropDownListSingleDesktop 
                                onClick={(e)=>{console.log(`this is array by ${e.target.value}`)}} 
                            />
                            <div style={{marginTop:"25px"}}></div>
                        </section>
                        <section id="desktopSDdanMI" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageTertiarayDesktop 
                                store={storeDesktop}
                            />
                        </section>
                        <section id="desktopSmpMts" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageTertiarayDesktop 
                                store={storeDesktop}
                            />
                        </section>
                        <section id="desktopSmaSmkMa" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageTertiarayDesktop 
                                store={storeDesktop}
                            />
                        </section>
                        <section id="desktopUniv" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageTertiarayDesktop 
                                store={storeDesktop}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <ButtonLoadMoreDesktop 
                                name="MUAT LEBIH BANYAK"
                                width="277px"
                                boxShadow="none"
                                background="#f3f3f3"
                            />
                            <div style={{marginTop: "25px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <JumbotronMobileSecondary
                                primaryText="Sekolah Favorit"
                                secondaryText="Jakarta Selatan"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Home"},{name:"DKI Jakarta", link:"#"},{name:"Jakarta Selatan", link:"#"}]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BadgesGroupSecondary store={storeMobile2} />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <DropDownListSingle onClick={(e)=>{console.log(`this is array by ${e.target.value}`)}} />
                        </section>
                        <section style={{display: "none"}} id="mobileSDdanMI" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageTertiary store={storeMobile} />
                        </section>
                        <section style={{display: "none"}} id="mobileSmpMts" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageTertiary store={storeMobile} />
                        </section>
                        <section style={{display: "none"}} id="mobileSmaSmkMa" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageTertiary store={storeMobile} />
                        </section>
                        <section style={{display: "none"}} id="mobileUniv" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageTertiary store={storeMobile} />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                                <ButtonLoadMore 
                                    name="MUAT LEBIH BANYAK"
                                    width="277px"
                                    boxShadow="none"
                                    background="#f3f3f3"
                                />
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default FavoriteDetail;
