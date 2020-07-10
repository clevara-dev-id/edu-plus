import React, { Component } from 'react';
import $ from 'jquery'
import { connect } from 'react-redux';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Get Aceess Input Fetch Redux
import { 
    getAccessFetchData, 
} from './redux/actions/getaccess';

//Desktop
import InputSearchDesktop from '../components/base_components/Desktop/InputSearch/InputSearchDesktop';
import SecondaryButtonDesktop from '../components/base_components/Desktop/Button/SecondaryButtonDesktop';
import MessageGetAccessResultDesktop from '../components/base_components/Desktop/Message/MessageGetAccessResultDesktop';
import CardImageWithButtonDesktop from '../components/base_components/Desktop/CardImage/CardImageWithButtonDesktop';
import CardImageNotFoundDesktop from '../components/base_components/Desktop/CardImage/CardImageNotFoundDesktop'
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 


//Mobile Item
import InputSearchMobileSecondary from '../components/base_components/InputSearch/Mobile/InputSearchMobileSecondary';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import CardImageWithButtonMobile from '../components/base_components/Card/CardMobile/CardImage/CardImageWithButtonMobile';
// import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';
// import TitleBottomSecondary from '../components/base_components/TitleBottom/Mobile/TitleBottomSecondary';
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import MessageGetAccessResult from '../components/base_components/Message/Mobile/MessageGetAccessResult';
// import LabelMobileComponents from '../components/base_components/Label/Mobile/LabelMobileComponents';
import CardImageNotFoundMobile from '../components/base_components/Card/CardMobile/CardImage/CardImageNotFoundMobile'


//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

//Image For School List
import ImageSchool from '../asset/image/SchoolLists/schoolsILustrator.png';



//dummy Mobile
// const storeMobile = [];
const storeMobile = [
    {
        uuid      : "123xyz",
        image     : JakartaImage,
        titleCard : "SDN Islam Harapan Ibu",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur",
        link      : "/getaccessdetail",
        operator  : false,
    },
    {
        uuid      : "456xyz",
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDIT Insan Mandiri Jakarta",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur",
        link      : "/getaccessdetail",
        operator  : true,
    },
    {
        uuid      : "789xyz",
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SDS Islam Harapan Ibu",
        descrip   : "Jl. H. Banan No. 1, Kebayoran Lama",
        link      : "/getaccessdetail",
        operator  : true,
    },
    {
        uuid      : "123abc",
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDS Pangudi Luhur Jakarta",
        descrip   : "Jl. H. Nawi Raya No. 21, Cilandak",
        link      : "/getaccessdetail",
        operator  : true,
    },
    {
        uuid      : "456abc",
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SD Charitas",
        descrip   : "Jalan Swakarya C.13 A No. 1 4, Cilandak",
        link      : "/getaccessdetail",
        operator  : false,
    },

];

const getUrlBackend = "http://localhost:8000/"

class GetAccess extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fieldResult: "",
        }
    }
    componentDidMount = () =>{
        // this.getDetailData();
    }
    getDetailData=async(keyWord)=>{
        const paramData = {
            "name":keyWord
        }
        const data = await this.props.fetchData(`${getUrlBackend}api/search/schools/`, paramData);
    }
    onButtonSearchClick=async()=>{
        await this.getDetailData(this.state.fieldResult);
    }
    onClickRegisterHandle = () =>{
        window.location="/getaccess";
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading || this.props.isLoadingSend) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        let newArrayGetAccess=[], operator, imageForSchools;
        if(this.props.getAccess.length>0){
            this.props.getAccess.map((data, index)=>{
                data.user === null ? operator=false:operator=true;
                if(data.images!==undefined && data.images.length>0){
                    imageForSchools=data.image;
                }
                else{
                    imageForSchools=ImageSchool;
                }
                newArrayGetAccess[index]={
                    uuid      : data.uuid,
                    image     : imageForSchools,
                    titleCard : data.name,
                    descrip   : data.address,
                    link      : "/getaccessdetail",
                    operator  : operator,
                }
            });
        }
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageHeaderDesktop
                                name="Daftarkan Sekolah / Tempat Kursus"
                                color="#1A6EB2"
                                width="100%"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"0px"}}></div>
                            <InputSearchDesktop 
                                title="Cari sekolah/Tempat Kursus disini"
                                onChange={(e)=>{this.setState({fieldResult:e.target.value})}}
                                // onChange={(e)=>{console.log(e.target.value)}}
                                label="Masukannamasekolah"
                                placeholder="Masukan nama Sekolah/Kursusan"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"10px"}}></div>
                            {this.props.getAccess.length<1 && this.props.IsSchoolsFound.length===0 ?
                            <SecondaryButtonDesktop
                                name="CARI"
                                id="buttonsearchcontact"
                                background="#1A6EB2"
                                width="343px"
                                onClick={()=>{this.onButtonSearchClick()}}
                            /> : ""}
                            {this.props.getAccess.length>0 === "" ?
                            <div style={{marginTop:"300px"}}></div>
                            :""}
                        </section>
                        <section>
                                <div style={{marginTop:"-15px"}}></div>
                                {this.props.getAccess.length > 0 ? <MessageGetAccessResultDesktop 
                                name={this.state.fieldResult} sumOf={this.props.IsSchoolsFound} fontSize="13px" /> : ""}
                        </section>
                        <section>
                            {this.props.IsSchoolsFound === 0 ? 
                            <div style={{marginTop: "90px"}}></div>:
                            <div style={{marginTop: "48px"}}></div>}
                            { this.props.IsSchoolsFound > 0 ? 
                            <CardImageWithButtonDesktop store={newArrayGetAccess.slice(0, 18)} /> : ""}
                            {this.props.IsSchoolsFound === 0 ? <CardImageNotFoundDesktop /> : ""}
                            <div style={{marginTop: "170px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Dapatkan Accesss"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"0px"}}></div>
                            <InputSearchMobileSecondary 
                                title="Cari sekolah/Tempat Kursus disini"
                                onChange={(e)=>{this.setState({fieldResult:e.target.value})}}
                                label="Masukannamasekolah"
                                placeholder="Masukan nama Sekolah/Kursusan"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"10px"}}></div>
                            {this.props.getAccess.length<1 && this.props.IsSchoolsFound.length===0 ?
                            <ButtonPrimary
                                name="CARI"
                                id="buttonsearchcontact"
                                background="#1A6EB2"
                                onClick={()=>{this.onButtonSearchClick()}}
                            /> : ""}
                            {this.state.fieldResult === "" ?
                            <div style={{marginTop:"300px"}}></div>
                            :""}
                        </section>
                        <section>
                                <div style={{marginTop:"-15px"}}></div>
                                {this.props.getAccess.length > 0 ? <MessageGetAccessResult 
                                name={this.state.fieldResult} sumOf={this.props.IsSchoolsFound} fontSize="13px" /> : ""}
                        </section>
                        <section>
                            {this.props.IsSchoolsFound > 0 ?
                                <div style={{marginTop: "36px"}}></div> : ""}
                            {this.props.IsSchoolsFound === 0 ? <div style={{marginTop: "76px"}}></div> : "" }
                            {this.props.IsSchoolsFound > 0 ? 
                            <CardImageWithButtonMobile store={newArrayGetAccess.slice(0, 18)} /> : ""}
                            {this.props.IsSchoolsFound === 0 ? <CardImageNotFoundMobile /> : ""}
                            <div style={{marginBottom: "70px"}}></div>
                        </section>

                    </OnMobile>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getAccess: state.getAccess,
        IsSchoolsFound : state.IsSchoolsFound,
        hasError: state.getAccessHaveError,
        isLoading: state.getAccessAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(getAccessFetchData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAccess);
