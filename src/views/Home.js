import React, { Component } from 'react';

import{
    RadioButtonThree,
    RadioButtonFour
} from '../components/base_components';

import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    Home
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