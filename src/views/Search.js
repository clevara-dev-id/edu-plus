import React, { Component } from 'react';

import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage'
import RadioButtonThree from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonThree';
import RadioButtonFour from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonFour'
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    Search
                    <Title name="Daftar SMA Negeri" />
                    <ButtonSecondary name="CARI SEKARANG" onClick={(e)=>{console.log("this is button Secondary Button !")}} />
                </div>
            </>
        );
    }
}

export default Home;