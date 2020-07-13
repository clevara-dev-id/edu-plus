import React, { Component } from 'react';
import { connect } from 'react-redux';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktopBlueSecondary from '../components/base_components/Desktop/Jumbotron/JumbotronDesktopBlueSecondary';
import CardImageTertiarayDesktop from '../components/base_components/Desktop/CardImage/CardImageTertiarayDesktop';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import DropDownListSingleDesktop from '../components/base_components/Desktop/DropDownList/DropDownListSingleDesktop';
import ButtonLoadMoreDesktop  from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';


//Mobile Item
import CardImageTertiary from '../components/base_components/Card/CardMobile/CardImage/CardImageTertiary';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import JumbotronMobileSecondary from '../components/base_components/Jumbotron/Mobile/JumbotronMobileSecondary';
import ButtonLoadMore from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import DropDownListSingle from '../components/base_components/DropDwonList/DropdownMobile/DropDownListSingle';

//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

//Favorite
import { 
    favoriteDetailFetchData, 
    favoriteDetailFetchDataSMP, 
    favoriteDetailFetchDataSMA,
    favoriteDetailFetchCityName,
    favoriteDetailFetchProvName,
} from './redux/actions/favoritedetail';

//Image For School List
import ImageSchool from '../asset/image/SchoolLists/schoolsILustrator.png';


//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "SDN Islam Harapan Ibu",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDIT Insan Mandiri Jakarta",
        descrip   : "Jalan Batu Merah No. 71, Pejaten Timur"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SDS Islam Harapan Ibu",
        descrip   : "Jl. H. Banan No. 1, Kebayoran Lama"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "SDS Pangudi Luhur Jakarta",
        descrip   : "Jl. H. Nawi Raya No. 21, Cilandak"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "SD Charitas",
        descrip   : "Jalan Swakarya C.13 A No. 1 4, Cilandak"
    },

];

const storeMobile2 =[
    {name:"SD & MI", idContent: "mobileSDdanMI"},
    {name:"SMP & MTS", idContent: "mobileSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "mobileSmaSmkMa"},
    {name:"Universitas", idContent: "mobileUniv"},
];

//dummy Desktop
const storeDesktop = [
    {
        image     : ImageSchool,
        titleCard : "SDS Islam Harapan Ibu",
        descrip   : "Jl. H. Banan No. 1, Kebayoran Lama"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "SD ISLAM TERPADU PONDOK PESANTREN UMAR BIN ABDUL AZIS WAHDAH ISLAMIYAH",
        descrip   : "JL. POROS BARAKA - PASUI, RUMBO"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "Jawa Tengah",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "SMPTK Charisma Global School",
        descrip   : "Jl. Villa Permata blok.C1 no.12-15 Lippo Karawaci, Kel. Bencongan Indah, Kec. Ke"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "Sumatra Utara",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "Kalimantan",
        descrip   : "15 Sekolah"
    }


];

const storeDesktop2 =[
    {name:"SD & MI", idContent: "desktopSDdanMI"},
    {name:"SMP & MTS", idContent: "desktopSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "desktopSmaSmkMa"},
    {name:"Universitas", idContent: "desktopUniv"},
];

let dataCityMaptoProps=[];
let dataCityMaptoPropsSMP=[];
let dataCityMaptoPropsSMA=[];

class FavoriteDetail extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          favoriteData:[],
          favoriteSearch:"",
          sortBy:"",
        };
    }
    componentDidMount=async ()=>{
        this.getCityData(1);
        this.getCityDataSMP(1);
        this.getCityDataSMA(1);
        this.getProvName();
        this.getCityName();
    }
    getCityData=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        let ParameterPostData = {
            "stage":"sd",
            "status":"1",
            "province":myParamId.substr(0,2),
            "regency":myParamId,
        }
        const data = await this.props.fetchData(`http://localhost:8000/api/search/?page=${page}`,ParameterPostData);
    }
    getCityDataSMP=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        let ParameterPostData = {
            "stage":"smp",
            "status":"1",
            "province":myParamId.substr(0,2),
            "regency":myParamId,
        }
        const data = await this.props.fetchDataSMP(`http://localhost:8000/api/search/?page=${page}`,ParameterPostData);
    }
    getCityDataSMA=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        let ParameterPostData = {
            "stage":"sma",
            "status":"1",
            "province":myParamId.substr(0,2),
            "regency":myParamId,
        }
        // console.log(myParam);
        const data = await this.props.fetchDataSMA(`http://localhost:8000/api/search/?page=${page}`,ParameterPostData);
    }
    getCityName=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        const data = await this.props.fetchCityName(`http://localhost:8000/api/regency/${myParamId}/sd?page=1`);
    }
    getProvName=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        const data = await this.props.fetchProvName(`http://localhost:8000/api/province/${myParamId.substr(0,2)}/sd`);
    }
    dataArrayToAsc=(data)=> {
        if(data.length > 1){
            // console.log(data);
            return data.sort((a, b)=>{
                let x = a.titleCard.toLowerCase();
                let y = b.titleCard.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
        }
    }
    dataArrayToDesc=(data)=> {
        if(data.length > 1){
            // console.log(data);
            data.sort((a, b)=>{
                let x = a.titleCard.toLowerCase();
                let y = b.titleCard.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            return data.reverse(function(a, b){
                var x = a.titleCard.toLowerCase();
                var y = b.titleCard.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
        }
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        let newArrayFaforiteDetail=[], faforiteDetailPageIndex=0, imageForSchools;
        let newArrayFaforiteDetailSMP=[], faforiteDetailPageIndexSMP=0; 
        let newArrayFaforiteDetailSMA=[], faforiteDetailPageIndexSMA=0;
        let newArrayWithFilterSearch=[];
        let newArrayWithFilterSearchSMP=[];
        let newArrayWithFilterSearchSMA=[];
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        this.props.favoriteDetail.forEach((data, index)=>{
            data.map((newData)=>{
                if(newData.images!==undefined && newData.images.length>0){
                    imageForSchools=newData.image;
                }
                else{
                    imageForSchools=ImageSchool;
                }
                newArrayFaforiteDetail[faforiteDetailPageIndex]={
                    image     : imageForSchools,
                    titleCard : newData.name,
                    descrip   : newData.address,
                    link      : `/detail?uuid=${newData.uuid}&&schid=${myParamId}&&edustage=sd&&page_from=favoritedetail`,
                }
                faforiteDetailPageIndex++;
            });
        });
        this.props.favoriteDetailSMP.forEach((data, index)=>{
            data.map((newData)=>{
                if(newData.images!==undefined && newData.images.length>0){
                    imageForSchools=newData.image;
                }
                else{
                    imageForSchools=ImageSchool;
                }
                newArrayFaforiteDetailSMP[faforiteDetailPageIndexSMP]={
                    image     : imageForSchools,
                    titleCard : newData.name,
                    descrip   : newData.address,
                    link      : `/detail?uuid=${newData.uuid}&&schid=${myParamId}&&edustage=smp&&page_from=favoritedetail`,
                }
                faforiteDetailPageIndexSMP++;
            });
        }); 
        this.props.favoriteDetailSMA.forEach((data, index)=>{
            data.map((newData)=>{
                console.log(newData);
                if(newData.images!==undefined && newData.images.length>0){
                    imageForSchools=newData.image[0].image;
                }
                else{
                    imageForSchools=ImageSchool;
                }
                newArrayFaforiteDetailSMA[faforiteDetailPageIndexSMA]={
                    image     : imageForSchools,
                    titleCard : newData.name,
                    descrip   : newData.address,
                    link      : `/detail?uuid=${newData.uuid}&&schid=${myParamId}&&edustage=sma&&page_from=favoritedetail`,
                }
                faforiteDetailPageIndexSMA++;
            });
        });
        if(newArrayFaforiteDetail.length>0){
            newArrayFaforiteDetail.filter(name => name.titleCard.includes(this.state.favoriteSearch.toUpperCase())).map((data,index)=>{
                newArrayWithFilterSearch[index]=data;
            });
        }
        if(newArrayFaforiteDetailSMP.length>0){
            newArrayFaforiteDetailSMP.filter(name => name.titleCard.includes(this.state.favoriteSearch.toUpperCase())).map((data,index)=>{
                newArrayWithFilterSearchSMP[index]=data;
            });
        }
        if(newArrayFaforiteDetailSMA.length>0){
            newArrayFaforiteDetailSMA.filter(name => name.titleCard.includes(this.state.favoriteSearch.toUpperCase())).map((data,index)=>{
                newArrayWithFilterSearchSMA[index]=data;
            });
        }
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <JumbotronDesktopBlueSecondary
                                primaryText="Sekolah Favorit"
                                secondaryText={this.props.getCityName}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home"},
                                {name:this.props.getProvName, link:"#"},
                                {name:this.props.getCityName, link:"#"}]}
                            />
                        </section>
                        <section>
                            <BadgesDesktop
                                store={[
                                    {name:"SD & MI", idContent: "desktopSDdanMI"},
                                    {name:"SMP & MTS", idContent: "desktopSmpMts"},
                                    {name:"SMA, SMK, & MA", idContent: "desktopSmaSmkMa"},
                                    // {name:"Universitas", idContent: "desktopUniv"},
                                ]}
                                placeholderSearch="Cari Sekolah"
                                onChangeSearch={(e)=>{this.setState({favoriteSearch:e.target.value})}}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <DropDownListSingleDesktop 
                                onClick={(e)=>{this.setState({sortBy:e.target.value})}} 
                            />
                            <div style={{marginTop:"25px"}}></div>
                        </section>
                        <section id="desktopSDdanMI" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageTertiarayDesktop 
                                store={newArrayFaforiteDetail.length > 0 && this.state.sortBy === "az" ? this.dataArrayToAsc(newArrayWithFilterSearch) : 
                                newArrayFaforiteDetail.length > 0 && this.state.sortBy === "za" ? this.dataArrayToDesc(newArrayWithFilterSearch) : newArrayWithFilterSearch}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.getCityData(this.props.currentpage+1)}}
                            />
                            <div style={{marginBottom: "45px"}}></div>
                        </section>
                        <section id="desktopSmpMts" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageTertiarayDesktop 
                                store={newArrayFaforiteDetailSMP.length > 0 && this.state.sortBy === "az" ? this.dataArrayToAsc(newArrayWithFilterSearchSMP) : 
                                newArrayFaforiteDetailSMP.length > 0 && this.state.sortBy === "za" ? this.dataArrayToDesc(newArrayWithFilterSearchSMP) : newArrayWithFilterSearchSMP}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.getCityDataSMP(this.props.currentpageSMP+1)}}
                            />
                            <div style={{marginBottom: "45px"}}></div>                           
                        </section>
                        <section id="desktopSmaSmkMa" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageTertiarayDesktop 
                                store={newArrayFaforiteDetailSMA.length > 0 && this.state.sortBy === "az" ? this.dataArrayToAsc(newArrayWithFilterSearchSMA) : 
                                newArrayFaforiteDetailSMA.length > 0 && this.state.sortBy === "za" ? this.dataArrayToDesc(newArrayWithFilterSearchSMA) : newArrayWithFilterSearchSMA}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.getCityDataSMA(this.props.currentpageSMA+1)}}
                            />
                            <div style={{marginBottom: "45px"}}></div>
                        </section>
                        <section id="desktopUniv" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageTertiarayDesktop 
                                store={storeDesktop}
                            />
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <JumbotronMobileSecondary
                                primaryText="Sekolah Favorit"
                                secondaryText={this.props.getCityName}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Home"},
                                    {name:this.props.getProvName, link:"#"},
                                    {name:this.props.getCityName, link:"#"}
                                ]}                            
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BadgesGroupSecondary store={[
                                {name:"SD & MI", idContent: "mobileSDdanMI"},
                                {name:"SMP & MTS", idContent: "mobileSmpMts"},
                                {name:"SMA, SMK, & MA", idContent: "mobileSmaSmkMa"},
                                // {name:"Universitas", idContent: "mobileUniv"},
                            ]} />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <DropDownListSingle onClick={(e)=>{console.log(`this is array by ${e.target.value}`)}} />
                        </section>
                        <section style={{display: "none"}} id="mobileSDdanMI" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageTertiary 
                                store={newArrayFaforiteDetail}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.getCityDataSMP(this.props.currentpageSMP+1)}}
                            />
                            <div style={{marginBottom: "25px"}}></div>
                        </section>
                        <section style={{display: "none"}} id="mobileSmpMts" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageTertiary 
                                store={newArrayFaforiteDetailSMP}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.getCityDataSMP(this.props.currentpageSMP+1)}}
                            />
                            <div style={{marginBottom: "25px"}}></div>
                        </section>
                        <section style={{display: "none"}} id="mobileSmaSmkMa" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageTertiary 
                                store={newArrayFaforiteDetailSMA}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.getCityDataSMP(this.props.currentpageSMP+1)}}
                            />
                            <div style={{marginBottom: "25px"}}></div>
                        </section>
                        <section style={{display: "none"}} id="mobileUniv" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageTertiary store={storeMobile} />
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    dataCityMaptoProps[state.currentfavoriteDetail]=state.favoriteDetail;
    dataCityMaptoPropsSMP[state.currentfavoriteDetailSMP]=state.favoriteDetailSMP;
    dataCityMaptoPropsSMA[state.currentfavoriteDetailSMA]=state.favoriteDetailSMA;
    return {
        favoriteDetail: dataCityMaptoProps,
        favoriteDetailSMP: dataCityMaptoPropsSMP,
        favoriteDetailSMA: dataCityMaptoPropsSMA,
        currentpage: state.currentfavoriteDetail,
        currentpageSMP: state.currentfavoriteDetailSMP,
        currentpageSMA: state.currentfavoriteDetailSMA,
        getCityName: state.getCityName,
        getProvName: state.getProvName,
        hasError: state.favoriteDetailHaveError,
        isLoading: state.favoriteDetailAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(favoriteDetailFetchData(url, data)),
        fetchDataSMP: (url, data) => dispatch(favoriteDetailFetchDataSMP(url, data)),
        fetchDataSMA: (url, data) => dispatch(favoriteDetailFetchDataSMA(url, data)),
        fetchCityName: (url) => dispatch(favoriteDetailFetchCityName(url)),
        fetchProvName: (url) => dispatch(favoriteDetailFetchProvName(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDetail);
