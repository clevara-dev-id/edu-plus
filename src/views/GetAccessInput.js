import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';
import { OnDesktop, OnMobile } from '../constants/Breackpoint';

//Get Aceess Input Fetch Redux
import { 
    getaccessInputFetchData, 
} from './redux/actions/getaccessinput';

import { 
    getaccessInputSendhData,
} from './redux/actions/getaccessinputsend';



//Desktop
// import SingleDesktopBadges from '../components/base_components/Desktop/Badges/SingleDesktopBadges';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import TitleBottomDesktopTertiary from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktopTertiary';
import FormGetAccessDesktop from '../components/base_components/Desktop/Form/FormGetAccess/FormGetAccessDesktop';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 

//Mobile Item
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
// import CardImageSingleMobile from '../components/base_components/Card/CardMobile/SingleImage/CardImageSingleMobile';
// import TitlePageWithAddress from '../components/base_components/TitlePage/TitleMobile/TitlePageWithAddress';
// import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
import TitleBotttomTertiary from '../components/base_components/TitleBottom/Mobile/TitleBotttomTertiary';
import FormGetAccessMobile from '../components/base_components/Form/FormGetAccess/FormGetAccessMobile';

//Import Image Desktop
// import SlideImageDesktop1 from '../components/asset/images/Detail/sekolah.png';


//Image
// import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

//Const Http dummy
// const getUrlBackend = "http://localhost:8000/"
// const getUrlBackend = "http://45.77.46.116/"
// const getUrlBackend = "http://edukasiplus.com/"
// const getUrlBackend = "https://admin.edukasiplus.com/"
const getUrlBackend = "https://backend.edukasiplus.com/"
// const getUrlBackend = "http://backend.edukasiplus.com/" //No SSL

class GetAccessInput extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            valueSchoolsName: "",
            valueSchoolsId: "",
            nameValue: "",
            positionValue: "",
            emailValue: "",
            phoneValue: "",
            isSchoolResgistered: true,
        }
    }
    componentDidMount = () =>{
        const urlParams = new URLSearchParams(window.location.search);
        const uuidParam = urlParams.get('uuid');
        if(uuidParam===null || uuidParam===""){
            this.setState({isSchoolResgistered : false});
        }
        if(uuidParam!==null && uuidParam!==""){
            this.getDetailData();
        }
    }
    getDetailData=async()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('uuid');
        await this.props.fetchData(`${getUrlBackend}api/schools/${myParamId}`);
    }
    postSchoolsData = async() =>{
        const urlParams = new URLSearchParams(window.location.search);
        const uuidParam = urlParams.get('uuid');
        if(uuidParam===null || uuidParam===""){
            const sendData = {
                name:this.state.nameValue,
                school_name: this.state.valueSchoolsName,
                npsn: this.state.valueSchoolsId,
                email:this.state.emailValue,
                position: this.state.positionValue,
                phone_number: this.state.phoneValue,
            }
            await this.props.fetchInputData(`${getUrlBackend}api/attempt/get-access`, sendData);
        }
        if(uuidParam!==null && uuidParam!==""){
            const sendData = {
                name:this.state.nameValue,
                school_name: this.props.getaccessInput.name,
                npsn: this.state.valueSchoolsId,
                email:this.state.emailValue,
                position: this.state.positionValue,
                phone_number: this.state.phoneValue,
                uuid: uuidParam,
            }
            // let formData = new FormData();
            // formData.append("name", this.state.nameValue);
            // formData.append("school_name", this.props.getaccessInput.name);
            // formData.append("npsn", this.state.nameValue);
            // formData.append("email", this.state.nameValue);
            // formData.append("position", this.state.nameValue);
            // formData.append("phone_number", this.state.nameValue);
            // formData.append("uuid", this.state.nameValue);


            await this.props.fetchInputData(`${getUrlBackend}api/attempt/get-access`, sendData);
        }
        
    }

    onClickButton = () =>{
        this.postSchoolsData();
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading || this.props.isLoadingSend) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }

        // if(this.props.sendData.length !== 0){
        //     console.log(this.props.sendData);     
        //     alert(this.props.sendData);       
        // }
        // console.log(this.props.sendData.length);
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home", link:"/"},{name:"Dapatkan Akses", link:"/getaccess"},{name:"Input Form", link:"#"}]}
                            />
                        </section>
                        <section>
                            <TitlePageHeaderDesktop
                                name="Dapatkan Akses"
                                color="#1A6EB2"
                                width="100%"
                                textAlign="left"
                            />
                            <div style={{marginBottom:"25px"}}></div>
                        </section>
                        <section>
                            <div style={{marginTop:"70px"}}></div>
                            <FormGetAccessDesktop 
                                title="Atau Kirimkan pesan anda"
                                onChangeSchoolsName={(e)=>{this.setState({valueSchoolsName:e.target.value})}}
                                onChangeSchoolsId={(e)=>{this.setState({valueSchoolsId:e.target.value})}}
                                onChangeName={(e)=>{this.setState({nameValue : e.target.value})}}
                                onChangePosition={(e)=>{this.setState({positionValue : e.target.value})}}
                                onChangeEmail={(e)=>{this.setState({emailValue : e.target.value})}}
                                onChangePhone={(e)=>{this.setState({phoneValue : e.target.value})}}
                                onClickButton={()=>{this.onClickButton()}}
                                getAccessInputButtonId="buttonIdForGetAccessInput"
                                schoolsDisable={this.state.isSchoolResgistered===true ? true : false}
                                valueSchoolsName={this.state.isSchoolResgistered===true ?this.props.getaccessInput.name:this.state.valueSchoolsName}
                                // valueSchoolsId={this.state.isSchoolResgistered===true ?this.props.getaccessInput.npsn: this.state.valueSchoolsId}
                            />
                        </section>
                        <section >
                            <div style={{marginTop: "32px"}}></div>
                                <TitleBottomDesktopTertiary 
                                    width="535px"
                                    name="Pihak Eduplus melalui email"
                                    link=""
                                    namelink=" halo@eduplus.com "
                                    nameSecondary="atau no. telp. "
                                    linkSecondary=""
                                    namelinkSecondary=" +62 999 9999 9999 "
                                    nameTertiary="akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih"
                                    fontSize="13px"
                                    textAlign="center"
                                />
                            <div style={{marginBottom: "73px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[
                                    {name:"Home", link:"/"},
                                    {name:"Dapatkan Akses", link:"/getaccess"},
                                    {name:"Input Form", link:"#"}
                                ]}
                            />
                        </section>
                        <section>
                            {/* <div style={{marginTop:"36px"}}></div> */}
                            <TitlePageMobile
                                name="Dapatkan Akses"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <FormGetAccessMobile 
                                title="Atau Kirimkan pesan anda"
                                onChangeSchoolsName={(e)=>{this.setState({valueSchoolsName:e.target.value})}}
                                onChangeSchoolsId={(e)=>{this.setState({valueSchoolsId:e.target.value})}}
                                onChangeName={(e)=>{this.setState({nameValue : e.target.value})}}
                                onChangePosition={(e)=>{this.setState({positionValue : e.target.value})}}
                                onChangeEmail={(e)=>{this.setState({emailValue : e.target.value})}}
                                onChangePhone={(e)=>{this.setState({phoneValue : e.target.value})}}
                                onClickButton={()=>{this.onClickButton()}}
                                schoolsDisable={this.state.isSchoolResgistered===true ? true : false}
                                valueSchoolsName={this.state.isSchoolResgistered===true ?this.props.getaccessInput.name:this.state.valueSchoolsName}
                                valueSchoolsId={this.state.isSchoolResgistered===true ?this.props.getaccessInput.npsn: this.state.valueSchoolsId}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                                <TitleBotttomTertiary 
                                name="Pihak Eduplus melalui email"
                                link=""
                                namelink=" halo@eduplus.com "
                                nameSecondary="atau no. telp. "
                                linkSecondary=""
                                namelinkSecondary=" +62 999 9999 9999 "
                                nameTertiary="akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih"
                                fontSize="13px"
                                textAlign="justify"
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
        getaccessInput: state.getaccessInput,
        hasError: state.getaccessInputHaveError,
        isLoading: state.getaccessInputAreLoading,
        sendData: state.getaccessInputSendData,
        hasErrorSend: state.getaccessInputSendHaveError,
        isLoadingSend: state.getaccessInputSendAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getaccessInputFetchData(url)),
        fetchInputData: (url, data) => dispatch(getaccessInputSendhData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAccessInput);
