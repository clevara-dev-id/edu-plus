import React, { Component } from 'react';

import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import CardList from '../components/base_components/Card/CardMobile/CardList/CardList'
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';

//Import Image
import CardImage1 from '../components/asset/images/CardList/SMAN14JAKARTA.png'
import CardImage2 from '../components/asset/images/CardList/SMAN51JAKARTA.png'
import CardImage3 from '../components/asset/images/CardList/SMAN62JAKARTA.png'
import CardImage4 from '../components/asset/images/CardList/SMAN93JAKARTA.png'

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

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    Search
                    <Title name="Daftar SMA Negeri" />
                    <CardList store={store} />
                    <ButtonSecondary name="CARI SEKARANG" onClick={(e)=>{console.log("this is button Secondary Button !")}} />
                </div>
            </>
        );
    }
}

export default Home;