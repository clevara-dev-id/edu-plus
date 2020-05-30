import React, { Component } from 'react';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import TitleBottomDesktopSecondary from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktopSecondary';
import CardListWhatsAppDesktop from '../components/base_components/Desktop/CardList/CardListWhatsAppDesktop';
import FormContactDesktop from '../components/base_components/Desktop/Form/FormContact/FormContactDesktop';

//Mobile Item
import MobileHomePageTitle from '../components/base_components/TitlePage/TitleMobile/MobileHomePageTitle';
import JumbotronMobile from '../components/base_components/Jumbotron/Mobile/JumbotronMobile';
import CardListWatsApp from '../components/base_components/Card/CardMobile/CardList/CardListWatsApp';
import FormContactComponents from '../components/base_components/Form/FormContact/FormContactComponents';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import TitleBottomSecondary from '../components/base_components/TitleBottom/Mobile/TitleBottomSecondary';

//Image
import JakartaImage from '../components/asset/images/HomePage/CardImage/Jakarta.png'


//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
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


class ContactUs extends Component {
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageHeaderDesktop
                                name="Hubungi Kami"
                                color="#1A6EB2"
                                width="100%"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <CardListWhatsAppDesktop />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <FormContactDesktop 
                                title="Atau Kirimkan pesan anda"
                                onChangeName={(e)=>{console.log(e.target.value)}}
                                onChangeEmail={(e)=>{console.log(e.target.value)}}
                                onChangeMessage={(e)=>{console.log(e.target.value)}}
                                onClickButton={()=>{console.log("Button Is Activated !")}}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"24px"}}></div>
                            <TitleBottomDesktopSecondary 
                                name="Pesan anda akan dikirim ke "
                                link="#"
                                namelink="halo@eduplus.com"
                                nameSecondary=" dan akan segera kami balas"
                            />
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Hubungi Kami"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <CardListWatsApp />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <FormContactComponents 
                                title="Atau Kirimkan pesan anda"
                                onChangeName={(e)=>{console.log(e.target.value)}}
                                onChangeEmail={(e)=>{console.log(e.target.value)}}
                                onChangeMessage={(e)=>{console.log(e.target.value)}}
                                onClickButton={()=>{console.log("Button Is Activated !")}}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"24px"}}></div>
                            <TitleBottomSecondary 
                                name="Pesan anda akan dikirim ke "
                                link="#"
                                namelink="halo@eduplus.com"
                                nameSecondary=" dan akan segera kami balas"
                            />
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default ContactUs;