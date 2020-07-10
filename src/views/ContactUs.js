import React, { Component } from 'react';
import { connect } from 'react-redux';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Get Aceess Input Fetch Redux
import { 
    contactUsSendData,
} from './redux/actions/contactus';


//Desktop
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import TitleBottomDesktopSecondary from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktopSecondary';
import CardListWhatsAppDesktop from '../components/base_components/Desktop/CardList/CardListWhatsAppDesktop';
import FormContactDesktop from '../components/base_components/Desktop/Form/FormContact/FormContactDesktop';

//Mobile Item
import CardListWatsApp from '../components/base_components/Card/CardMobile/CardList/CardListWatsApp';
import FormContactComponents from '../components/base_components/Form/FormContact/FormContactComponents';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import TitleBottomSecondary from '../components/base_components/TitleBottom/Mobile/TitleBottomSecondary';

const getUrlBackend = "http://localhost:8000/"

class ContactUs extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            nameValue: "",
            emailValue: "",
            messageValue: "",
            isSchoolResgistered: true,
        }
    }
    componentDidMount = () =>{
        
    }
    postSchoolsData = async() =>{
        const sendData = {
            name: this.state.nameValue,
            email: this.state.emailValue,
            message: this.state.messageValue
        }
        const data = await this.props.fetchData(`${getUrlBackend}api/contact/`, sendData);
    }
    onHandelClickButton=()=>{
        this.postSchoolsData();
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading || this.props.isLoadingSend) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageHeaderDesktop
                                name="Hubungi Kami"
                                color="#1A6EB2"
                                width="100%"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <CardListWhatsAppDesktop />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <FormContactDesktop 
                                title="Atau Kirimkan pesan anda"
                                onChangeName={(e)=>{this.setState({nameValue: e.target.value})}}
                                onChangeEmail={(e)=>{this.setState({emailValue: e.target.value})}}
                                onChangeMessage={(e)=>{this.setState({messageValue: e.target.value})}}
                                onClickButton={()=>{this.onHandelClickButton()}}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"24px"}}></div>
                            <TitleBottomDesktopSecondary 
                                name="Pesan anda akan dikirim ke "
                                link="#"
                                namelink="halo@eduplus.com"
                                nameSecondary=" dan akan segera kami balas"
                            />
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Hubungi Kami"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <CardListWatsApp />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <FormContactComponents 
                                title="Atau Kirimkan pesan anda"
                                onChangeName={(e)=>{this.setState({nameValue: e.target.value})}}
                                onChangeEmail={(e)=>{this.setState({emailValue: e.target.value})}}
                                onChangeMessage={(e)=>{this.setState({messageValue: e.target.value})}}
                                onClickButton={()=>{this.onHandelClickButton()}}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"24px"}}></div>
                            <TitleBottomSecondary 
                                name="Pesan anda akan dikirim ke "
                                link="#"
                                namelink="halo@eduplus.com"
                                nameSecondary=" dan akan segera kami balas"
                            />
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sendData: state.getaccessInputSendData,
        hasError: state.getaccessInputSendHaveError,
        isLoading: state.getaccessInputSendAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(contactUsSendData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
