import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';
import { OnDesktop, OnMobile } from '../constants/Breackpoint';

//Redux
import { 
    searchpageFetchProvData, 
    searchpageFetchCityData,
    searchpageFetchDistrictData,
} from './redux/actions/searchpage';

//Desktop
import DropDownListFilterFourDesktop from '../components/base_components/Desktop/DropDownList/DropDownListFilterFourDesktop';
import DropDownListFilterFourDesktopSingle from '../components/base_components/Desktop/DropDownList/DropDownListFilterFourDesktopSingle';
import RadioButtonFiveDesktop from '../components/base_components/Desktop/RadioButton/RadioButtonFiveDesktop';
import RadioButtonTwoDesktop from '../components/base_components/Desktop/RadioButton/RadioButtonTwoDesktop';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import TitleBottomDesktop from '../components/base_components/Desktop/TitleBottom/TitleBottomDesktop';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import LoadingComponents from '../components/base_components/Desktop/Loading/LoadingComponents';


//Mobile Item
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import RadioButtonFive from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonFive'
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import BottomTitle from '../components/base_components/TitleBottom/Mobile/TitleBottom';
import DropdownListFilterFour from '../components/base_components/DropDwonList/DropdownMobile/DropDownListFilterFour';
import RadioButtonTwo from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonTwo';
import SecondaryButtonDesktop from '../components/base_components/Desktop/Button/SecondaryButtonDesktop';

const store5 = [
    {id:"001", name:'Tebet Timur'},
    {id:"002", name:'Tebet Utara'},
];

const RegionCity = [
    {id:"011", name:'Jakarta Barat'},
    {id:"012", name:'Jakarta Selatan'},
];

const provArray=[        
    {
        "id": 31,
        "name": "DKI JAKARTA"
    },
    {
        "id": 32,
        "name": "JAWA BARAT"
    },
    {
        "id": 36,
        "name": "BANTEN"
    },
];

// const getUrlBackend = "http://localhost:8000/"
// const getUrlBackend = "http://45.77.46.116/"
// const getUrlBackend = "https://admin.edukasiplus.com/"
const getUrlBackend = "https://backend.edukasiplus.com/"
// const getUrlBackend = "http://backend.edukasiplus.com/" //No SSL


class Search extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          homepageSearch:'',
          province_id: 0,
          city_id: 0,
          district_id:0,
          cityDisable: true,
          districtDisable: true,
          villageDisable: true,
          education_stage: '',
          searchpagecity: [],
          searchpagedistrict: [],
        };
    }
    componentDidMount=async ()=>{
        await this.getProvinceData(1);
        // this.getCityData();
        // this.getDistrictData();
    }
    getProvinceData=async(page)=>{ 
        await this.props.fetchData(`${getUrlBackend}api/search/init`);
    }
    getCityData=async(getProvId)=>{

        await this.props.fetchDataCity(`${getUrlBackend}api/search/get-regency/${getProvId}`);
        
    }
    getDistrictData=async(getCityId)=>{
        // getCityId=3101;
        await this.props.fetchDataDistrict(`${getUrlBackend}api/search/get-district/${getCityId}`);
    }
    onClickSearchDetailHandle = () =>{
        window.location=`/searchresult?district_id=${this.state.district_id}&&educationstage=${this.state.education_stage}&&status=${this.state.status}`;
    }
    resetEveryClick =()=>{
        
    }
    render() {
        if (this.props.hasError) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}>
                Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}><LoadingComponents /></p>;
        }
        let newArrayForProvlist=[];
        if(this.props.searchpageprov.length !== 0){
            this.props.searchpageprov.map((data,index)=>{
                newArrayForProvlist[index]=data;
                return newArrayForProvlist;
            });
        }
        // let newCityArray=[];
        // if(this.props.searchpagecity.length > 0){
        //     this.props.searchpagecity.map((data, index)=>{
        //         newCityArray[index]={
        //             id: data.regency_id,
        //             name: data.name,
        //         }
        //     });
        // }
        console.log(this.props.searchpageprov);
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home", link:"/"},{name:"Search", link:"/search"}]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageHeaderDesktop
                                // name="Mulai cari informasi sekolah disini"
                                name={"Mulai cari informasi sekolah disini"}
                                color="#1A6EB2"
                                width="100%"
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <DropDownListFilterFourDesktop
                                onClick={(e)=>{
                                    this.setState({province_id : e.target.value, cityDisable:false});
                                    this.getCityData(e.target.value);
                                    this.resetEveryClick();
                                }}
                                store={newArrayForProvlist} 
                                placeholder="Pilih Provinsi"
                                title="Provinsi"
                                className="provdropdownclass"
                                buttonClass="provbuttonclickprovregistercontent"
                                onClickTwo={(e)=>{
                                    this.setState({city_id : e.target.value, districtDisable:false});
                                    this.getDistrictData(e.target.value);
                                }}
                                storeTwo={this.props.searchpagecity.length!==0 ? this.props.searchpagecity : []} 
                                placeholderTwo="Pilih Kab/Kota"
                                titleTwo="Kabupaten / Kota"
                                classNameTwo="citydropdownclass"
                                buttonClassTwo="citybuttonclickprovregistercontent"
                                disabledButton={false}
                                disabledButtonTwo={this.state.cityDisable}
                                disabledButtonClass="disableButtonClassProv"
                                disabledButtonClassTwo="disableButtonClassCity"
                            />
                            <div style={{marginTop: "25px"}}></div>
                            <DropDownListFilterFourDesktopSingle
                                onClick={(e)=>{
                                    this.setState({district_id : e.target.value});
                                }}
                                store={this.props.searchpagedistrict.length !== 0 ? this.props.searchpagedistrict : []} 
                                placeholder="Pilih Kecamatan"
                                title="Kecamatan"
                                className="districtkecdropdownclass"
                                buttonClass="districtButtonclickprovregistercontent"
                                onClickTwo={(e)=>{console.log(e.target.value)}}
                                storeTwo={RegionCity} 
                                placeholderTwo="Pilih Kelurahan/Desa"
                                titleTwo="Kelurahan / Desa"
                                classNameTwo="villagedropdownclass"
                                buttonClassTwo="villagebuttonclickprovregistercontent"
                                disabledButton={this.state.districtDisable}
                                disabledButtonTwo={this.state.villageDisable}
                                disabledButtonClass="disableButtonClassDistrict"
                                disabledButtonClassTwo="disableButtonClassVillage"
                            />
                            <div style={{marginBottom: "25px"}}></div>
                        </section>
                        <section>
                            <div style={{marginTop: "35px"}}></div>
                            <RadioButtonFiveDesktop onClick={(e)=>{this.setState({education_stage:e.target.value})}} />
                        </section>
                        <section>
                            <div style={{marginTop: "35px"}}></div>
                            <RadioButtonTwoDesktop 
                            title="Filter Status Sekolah"
                            onClick={(e)=>{this.setState({status:e.target.value})}} />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <SecondaryButtonDesktop 
                                name="CARI SEKARANG"
                                onClick={(e)=>{this.onClickSearchDetailHandle()}}
                            />
                            <div style={{marginTop: "25px"}}></div>
                        </section>
                        <section>
                            <div style={{marginTop: "7px"}}></div>
                            <TitleBottomDesktop 
                                name="Daftarkan Sekolah atau tempat kursus anda" 
                                namelink="disini"
                                link="/getaccess" 
                            />
                            <div style={{marginBottom: "30px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Mulai cari informasi sekolah disini"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <DropdownListFilterFour
                                onClick={(e)=>{
                                    this.setState({province_id : e.target.value, cityDisable:false});
                                    this.getCityData(e.target.value);
                                    this.resetEveryClick();
                                }}                                
                                store={provArray} 
                                placeholder="Pilih Provinsi"
                                title="Provinsi"
                                className="provdropdownclass"
                                buttonClass="citybuttonclickprovregistercontent"
                                // disabledButton={false}
                            />
                            <DropdownListFilterFour
                                onClick={(e)=>{
                                    this.setState({city_id : e.target.value, districtDisable:false});
                                    this.getDistrictData(e.target.value);
                                }}
                                store={this.props.searchpagecity.length!==0 ? this.props.searchpagecity : []} 
                                placeholder="Pilih Kota / Kabupaten"
                                title="Kota / Kabupaten"
                                className="citydropdownclass"
                                buttonClass="citybuttonclickcityregistercontent"
                                disabledButton={this.state.cityDisable}
                            />
                            <DropdownListFilterFour
                                onClick={(e)=>{
                                    this.setState({district_id : e.target.value});
                                }}
                                store={this.props.searchpagedistrict.length !== 0 ? this.props.searchpagedistrict : []} 
                                placeholder="Pilih Kecamatan"
                                title="Kecamatan"
                                className="subcitydropdownclass"
                                buttonClass="citybuttonclickDistricregistercontent"
                                disabledButton={this.state.districtDisable}
                            />
                            <DropdownListFilterFour
                                onClick={(e)=>{console.log(e.target.value)}}
                                store={store5} 
                                placeholder="Pilih Kelurahan / Desa"
                                title="Kelurahan / Desa"
                                className="secondsubcitydropdownclass"
                                buttonClass="citybuttonclickVilegeregistercontent"
                                disabledButton={this.state.villageDisable}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "35px"}}></div>
                            <RadioButtonFive onClick={(e)=>{this.setState({education_stage:e.target.value})}} />
                        </section>
                        <section>
                                <div style={{marginTop: "25px"}}></div>
                                <RadioButtonTwo 
                                    title="Filter Status  Sekolah"
                                    onClick={(e) => {this.setState({status:e.target.value})}} 
                                />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <ButtonPrimary
                                name="CARI SEKARANG" 
                                onClick={(e)=>{this.onClickSearchDetailHandle()}} 
                                background="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "7px"}}></div>
                            <BottomTitle 
                                name="Daftarkan Sekolah atau tempat kursus anda" 
                                namelink="disini"
                                link="/getaccess" 
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
        searchpageprov: state.searchpageprov,
        searchpagecity: state.searchpagecity,
        searchpagedistrict: state.searchpagedistrict,
        hasError: state.searchpageHaveError,
        isLoading: state.searchpageAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(searchpageFetchProvData(url)),
        fetchDataCity: (url) => dispatch(searchpageFetchCityData(url)),
        fetchDataDistrict: (url) => dispatch(searchpageFetchDistrictData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
