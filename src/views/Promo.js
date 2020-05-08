import React, { Component } from 'react';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';

//Mobile Item
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import CardImgePromo from '../components/base_components/Card/CardMobile/CardPromo/CardImgePromo';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';


//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'


//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "PROMO #1",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "PROMO #2",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "PROMO #3",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "PROMO #4",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "PROMO #5",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
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


class Promo extends Component {
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
                        {/* <section>
                            <JumbotronDesktop />
                        </section> */}
                        <section>
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
                            <JumbotronMobileSecondary
                                primaryText="Sekolah Favorit"
                                secondaryText="DKI Jakarta"
                            />
                        </section> */}
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Home"},{name:"DKI Jakarta", link:"#"}]}
                            />
                        </section>
                        <section>
                            <TitlePageMobile
                                name="Promo"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"15px"}}></div>
                            <CardImgePromo store={storeMobile} />
                            <div style={{marginTop:"75px"}}></div>
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default Promo;
