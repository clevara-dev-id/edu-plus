import React, { Component } from 'react';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';

//Mobile Item
import CardImageTertiary from '../components/base_components/Card/CardMobile/CardImage/CardImageTertiary';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import InputSearchMobile from '../components/base_components/InputSearch/Mobile/InputSearchMobile';
import MobileHomePageTitle from '../components/base_components/TitlePage/TitleMobile/MobileHomePageTitle';
import JumbotronMobileSecondary from '../components/base_components/Jumbotron/Mobile/JumbotronMobileSecondary';
import ButtonLoadMore from '../components/base_components/Button/ButtonMobile/ButtonSecondary';


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
        titleCard : "Jawa Barat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "Jawa Tengah",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "Bali",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "Sumatra Utara",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x242",
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
        titleCard : "SDS Islam Harapan Ibu",
        descrip   : "Jl. H. Banan No. 1, Kebayoran Lama"
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


class FavoriteDetail extends Component {
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
                        {/* Put here for Desktop*/} 
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
                            <BadgesGroupSecondary store={storeMobile2} />
                        </section>
                        <section style={{display: "none"}} id="mobileSDdanMI" className="tabcontendetail">
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
