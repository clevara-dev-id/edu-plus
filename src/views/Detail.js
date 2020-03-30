import React, { Component } from 'react';

import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import CardList from '../components/base_components/Card/CardMobile/CardList/CardList';
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import DropDownList from '../components/base_components/DropDwonList/DropdownMobile/DropDownList';
import BadgesGroup from '../components/base_components/Badges/BadgesMobile/BadgesGroup';
import CarouselMobile from '../components/base_components/Carousel/CarouselMobile/CarouselMobile'

//Import Image
import slideImage1 from '../components/asset/images/CarouselSlider/slider1.png'
import slideImage2 from '../components/asset/images/CarouselSlider/slider2.png'


const store = [
    {image : slideImage1},
    {image : slideImage2},
    {image : slideImage1},
    {image : slideImage2}
];

class Detail extends Component {
    render() {
        return (
            <>
                <div style={{overflow:"hidden"}}>
                    Detail
                    <CarouselMobile store={store} />
                </div>
            </>
        );
    }
}

export default Detail;