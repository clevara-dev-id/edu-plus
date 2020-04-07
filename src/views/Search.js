import React, { Component } from 'react';

import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import CardList from '../components/base_components/Card/CardMobile/CardList/CardList';
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import DropDownList from '../components/base_components/DropDwonList/DropdownMobile/DropDownList';
import BadgesGroup from '../components/base_components/Badges/BadgesMobile/BadgesGroup'

//Import Image
import CardImage1 from '../components/asset/images/CardList/SMAN14JAKARTA.png';
import CardImage2 from '../components/asset/images/CardList/SMAN51JAKARTA.png';
import CardImage3 from '../components/asset/images/CardList/SMAN62JAKARTA.png';
import CardImage4 from '../components/asset/images/CardList/SMAN93JAKARTA.png';


let store = [{
        image   : CardImage1,
        brand   : "NASIONAL",
        title   : "SMAN 14 JAKARTA",
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

class Search extends Component {
    render() {
        return (
            <>
                <div style={{overflow:"hidden"}}>
                    <section>
                        <div style={{marginTop: "48px"}}></div>
                        <Title name="Daftar SMA Negeri" />
                    </section>
                    <section>
                        <BadgesGroup store={store2} />
                    </section>
                    <section>
                        <DropDownList onClick={(e)=>{console.log(e.target.value)}}/>
                    </section>
                    <section>
                         <CardList store={store} />
                    </section>
                    <section>
                        <ButtonSecondary name="CARI SEKOLAH LAINNYA" onClick={(e)=>{console.log("this is button Secondary Button !")}} />
                    </section>
                    
                </div>
            </>
        );
    }
}

export default Search;