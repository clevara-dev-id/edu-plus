import React, { Component } from 'react';
// import $ from 'jquery'
import { connect } from 'react-redux';

// import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';
import { OnDesktop, OnMobile } from '../constants/Breackpoint';

//Get Aceess Input Fetch Redux
import { 
    getAccessFetchData, 
} from './redux/actions/getaccess';

import { 
    getAccessFetchDataSearch,
} from './redux/actions/getaccessautocomplete';


//Desktop
import InputSearchDesktop from '../components/base_components/Desktop/InputSearch/InputSearchDesktop';
import SecondaryButtonDesktop from '../components/base_components/Desktop/Button/SecondaryButtonDesktop';
import ButtonAnotherSchoolsDesktop  from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';
import MessageGetAccessResultDesktop from '../components/base_components/Desktop/Message/MessageGetAccessResultDesktop';
import CardImageWithButtonDesktop from '../components/base_components/Desktop/CardImage/CardImageWithButtonDesktop';
import CardImageNotFoundDesktop from '../components/base_components/Desktop/CardImage/CardImageNotFoundDesktop'
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import Pagination from '../components/base_components/Desktop/Pagination/Pagination';
import LoadingComponents from '../components/base_components/Desktop/Loading/LoadingComponents';

//Mobile Item
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
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
// import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

//Image For School List
import ImageSchool from '../asset/image/SchoolLists/schoolsILustrator.png';

// const getUrlBackend = "http://localhost:8000/"
// const getUrlBackend = "http://45.77.46.116/"
// const getUrlBackend = "https://admin.edukasiplus.com/"
const getUrlBackend = "https://backend.edukasiplus.com/"
// const getUrlBackend = "http://backend.edukasiplus.com/" //No SSL


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
    getDetailData=async(keyWord, page)=>{
        console.log("this function running after 500 ms");
        this.setState({recentKeyword: keyWord});
        const paramData = {
            "name":keyWord
        }
        await this.props.fetchData(`${getUrlBackend}api/search/schools?page=${page}`, paramData);
    }
    searchAoutoComplete = async (keyWord) =>{
        if(keyWord.length > 0){
            const paramData = {
                "name":keyWord
            }
            await this.props.fetchDataSearch(`${getUrlBackend}api/search/schools/`, paramData);    
        }
    }
    onButtonSearchClick=async(data, page)=>{
        await this.getDetailData(data !==undefined && data !== "" ? data : this.state.fieldResult, page ? page:1);
    }
    onClickRegisterHandle = () =>{
        window.location="/getaccess";
    }
    delayAutoComplete=(callback, ms)=> {
        var timer = 0;
        return function() {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            callback.apply(context, args);
          }, ms || 0);
        };
    }
    backButtonHandle=()=>{
        window.location.href="/getaccess";
    }
    render() {
        // if (this.props.hasError) {
        //     return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        // }
        if (this.props.isLoading) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}><LoadingComponents /></p>;
        }
        let newArrayGetAccess=[], operator, imageForSchools;
        if(this.props.getAccess.length>0){
            this.props.getAccess.map((data, index)=>{
                data.user === null ? operator=false:operator=true;
                if(data.images!==undefined && data.images.length>0){
                    imageForSchools=`${getUrlBackend}storage/${data.images[0].image}`;
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
                return newArrayGetAccess;
            });
        }
        console.log(this.props.getAccessLastPage);
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home", link:"/"},{name:"Daftar Sekolah", link:"/link"}]}
                            />
                        </section>
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
                                onChange={(e)=>{
                                    this.setState({fieldResult:e.target.value});
                                    // this.delayAutoComplete();
                                    this.searchAoutoComplete(e.target.value)
                                }}
                                onKeyPress={(e)=>{
                                    if(e.key === 'enter' || e.key === 'Enter'){
                                        this.onButtonSearchClick();
                                    }
                                }}
                                // onKeyUp={(e)=>{this.searchAoutoComplete(e.target.value)}}
                                valueSearch={this.state.fieldResult}
                                // onChange={(e)=>{console.log(e.target.value)}}
                                autocompletedata={this.props.getAccessAutoComplete.length > 0 ? this.props.getAccessAutoComplete : []}
                                onClickAutoComplete={(e)=>{
                                    this.setState({fieldResult:e.target.value});
                                    if(this.props.getAccess.length > 0){
                                        this.onButtonSearchClick(e.target.value)
                                    }
                                }}
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
                            {this.props.getAccess.length === 0 ?
                            <div style={{marginTop:"150px"}}></div>
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
                        </section>
                        <section>
                            <div style={{marginTop: "0px"}}></div>
                            { this.props.IsSchoolsFound > 0 ? <Pagination
                                onClickPrev={(e)=>{this.onButtonSearchClick(this.state.fieldResult, e.target.value)}}
                                onClickNumber={(e)=>{this.onButtonSearchClick(this.state.fieldResult, e.target.value)}}
                                onClickNext={(e)=>{this.onButtonSearchClick(this.state.fieldResult, e.target.value)}}
                                store={newArrayGetAccess.length > 0 ? newArrayGetAccess : 1}
                                dataPerPage={3}
                                lastPage={this.props.getAccessLastPage !== 0 ? this.props.getAccessLastPage > 10  ? 10 : this.props.getAccessLastPage : 0 }
                                currentPage={this.props.getAccessCurrentPage !== 0 ? this.props.getAccessCurrentPage : 0 }
                            /> : "" }
                            <div style={{marginTop: "100px"}}></div>
                        </section>
                        <section>
                        {/* <div style={{marginTop: "25px"}}></div> */}
                            { this.props.IsSchoolsFound > 0 ? <ButtonAnotherSchoolsDesktop
                                name="Kembali"
                                width="277px"
                                onClick={()=>{this.backButtonHandle()}}
                            /> : "" }
                            <div style={{marginTop: "79px"}}></div>
                        </section>
                        <section>
                            {this.props.getAccess.length === 0 && this.props.IsSchoolsFound.length===0 ?
                            <div style={{marginTop:"450px"}}></div>
                            :""}
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Home", link:"/"},{name:"Dapatkan Akses", link:"#"}]}
                            />
                        </section>
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

                                onChange={(e)=>{
                                    this.setState({fieldResult:e.target.value});
                                    // this.delayAutoComplete();
                                    this.searchAoutoComplete(e.target.value);
                                }}
                                onKeyPress={(e)=>{
                                    if(e.key === 'enter' || e.key === 'Enter'){
                                        this.onButtonSearchClick();
                                    }
                                }}
                                // onKeyUp={(e)=>{this.searchAoutoComplete(e.target.value)}}
                                valueSearch={this.state.fieldResult}
                                // onChange={(e)=>{console.log(e.target.value)}}
                                autocompletedata={this.props.getAccessAutoComplete.length > 0 ? this.props.getAccessAutoComplete : []}
                                onClickAutoComplete={(e)=>{
                                    this.setState({fieldResult:e.target.value});
                                    if(this.props.getAccess.length > 0){
                                        this.onButtonSearchClick(e.target.value)
                                    }
                                }}
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
        getAccessLastPage: state.getAccessLastPage,
        getAccessCurrentPage: state.getAccessCurrentPage,
        IsSchoolsFound : state.IsSchoolsFound,
        hasError: state.getAccessHaveError,
        isLoading: state.getAccessAreLoading,
        getAccessAutoComplete: state.getAccessAutoComplete,
        getAccessAutoCompleteHaveError : state.getAccessAutoCompleteHaveError,
        getAccessAutoCompleteAreLoading: state.getAccessAutoCompleteAreLoading
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(getAccessFetchData(url, data)),
        fetchDataSearch: (url, data) => dispatch(getAccessFetchDataSearch(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAccess);
