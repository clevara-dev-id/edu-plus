import React, { Component } from 'react';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import JumbotronDesktopBlue from '../components/base_components/Desktop/Jumbotron/JumbotronDesktopBlue';
import CarouselDesktopPrimary from '../components/base_components/Desktop/Carousel/CarouselDesktopPrimary'
import JumbotronWithCarouselDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronWithCarouselDesktop'
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';

//Mobile Item
import CardImageMobile from '../components/base_components/Card/CardMobile/CardImage/CardImageMobile';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import InputSearchMobile from '../components/base_components/InputSearch/Mobile/InputSearchMobile';
import MobileHomePageTitle from '../components/base_components/TitlePage/TitleMobile/MobileHomePageTitle';
import JumbotronMobile from '../components/base_components/Jumbotron/Mobile/JumbotronMobile';
import JumbotronWithCarousel from '../components/base_components/Jumbotron/Mobile/JumbotronWithCarousel'
import ButtonLoadMore from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import CarouselMobileSecondary from '../components/base_components/Carousel/CarouselMobile/CarouselMobileSecondary';


//Image
import JakartaImage from '../components/asset/images/HomePage/CardImage/Jakarta.png'
const BASE_URL=process.env.REACT_APP_BASE_URL;


//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "DKI Jakarta",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x256",
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

const storeMobile2 =[
    {name:"SD & MI", idContent: "mobileSDdanMI"},
    {name:"SMP & MTS", idContent: "mobileSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "mobileSmaSmkMa"},
    {name:"Universitas", idContent: "mobileUniv"},
];

const imageSliderStore = [
    {image : "https://via.placeholder.com/290x180?text=First_Slide"},
    {image : "https://via.placeholder.com/290x180?text=Second_Slide"},
    {image : "https://via.placeholder.com/290x180?text=Third_Slide"},
    {image : "https://via.placeholder.com/290x180?text=Fourth_Slide"},
    {image : "https://via.placeholder.com/290x180?text=Fifth_Slide"}

];

//dummy Desktop
// const widthDesktop = screen.width;
const imageSliderStoreDesktop = [
    {image : `https://via.placeholder.com/1440x480?text=First_Slide`},
    {image : `https://via.placeholder.com/1440x480?text=Second_Slide`},
    {image : `https://via.placeholder.com/1440x480?text=Third_Slide`},
    {image : `https://via.placeholder.com/1440x480?text=Fourth_Slide`},
    {image : `https://via.placeholder.com/1440x480?text=Fifth_Slide`}

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


class Home extends Component {
    onClickSearchHandle = () =>{
        window.location="/search";
    }
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
                            {/* <section>
                                <JumbotronWithCarouselDesktop    
                                    onClickHeader={()=>{this.onClickSearchHandle()}}
                                    text="Cari sekolah terbaik untuk masa depan yang cerah di Edukasi Plus"
                                    store={imageSliderStore}
                                />
                            </section> */}
                        <section>
                            <JumbotronDesktopBlue    
                                onClickHeader={()=>{this.onClickSearchHandle()}}
                                text="Cari sekolah terbaik untuk masa depan yang cerah di Edukasi Plus"
                                store={imageSliderStore}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"40px"}}></div>
                            <CarouselDesktopPrimary    
                                onClickHeader={()=>{this.onClickSearchHandle()}}
                                text="Cari sekolah terbaik untuk masa depan yang cerah di Edukasi Plus"
                                store={imageSliderStore}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"80px"}}></div>
                            <BadgesDesktop
                                store={storeDesktop2}
                            />
                        </section>
                        <section id="desktopSDdanMI" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImage 
                                store={storeDesktop}
                            />
                        </section>
                        <section id="desktopSmpMts" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImage 
                                store={storeDesktop}
                            />
                        </section>
                        <section id="desktopSmaSmkMa" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImage 
                                store={storeDesktop}
                            />
                        </section>
                        <section id="desktopUniv" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImage 
                                store={storeDesktop}
                            />
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        {/* <section>
                            <JumbotronMobile
                                onClickHeader={()=>{this.onClickSearchHandle()}}
                                text="Cari sekolah terbaik untuk masa depan yang cerah di Edukasi Plus"
                            />
                        </section> */}
                        <section>
                            <JumbotronWithCarousel
                                onClickHeader={()=>{this.onClickSearchHandle()}}
                                text="Cari sekolah terbaik untuk masa depan yang cerah di Edukasi Plus"
                                store={imageSliderStore}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"32px"}}></div>
                            <MobileHomePageTitle name="Promo Untuk Anda" />
                        </section>
                        <section>
                            <div style={{marginTop: "10px"}} />
                            <CarouselMobileSecondary store={imageSliderStore} />
                        </section>

                        <section>
                            <div style={{marginTop:"65px"}}></div>
                            <MobileHomePageTitle name="Sekolah Favorite" />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BadgesGroupSecondary store={storeMobile2} />
                        </section>
                        <section>
                            <div style={{marginTop:"35px"}}></div>
                            <InputSearchMobile 
                                onChange={(e)=>{console.log(e.target.value)}} 
                                label="CariProvinsi"
                                placeholder="Cari Provinsi"
                            />
                        </section>
                        <section style={{display: "none"}} id="mobileSDdanMI" className="tabcontendetail">
                            <div style={{marginTop: "25px"}}></div>
                            <CardImageMobile store={storeMobile} />
                        </section>
                        <section style={{display: "none"}} id="mobileSmpMts" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobile store={storeMobile} />
                        </section>
                        <section style={{display: "none"}} id="mobileSmaSmkMa" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobile store={storeMobile} />
                        </section>
                        <section style={{display: "none"}} id="mobileUniv" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobile store={storeMobile} />
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

export default Home;