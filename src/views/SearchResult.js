import React, { Component } from 'react';
import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//import Desktop
import CardImageTertiarayDesktop from '../components/base_components/Desktop/CardImage/CardImageTertiarayDesktop';
import ButtonAnotherSchoolsDesktop  from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import LineComponentsDesktop from '../components/base_components/Desktop/LineComponents/LineComponentsDesktop';
import SingleDesktopBadgesWhite from '../components/base_components/Desktop/Badges/SingleDesktopBadgesWhite';
import TitlePageWithSparatorDesktop from '../components/base_components/Desktop/TitlePage/TitlePageWithSparatorDesktop';


//import mobile
import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import TitleWithSeparator from '../components/base_components/TitlePage/TitleMobile/TitleWithSeparator';
import CardList from '../components/base_components/Card/CardMobile/CardList/CardList';
import CardListSecondary from '../components/base_components/Card/CardMobile/CardList/CardListSecondary';
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import DropDownList from '../components/base_components/DropDwonList/DropdownMobile/DropDownList';
import BadgesGroup from '../components/base_components/Badges/BadgesMobile/BadgesGroup';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import CardImageTertiary from '../components/base_components/Card/CardMobile/CardImage/CardImageTertiary';
import SingleBadges from '../components/base_components/Badges/BadgesMobile/SingleBadges';
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';



//Import Image Desktop
import SlideImageDesktop1 from '../components/asset/images/Detail/sekolah.png';

//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

//Import Image
import CardImage1 from '../components/asset/images/CardList/SMAN14JAKARTA.png';
import CardImage2 from '../components/asset/images/CardList/SMAN51JAKARTA.png';
import CardImage3 from '../components/asset/images/CardList/SMAN62JAKARTA.png';
import CardImage4 from '../components/asset/images/CardList/SMAN93JAKARTA.png';


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

//dummy desktop
const DesktopSlider = [
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1}
];

const storeDesktop = [
    {
        image     : JakartaImage,
        titleCard : "Jakarta Utara",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "Jakarta Pusat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "Jakarta Barat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "Jakarta Timur",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "Jakarta Selatan",
        descrip   : "15 Sekolah"
    },
];


class SearchResult extends Component {
    render() {
        return (
            <>
                <OnDesktop>
                    <section>
                        <div style={{marginTop:"36px"}}></div>
                        <TitlePageHeaderDesktop
                            name={`Daftar SD ${"&"} MI Swasta`}
                            color="#1A6EB2"
                            width="100%"
                            textAlign="left"
                        />
                    </section>
                    <section>
                        <div style={{marginTop:"8px"}}></div>
                        <TitlePageWithSparatorDesktop
                            store={["Bangka", "Mampang Prapatan", "Jakarta Selatan", "DKI Jakarta"]}
                        />
                    </section>
                    <section>
                        <div style={{marginTop:"15px"}}></div>
                        <LineComponentsDesktop />
                        <div style={{marginBottom: "20px"}} />
                    </section>
                    <section>
                        <SingleDesktopBadgesWhite
                            store={[{name:"3 Data ditemukan", idContent: "desktopSchoolsContactId"}]}
                        />
                    </section>
                    <section>   
                        <CardImageTertiarayDesktop 
                            store={storeDesktop}
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
                    {/* <section>
                        <div style={{marginTop: "48px"}}></div>
                        <Title name="Daftar SMA Negeri" />
                    </section> */}
                    <section>
                        <div style={{marginTop:"36px"}}></div>
                        <TitlePageMobile
                            name="Daftar SD & MI Swasta"
                            color="#1A6EB2"
                        />
                    </section>
                    <section>
                        <div style={{marginTop:"8px"}}></div>
                        <TitleWithSeparator
                            store={["Bangka", "Mampang Prapatan", "Jakarta Selatan", "DKI Jakarta"]}
                        />
                    </section>
                    <section>
                        <LineComponents 
                            marginTop="24px"
                            marginBottom="24px"
                            border="1.5px solid #DBDBDB"
                        />
                    </section>
                    {/* <section>
                        <BadgesGroupSecondary store={store3} />
                    </section> */}
                    <section>
                        <DropDownList 
                            onClick={(e)=>{console.log(e.target.value)}}
                            onClickArea={(e)=>{console.log(e.target.value)}}
                        />
                    </section>
                    {/* <section>
                         <CardListSecondary store={store} />
                    </section> */}
                    <section>
                         <SingleBadges name="3 data ditemukan" />
                    </section>
                    <section>
                        <div style={{marginTop: "48px"}}></div>
                        <CardImageTertiary store={storeMobile} />
                    </section>
                    <section>
                        <ButtonSecondary name="CARI SEKOLAH LAINNYA" onClick={(e)=>{console.log("this is button Secondary Button !")}} />
                    </section>
                </OnMobile>                    
            </>
        );
    }
}

export default SearchResult;