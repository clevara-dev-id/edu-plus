import React, { Component } from 'react';

import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import CardList from '../components/base_components/Card/CardMobile/CardList/CardList';
import CardListSecondary from '../components/base_components/Card/CardMobile/CardList/CardListSecondary';
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import DropDownList from '../components/base_components/DropDwonList/DropdownMobile/DropDownList';
import BadgesGroup from '../components/base_components/Badges/BadgesMobile/BadgesGroup';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import CardImageTertiary from '../components/base_components/Card/CardMobile/CardImage/CardImageTertiary';


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

let store = [{
        image   : CardImage1,
        brand   : "NASIONAL",
        title   : "SMAN 14 JAKARTA JAKARTA JAKARTAJAKARTA",
        address : "Jl. SMA BARAT, CILILITAN",
        phone   : "021 - 525 8721"
    },
    {
        image   : CardImage2,
        brand   : "NASIONAL",
        title   : "SMAN 51 JAKARTA",
        address : "JL. BATU AMPAR 3 CONDET",
        phone   : "021 - 525 8721"
    },
    {
        image   : CardImage3,
        brand   : "NASIONAL",
        title   : "SMAN 62 JAKARTA",
        address : "JL. RAYA BOGOR KM.20",
        phone   : "021 - 525 8721"
    },
    {
        image   : CardImage4,
        brand   : "NASIONAL",
        title   : "SMAN 93 JAKARTA",
        address : "JL. RAYA BOGOR KOMP. PASWALPRES",
        phone   : "021 - 525 8721"
    },
];

const store2 =[{name:"4 SMA ditemukan"},{name:"Kramat Jati"},{name:"DKI Jakarta"}];
const store3 =[
    {name:"Home", link: "/home"},
    {name:"Search", link: "/search"},
    {name:"Informasi Sekolah", link: "/information"},
    {name:"Kontak Sekolah", link: "/contact"},
    {name:"Biaya Sekolah", link: "/payroll"},
    {name:"About", link: "/about"}
];

class SearchResult extends Component {
    render() {
        return (
            <>
                <div style={{overflow:"hidden"}}>
                    <section>
                        <div style={{marginTop: "48px"}}></div>
                        <Title name="Daftar SMA Negeri" />
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
                        <div style={{marginTop: "48px"}}></div>
                        <CardImageTertiary store={storeMobile} />
                    </section>
                    <section>
                        <ButtonSecondary name="CARI SEKOLAH LAINNYA" onClick={(e)=>{console.log("this is button Secondary Button !")}} />
                    </section>
                    
                </div>
            </>
        );
    }
}

export default SearchResult;