import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';
import { OnDesktop, OnMobile } from '../constants/Breackpoint';

//Get Aceess Input Fetch Redux
import { 
    contactUsSendData,
} from './redux/actions/contactus';


//Desktop
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import TitleBottomDesktopSecondary from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktopSecondary';
import CardListWhatsAppDesktop from '../components/base_components/Desktop/CardList/CardListWhatsAppDesktop';
import FormContactDesktop from '../components/base_components/Desktop/Form/FormContact/FormContactDesktop';
import LoadingComponents from '../components/base_components/Desktop/Loading/LoadingComponents';


//Mobile Item
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import CardListWatsApp from '../components/base_components/Card/CardMobile/CardList/CardListWatsApp';
import FormContactComponents from '../components/base_components/Form/FormContact/FormContactComponents';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import TitleBottomSecondary from '../components/base_components/TitleBottom/Mobile/TitleBottomSecondary';

// const getUrlBackend = "http://localhost:8000/"
// const getUrlBackend = "http://45.77.46.116/"
// const getUrlBackend = "https://admin.edukasiplus.com/"
const getUrlBackend = "https://backend.edukasiplus.com/"
// const getUrlBackend = "http://backend.edukasiplus.com/" //No SSL


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
        await this.props.fetchData(`${getUrlBackend}api/contact/`, sendData);
    }
    onHandelClickButton=()=>{
        this.postSchoolsData();
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}><LoadingComponents /></p>;
        }
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home", link:"/"},{name:"Hubungi Kami", link:"#"}]}
                            />
                        </section>
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
                            <CardListWhatsAppDesktop 
                                store={[{
                                    image   : "http://via.placeholder.com/104x104",
                                    brand   : "NASIONAL",
                                    title   : "No. Telepon",
                                    contact : "0815 8668 1826",
                                    phone   : "021 - 525 8721"
                                }]}
                            />
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
                            <div style={{marginBottom:"25px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Daftar Sekolah", link:"/"},{name:"Hubungi Kami", link:"#"}]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Hubungi Kami"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <CardListWatsApp 
                                store={[{
                                    image   : "http://via.placeholder.com/104x104",
                                    brand   : "NASIONAL",
                                    title   : "No. Telepon",
                                    contact : "+62 999 9999 9999 9999",
                                    phone   : "021 - 525 8721"
                                }]}
                            
                            />
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
