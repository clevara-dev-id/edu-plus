import React, { Component } from 'react';

import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage'
import RadioButtonThree from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonThree';
import RadioButtonFour from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonFour'
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import AccordionAddress from '../components/base_components/Accordion/Mobile/AccordionAddress';

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <Title name="Mulai cari informasi sekolah disini" />
                    <AccordionAddress clickProvinsi={(e)=>{console.log(e.target.value)}} clickKecamatan={(e)=>{console.log(e.target.value)}} />
                    <RadioButtonFour onClick={(e) => {console.log(e.target.value)}} />
                    <RadioButtonThree onClick={(e) => {console.log(e.target.value)}} />
                    <ButtonPrimary name="CARI SEKARANG" onClick={(e)=>{console.log("this is button !")}} />
                    <br />
                    <ButtonSecondary name="CARI SEKARANG" onClick={(e)=>{console.log("this is button Secondary Button !")}} />
                </div>
            </>
        );
    }
}

export default Home;