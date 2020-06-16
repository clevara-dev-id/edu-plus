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
    {name:"SD & MI", idContent: "desktopSDdanMI"},
    {name:"SMP & MTS", idContent: "desktopSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "desktopSmaSmkMa"},
    {name:"Universitas", idContent: "desktopUniv"},
];


class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          favoriteData:[],
        };
    }
    componentDidMount=async ()=>{
        this.getCityData();
        this.getCityDataSMP();
        this.getCityDataSMA();

    }

    getCityData=async()=>{
        const data = await this.props.fetchData('http://localhost:8000/api/province/31/sd');
    }
    getCityDataSMP=async()=>{
        const data = await this.props.fetchDataSMP('http://localhost:8000/api/province/31/smp');
    }
    getCityDataSMA=async()=>{
        const data = await this.props.fetchDataSMA('http://localhost:8000/api/province/31/sma');
    }
    render() {
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        let newArrayFaforite=[],newArrayFaforiteSMP=[], newArrayFaforiteSMA=[];
        this.props.favorite.map((newData, index)=>{
            newArrayFaforite[index]={
                image     : "https://via.placeholder.com/255x242",
                titleCard : newData.name,
                descrip   : newData.schools_count+"  SEKOLAH"
            }
        });
        this.props.favoriteSMP.map((newData, index)=>{
            newArrayFaforiteSMP[index]={
                image     : "https://via.placeholder.com/255x242",
                titleCard : newData.name,
                descrip   : newData.schools_count+"  SEKOLAH"
            }
        });
        this.props.favoriteSMA.map((newData, index)=>{
            newArrayFaforiteSMA[index]={
                image     : "https://via.placeholder.com/255x242",
                titleCard : newData.name,
                descrip   : newData.schools_count+"  SEKOLAH"
            }
        });
        console.log(newArrayFaforiteSMA);
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <JumbotronDesktopBlueSecondary
                                primaryText="Sekolah Favorit"
                                secondaryText="DKI Jakarta"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home"},{name:"DKI Jakarta", link:"#"}]}
                            />
                        </section>
                        <section>
                            <BadgesDesktop
                                store={storeDesktop2}
                                placeholderSearch="Cari Kota/Kabupaten"
                                onChangeSearch={(e)=>{console.log(e.target.value)}}
                            />
                        </section>
                        <section id="desktopSDdanMI" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={newArrayFaforite}
                            />
                        </section>
                        <section id="desktopSmpMts" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={newArrayFaforiteSMP}
                            />
                        </section>
                        <section id="desktopSmaSmkMa" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={newArrayFaforiteSMA}
                            />
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
                                secondaryText="DKI Jakarta"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Home"},{name:"DKI Jakarta", link:"#"}]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BadgesGroupSecondary store={storeMobile2} />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <InputSearchMobile 
                                onChange={(e)=>{console.log(e.target.value)}}
                                label="CariKabupaten"
                                placeholder="Cari Kabupaten"
                            />
                        </section>
                        <section style={{display: "none"}} id="mobileSDdanMI" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobileSecondary store={storeMobile} />
                        </section>
                        <section style={{display: "none"}} id="mobileSmpMts" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobileSecondary store={storeMobile} />
                        </section>
                        <section style={{display: "none"}} id="mobileSmaSmkMa" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobileSecondary store={storeMobile} />
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
    return {
        favorite: state.favorite,
        favoriteSMP: state.favoriteSMP,
        favoriteSMA: state.favoriteSMA,
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
// export default Favorite;
