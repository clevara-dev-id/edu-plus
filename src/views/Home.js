import React, { Component } from 'react';

import{
    RadioButtonThree,
    RadioButtonFour
} from '../components/base_components'

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    Home
                    <RadioButtonFour onClick={(e) => {console.log(e.target.value)}} />
                    <RadioButtonThree onClick={(e) => {console.log(e.target.value)}} />
                </div>
            </>
        );
    }
}

export default Home;