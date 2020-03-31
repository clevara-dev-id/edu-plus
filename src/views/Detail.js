import React, { Component } from 'react';

import DropDownList from '../components/base_components/DropDwonList/DropdownMobile/DropDownList';
import BadgesGroup from '../components/base_components/Badges/BadgesMobile/BadgesGroup';
import CarouselMobile from '../components/base_components/Carousel/CarouselMobile/CarouselMobile';
import TitleReadMore from '../components/base_components/TitlePage/TitleMobile/TitlePageSecondary';
import PrimaryFacility from '../components/base_components/Facility/MobileFacility/PrimaryFacility';
import InformasiSekolah from '../components/base_components/Footer/Mobile/InformasiSekolah';
import KontakSekolah from '../components/base_components/Footer/Mobile/KontakSekolah';
import SingleBadges from '../components/base_components/Badges/BadgesMobile/SingleBadges'
//Import Image
import slideImage1 from '../components/asset/images/CarouselSlider/slider1.png'
import slideImage2 from '../components/asset/images/CarouselSlider/slider2.png'


const store = [
    {image : slideImage1},
    {image : slideImage2},
    {image : slideImage1},
    {image : slideImage2}
];

const text = `SMA Negeri 14 Jakarta yang pada awalnya sekolah binaan khusus, kemudian berubah status menjadi salah
erisque enim ligula 
venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. 
Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. 
Donec vitae dui eget tellus gravida venenatis. 
Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.                 
`;

const store3 = [
    {iconname:"snowflake-o", name: "Air conditioning"}, 
    {iconname:"desktop", name: "Lab. Komputer"},
    {iconname:"wifi", name: "Akses Internet"}, 
]


class Detail extends Component {
    render() {
        return (
            <>
                <div style={{overflow:"hidden"}}>
                    Detail
                    <CarouselMobile store={store} />
                    <SingleBadges name="Nasional" />
                    <TitleReadMore title="SMAN 14 JAKARTA" text={text} />
                    <PrimaryFacility store={store3} title="Fasilitas" />
                    <InformasiSekolah time="07:00-15:00" reg="10 April 2020 - 10 Juni 2020" headmaster="Fauzi Bow, SPsi" />
                    <KontakSekolah 
                        phone="021 - 525 8721"
                        mail="sman14jkt@mail.com"
                        web="sman14jkt.sch.id"
                    />
                </div>
            </>
        );
    }
}



export default Detail;