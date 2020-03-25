import React, { Component } from 'react';

import Radio from '../components/base_components/RadioButton/RadioButtonFour'
class Home extends Component {
    render() {
        return (
            <>
                <div>
                    Home
                    <Radio onClick={(e)=>{console.log(e.target.value)}} />
                </div>
            </>
        );
    }
}

export default Home;