import React, { Component } from 'react';
import { connect } from 'react-redux';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Desktop
import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
import JumbotronDesktopBlueSecondary from '../components/base_components/Desktop/Jumbotron/JumbotronDesktopBlueSecondary';
import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
import CardImageSecondaryDesktop from '../components/base_components/Desktop/CardImage/CardImageSecondaryDesktop';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';

//Mobile Item
import CardImageMobileSecondary from '../components/base_components/Card/CardMobile/CardImage/CardImageMobileSecondary';
import BadgesGroupSecondary from '../components/base_components/Badges/BadgesMobile/BadgesGroupSecondary';
import InputSearchMobile from '../components/base_components/InputSearch/Mobile/InputSearchMobile';
import MobileHomePageTitle from '../components/base_components/TitlePage/TitleMobile/MobileHomePageTitle';
import JumbotronMobileSecondary from '../components/base_components/Jumbotron/Mobile/JumbotronMobileSecondary';
import ButtonLoadMore from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';

//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

import { favoriteFetchData, favoriteFetchDataSMP, favoriteFetchDataSMA } from './redux/actions/favorite';

//Image Ilustrator
import ImageCity1 from '../asset/image/Favorite/city1.png';
import ImageCity2 from '../asset/image/Favorite/city2.png';
import ImageCity3 from '../asset/image/Favorite/city3.png';
//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "Jakarta Utara",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "Jakarta Pusat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "Jakarta Barat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "Jakarta Timur",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "Jakarta Selatan",
        descrip   : "15 Sekolah"
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
        image     : JakartaImage,
        titleCard : "Jakarta Utara",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "Jakarta Pusat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "Jakarta Barat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "Jakarta Timur",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "Jakarta Selatan",
        descrip   : "15 Sekolah"
    },
];

const storeDesktop2 =[
    {   name:"SD & MI", 
        idContent: "desktopSDdanMI",
        idBadges:"firstTabOnFavoritePage",
    },
    {
        name:"SMP & MTS", 
        idContent: "desktopSmpMts",
        idBadges:"secondTabOnFavoritePage",
    },
    {
        name:"SMA, SMK, & MA", 
        idContent: "desktopSmaSmkMa",
        idBadges:"thirdTabOnFavoritePage",
    },
    {
        name:"Universitas", 
        idContent: "desktopUniv",
        idBadges:"FourthTabOnFavoritePage",
    },
];

let dataCityMaptoProps=[];
let dataCityMaptoPropsSMP=[];
let dataCityMaptoPropsSMA=[];

// const getUrlBackend = "http://localhost:8000/"
// const getUrlBackend = "http://139.180.184.84/"
// const getUrlBackend = "http://45.77.46.116/"
// const getUrlBackend = "https://admin.edukasiplus.com/"
// const getUrlBackend = "https://backend.edukasiplus.com/"
const getUrlBackend = "http://backend.edukasiplus.com/" //No SSL


class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          favoriteData:[],
          favoriteSearch:'',
          limitPerPage: 8,
          limitPerPageSMP: 8,
          limitPerPageSMA: 8,
        };
    }
    componentDidMount=async ()=>{
        this.getCityData(1);
        this.getCityDataSMP(1);
        this.getCityDataSMA(1);
    }

    getCityData=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        // console.log(myParam);
        const data = await this.props.fetchData(`${getUrlBackend}api/province/${myParamId}/sd`);
    }
    getCityDataSMP=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        const data = await this.props.fetchDataSMP(`${getUrlBackend}api/province/${myParamId}/smp`);
    }
    getCityDataSMA=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        const data = await this.props.fetchDataSMA(`${getUrlBackend}api/province/${myParamId}/sma`);
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        let newArrayFaforite=[], titleImageForCity="FirstImage", imageForCity, nextImage="";
        let newArrayFaforiteSMP=[], faforitePageIndexSMP=0; 
        let newArrayFaforiteSMA=[], faforitePageIndexSMA=0;
        let newArrayWithFilterSearch=[], newArrayWithFilterSearchSMP=[], newArrayWithFilterSearchSMA=[];
        this.props.favorite.map((newData, index)=>{
            let schoolCount='', linkCard='', messageCommingSoon;
            if(titleImageForCity==="FirstImage"){
                imageForCity=ImageCity1;
                nextImage="SecondImage";
            }
            if(titleImageForCity==="SecondImage"){
                imageForCity=ImageCity2;
                nextImage="ThirdImage";
            }
            if(titleImageForCity==="ThirdImage"){
                imageForCity=ImageCity3;
                nextImage="FirstImage";
            }
            if(newData.favorite_count > 0){
                schoolCount= newData.favorite_count+"  SEKOLAH";
                linkCard=`/favoritedetail?id=${newData.id}`;
                messageCommingSoon=false
            }
            else{
                schoolCount="Coming Soon !"
                linkCard='#thirdTabOnHomePage';
                messageCommingSoon="Data Sekolah Akan Segera Kami Perbaharui"
            }
            newArrayFaforite[index]={
                image                : imageForCity,
                titleCard            : newData.name,
                descrip              : schoolCount,
                link                 : linkCard,
                messageIfCommingSoon : messageCommingSoon,
            }
            titleImageForCity=nextImage;
        });
        this.props.favoriteSMP.map((newData, index)=>{
            let schoolCount='', linkCard='', messageCommingSoon;
            if(titleImageForCity==="FirstImage"){
                imageForCity=ImageCity1;
                nextImage="SecondImage";
            }
            if(titleImageForCity==="SecondImage"){
                imageForCity=ImageCity2;
                nextImage="ThirdImage";
            }
            if(titleImageForCity==="ThirdImage"){
                imageForCity=ImageCity3;
                nextImage="FirstImage";
            }
            if(newData.favorite_count > 0){
                schoolCount= newData.favorite_count+"  SEKOLAH";
                linkCard=`/favoritedetail?id=${newData.id}`;
                messageCommingSoon=false
            }
            else{
                schoolCount="Coming Soon !"
                linkCard='#thirdTabOnHomePage';
                messageCommingSoon="Data Sekolah Akan Segera Kami Perbaharui"
            }
            newArrayFaforiteSMP[index]={
                image                : imageForCity,
                titleCard            : newData.name,
                descrip              : schoolCount,
                link                 : linkCard,
                messageIfCommingSoon : messageCommingSoon,
            }
            faforitePageIndexSMP++;
            titleImageForCity=nextImage;
        });
        this.props.favoriteSMA.map((newData, index)=>{
            let schoolCount='', linkCard='', messageCommingSoon;
            if(titleImageForCity==="FirstImage"){
                imageForCity=ImageCity1;
                nextImage="SecondImage";
            }
            if(titleImageForCity==="SecondImage"){
                imageForCity=ImageCity2;
                nextImage="ThirdImage";
            }
            if(titleImageForCity==="ThirdImage"){
                imageForCity=ImageCity3;
                nextImage="FirstImage";
            }
            if(newData.favorite_count > 0){
                schoolCount= newData.favorite_count+"  SEKOLAH";
                linkCard=`/favoritedetail?id=${newData.id}`;
                messageCommingSoon=false
            }
            else{
                schoolCount="Coming Soon !"
                linkCard='#thirdTabOnHomePage';
                messageCommingSoon="Data Sekolah Akan Segera Kami Perbaharui"
            }
            newArrayFaforiteSMA[index]={
                image                : imageForCity,
                titleCard            : newData.name,
                descrip              : schoolCount,
                link                 : linkCard,
                messageIfCommingSoon : messageCommingSoon,
            }
            faforitePageIndexSMA++;
            titleImageForCity=nextImage;
        });
        if(newArrayFaforite.length>0){
            newArrayFaforite.filter(name => name.titleCard.includes(this.state.favoriteSearch.toUpperCase())).map((data,index)=>{
                newArrayWithFilterSearch[index]=data;
            });
        }
        if(newArrayFaforiteSMP.length>0){
            newArrayFaforiteSMP.filter(name => name.titleCard.includes(this.state.favoriteSearch.toUpperCase())).map((data,index)=>{
                newArrayWithFilterSearchSMP[index]=data;
            });
        }
        if(newArrayFaforiteSMA.length>0){
            newArrayFaforiteSMA.filter(name => name.titleCard.includes(this.state.favoriteSearch.toUpperCase())).map((data,index)=>{
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
                                secondaryText={this.props.getProvinceName}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home"},{name:this.props.getProvinceName, link:"#"}]}
                            />
                        </section>
                        <section>
                            <BadgesDesktop
                                store={[
                                    {   name:"SD & MI", 
                                        idContent: "desktopSDdanMI",
                                        idBadges:"firstTabOnFavoritePage",
                                    },
                                    {
                                        name:"SMP & MTS", 
                                        idContent: "desktopSmpMts",
                                        idBadges:"secondTabOnFavoritePage",
                                    },
                                    {
                                        name:"SMA, SMK, & MA", 
                                        idContent: "desktopSmaSmkMa",
                                        idBadges:"thirdTabOnFavoritePage",
                                    },
                                    // {
                                    //     name:"Universitas", 
                                    //     idContent: "desktopUniv",
                                    //     idBadges:"FourthTabOnFavoritePage",
                                    // },
                                ]}
                                placeholderSearch="Cari Kota/Kabupaten"
                                onChangeSearch={(e)=>{this.setState({favoriteSearch:e.target.value})}}
                            />
                        </section>
                        <section id="desktopSDdanMI" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={newArrayWithFilterSearch.slice(0,this.state.limitPerPage)}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.setState({limitPerPage : this.state.limitPerPage+8})}}
                            />
                            <div style={{marginBottom: "45px"}}></div>
                        </section>
                        <section id="desktopSmpMts" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={newArrayWithFilterSearchSMP.slice(0,this.state.limitPerPageSMP)}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.setState({limitPerPageSMP :this.state.limitPerPageSMP+8})}}
                            />
                            <div style={{marginBottom: "45px"}}></div>
                        </section>
                        <section id="desktopSmaSmkMa" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={newArrayWithFilterSearchSMA.slice(0,this.state.limitPerPageSMA)}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.setState({limitPerPageSMA : this.state.limitPerPageSMA+8})}}
                            />
                            <div style={{marginBottom: "45px"}}></div>
                        </section>
                        <section id="desktopUniv" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={storeDesktop}
                            />
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <JumbotronMobileSecondary
                                primaryText="Sekolah Favorit"
                                secondaryText={this.props.getProvinceName}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Home"},{name:this.props.getProvinceName, link:"#"}]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BadgesGroupSecondary store={storeMobile2} />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <InputSearchMobile 
                                onChange={(e)=>{this.setState({favoriteSearch:e.target.value})}}
                                label="CariKabupaten"
                                placeholder="Cari Kabupaten"
                            />
                        </section>
                        <section style={{display: "none"}} id="mobileSDdanMI" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobileSecondary 
                                store={newArrayWithFilterSearch.slice(0,this.state.limitPerPage)}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.setState({limitPerPage : this.state.limitPerPage+8})}}
                            />
                            <div style={{marginBottom: "45px"}}></div>
                        </section>
                        <section style={{display: "none"}} id="mobileSmpMts" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobileSecondary 
                                store={newArrayWithFilterSearchSMP.slice(0,this.state.limitPerPageSMP)}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.setState({limitPerPageSMP :this.state.limitPerPageSMP+8})}}
                            />
                            <div style={{marginBottom: "45px"}}></div>
                        </section>
                        <section style={{display: "none"}} id="mobileSmaSmkMa" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobileSecondary 
                                store={newArrayWithFilterSearchSMA.slice(0,this.state.limitPerPageSMA)}
                                loadmoreEnable={true}
                                onClickLoadmore={()=>{this.setState({limitPerPageSMA : this.state.limitPerPageSMA+8})}}
                            />
                            <div style={{marginBottom: "45px"}}></div>
                        </section>
                        <section style={{display: "none"}} id="mobileUniv" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobileSecondary store={storeMobile} />
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    // dataCityMaptoProps[state.currentfavorite]=state.favorite;
    // dataCityMaptoPropsSMP[state.currentfavoriteSMP]=state.favoriteSMP;
    // dataCityMaptoPropsSMA[state.currentfavoriteSMA]=state.favoriteSMA;
    return {
        favorite: state.favorite,
        favoriteSMP: state.favoriteSMP,
        favoriteSMA: state.favoriteSMA,
        getProvinceName:state.getProvinceName,
        hasError: state.favoriteHaveError,
        isLoading: state.favoriteAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(favoriteFetchData(url)),
        fetchDataSMP: (url) => dispatch(favoriteFetchDataSMP(url)),
        fetchDataSMA: (url) => dispatch(favoriteFetchDataSMA(url))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
