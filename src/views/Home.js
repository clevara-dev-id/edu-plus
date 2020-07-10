import React, { Component } from 'react';
import { connect } from 'react-redux';


import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';
//Redux
import { 
    homepageFetchData, 
    homepageFetchDataSMP, 
    homepageFetchDataSMA,
    promoFetchData
} from './redux/actions/homepage';


//Desktop
import JumbotronDesktopBlue from '../components/base_components/Desktop/Jumbotron/JumbotronDesktopBlue';
import CarouselDesktopPrimary from '../components/base_components/Desktop/Carousel/CarouselDesktopPrimary';
import CardImageSecondaryDesktop from '../components/base_components/Desktop/CardImage/CardImageSecondaryDesktop';
import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';
import TitlePageDesktop from '../components/base_components/Desktop/TitlePage/TitlePageDesktop';
import TitlePageDesktopPromo from '../components/base_components/Desktop/TitlePage/TitlePageDesktopPromo';

//Mobile Item
import CardImageMobile from '../components/base_components/Card/CardMobile/CardImage/CardImageMobile';
import BadgesGroupFavoriteSchools from '../components/base_components/Badges/BadgesMobile/BadgesGroupFavoriteSchools';
import InputSearchMobile from '../components/base_components/InputSearch/Mobile/InputSearchMobile';
import MobileHomePageTitle from '../components/base_components/TitlePage/TitleMobile/MobileHomePageTitle';
import JumbotronWithCarousel from '../components/base_components/Jumbotron/Mobile/JumbotronWithCarousel'
import ButtonLoadMore from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import CarouselMobileSecondary from '../components/base_components/Carousel/CarouselMobile/CarouselMobileSecondary';

//Image For Card
import ImageAceh from '../asset/image/HomePage/Card/Aceh.png';
import ImageSumateraUtara from '../asset/image/HomePage/Card/SumateraUtara.png';
import ImageSumateraBarat from '../asset/image/HomePage/Card/SumateraBarat.png';
import ImageRiau from '../asset/image/HomePage/Card/Riau.png';
import ImageJambi from '../asset/image/HomePage/Card/Jambi.png';
import ImageSumateraSelatan from '../asset/image/HomePage/Card/SumateraSelatan.png';
import ImageBengkulu from '../asset/image/HomePage/Card/Bengkulu.png';
import ImageLampung from '../asset/image/HomePage/Card/Lampung.png';
import ImageBangkaBelitung from '../asset/image/HomePage/Card/BangkaBelitung.png';
import ImageKepulauanRiau from '../asset/image/HomePage/Card/KepulauanRiau.png';
import ImageJakarta from '../asset/image/HomePage/Card/Jakarta.png';
import ImageJawaBarat from '../asset/image/HomePage/Card/JawaBarat.png';
import ImageJawaTengah from '../asset/image/HomePage/Card/JawaTengah.png';
import ImageYogyakarta from '../asset/image/HomePage/Card/Yogyakarta.png';
import ImageJawaTimur from '../asset/image/HomePage/Card/JawaTimur.png';
import ImageBanten from '../asset/image/HomePage/Card/Banten.png';
import ImageBali from '../asset/image/HomePage/Card/Bali.png';
import ImageNTB from '../asset/image/HomePage/Card/NTB.png';
import ImageNTT from '../asset/image/HomePage/Card/NTT.png';
import ImageKalimantanBarat from '../asset/image/HomePage/Card/KalimantanBarat.png';
import ImageKalimantanTengah from '../asset/image/HomePage/Card/KalimantanTengah.png';
import ImageKalimantanSelatan from '../asset/image/HomePage/Card/KalimantanSelatan.png';
import ImageKalimantanTimur from '../asset/image/HomePage/Card/KalimantanTimur.png';
import ImageKalimantanUtara from '../asset/image/HomePage/Card/KalimantanUtara.png';
import ImageSulawesiUtara from '../asset/image/HomePage/Card/SulawesiUtara.png';
import ImageSulawesiTengah from '../asset/image/HomePage/Card/SulawesiTengah.png';
import ImageSulawesiSelatan from '../asset/image/HomePage/Card/SulawesiSelatan.png';
import ImageSulawesiTenggara from '../asset/image/HomePage/Card/SulawesiTenggara.png';
import ImageGorontalo from '../asset/image/HomePage/Card/Gorontalo.png';
import ImageSulawesiBarat from '../asset/image/HomePage/Card/SulawesiBarat.png';
import ImageMaluku from '../asset/image/HomePage/Card/Maluku.png';
import ImageMalukuUtara from '../asset/image/HomePage/Card/MalukuUtara.png';
import ImagePapuaBarat from '../asset/image/HomePage/Card/PapuaBarat.png';
import ImagePapua from '../asset/image/HomePage/Card/Papua.png';

//Image Promo
import ImagePromo1 from '../asset/image/Promo/Promo1.png'

//Image
import JakartaImage from '../components/asset/images/HomePage/CardImage/Jakarta.png'
const BASE_URL=process.env.REACT_APP_BASE_URL;


//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "DKI Jakarta",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "Jawa Barat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "Jawa Tengah",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "Bali",
        descrip   : "15 Sekolah"
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

const storeMobile2 =[
    {name:"SD & MI", idContent: "mobileSDdanMI"},
    {name:"SMP & MTS", idContent: "mobileSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "mobileSmaSmkMa"},
    {name:"Universitas", idContent: "mobileUniv"},
];

const imageSliderStore = [
    {image : "https://via.placeholder.com/290x180?text=First_Slide"},
    {image : "https://via.placeholder.com/290x180?text=Second_Slide"},
    {image : "https://via.placeholder.com/290x180?text=Third_Slide"},
    {image : "https://via.placeholder.com/290x180?text=Fourth_Slide"},
    {image : "https://via.placeholder.com/290x180?text=Fifth_Slide"}

];

const storeDesktop = [
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "DKI Jakarta",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "Jawa Barat",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "Jawa Tengah",
        descrip   : "15 Sekolah"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "Bali",
        descrip   : "15 Sekolah"
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
    ,
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "Prov. Kepulauan Bangka Belitung",
        descrip   : "15 Sekolah"
    }
];


const storeDesktop2 =[
    {   name:"SD & MI", 
        idContent: "desktopSDdanMI",
        idBadges:"firstTabOnHomePage",
    },
    {
        name:"SMP & MTS", 
        idContent: "desktopSmpMts",
        idBadges:"secondTabOnHomePage",
    },
    {
        name:"SMA, SMK, & MA", 
        idContent: "desktopSmaSmkMa",
        idBadges:"thirdTabOnHomePage",
    },
    {
        name:"Universitas", 
        idContent: "desktopUniv",
        idBadges:"FourthTabOnHomePage",
    },
];
let dataProvMaptoProps=[];
let dataProvMaptoPropsSMP=[];
let dataProvMaptoPropsSMA=[];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          homepageSearch:'',
          limitPerPage:8,
          limitPerPageSMP:8,
          limitPerPageSMA:8,
        };
    }
    onClickSearchHandle = () =>{
        window.location="/search";
    }
    componentDidMount=async ()=>{
        this.getProvinceData(1);
        this.getProvinceDataSMP(1);
        this.getProvinceDataSMA(1);
        this.getPromoData();

    }
    getProvinceData=async(page)=>{
        const data = await this.props.fetchData(`http://localhost:8000/api/mainpage/sd`);
    }
    getProvinceDataSMP=async(page)=>{
        const data = await this.props.fetchDataSMP(`http://localhost:8000/api/mainpage/smp`);
    }
    getProvinceDataSMA=async(page)=>{
        const data = await this.props.fetchDataSMA(`http://localhost:8000/api/mainpage/sma`);
    }
    getPromoData=async(page)=>{
        const data = await this.props.fetchDataPromo(`http://localhost:8000/api/promo`);
    }
    getImageName=(imageid)=>{
        let imageForCard;
        if(imageid===11){
            imageForCard=ImageAceh;
        }
        else if(imageid===12){
            imageForCard=ImageSumateraUtara;
        }
        else if(imageid===13){
            imageForCard=ImageSumateraBarat;
        }
        else if(imageid===14){
            imageForCard=ImageRiau;
        }
        else if(imageid===15){
            imageForCard=ImageJambi;
        }
        else if(imageid===16){
            imageForCard=ImageSumateraSelatan;
        }
        else if(imageid===17){
            imageForCard=ImageBengkulu;
        }
        else if(imageid===18){
            imageForCard=ImageLampung;
        }
        else if(imageid===19){
            imageForCard=ImageBangkaBelitung;
        }
        else if(imageid===21){
            imageForCard=ImageKepulauanRiau;
        }
        else if(imageid===31){
            imageForCard=ImageJakarta;
        }
        else  if(imageid===32){
            imageForCard=ImageJawaBarat;
        }
        else if(imageid===33){
            imageForCard=ImageJawaTengah;
        }
        else if(imageid===34){
            imageForCard=ImageYogyakarta;
        }
        else if(imageid===35){
            imageForCard=ImageJawaTimur;
        }
        else if(imageid===36){
            imageForCard=ImageBanten;
        }
        else if(imageid===51){
            imageForCard=ImageBali;
        }
        else if(imageid===52){
            imageForCard=ImageNTB;
        }
        else if(imageid===53){
            imageForCard=ImageNTT;
        }
        else if(imageid===61){
            imageForCard=ImageKalimantanBarat;
        }
        else if(imageid===62){
            imageForCard=ImageKalimantanTengah;
        }
        else if(imageid===63){
            imageForCard=ImageKalimantanSelatan;
        }
        else if(imageid===64){
            imageForCard=ImageKalimantanTimur;
        }
        else if(imageid===65){
            imageForCard=ImageKalimantanUtara;
        }
        else if(imageid===71){
            imageForCard=ImageSulawesiUtara;
        }
        else if(imageid===72){
            imageForCard=ImageSulawesiTengah;
        }
        else if(imageid===73){
            imageForCard=ImageSulawesiSelatan;
        }
        else if(imageid===74){
            imageForCard=ImageSulawesiTenggara;
        }
        else if(imageid===75){
            imageForCard=ImageGorontalo;
        }
        else if(imageid===76){
            imageForCard=ImageSulawesiBarat;
        }
        else if(imageid===81){
            imageForCard=ImageMaluku;
        }
        else if(imageid===82){
            imageForCard=ImageMalukuUtara;
        }
        else if(imageid===91){
            imageForCard=ImagePapuaBarat;
        }
        else if(imageid===94){
            imageForCard=ImagePapua;
        }
        else{
            imageForCard="https://via.placeholder.com/255x242";
        }

        return imageForCard;
    }
    render() {
        if (this.props.hasError) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}>
                Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}>Loading…</p>;
        }
        let newArrayHomepage=[], newArrayWithFilterSearch=[];
        let newArrayHomepageSMP=[], newArrayWithFilterSearchSMP=[];
        let newArrayHomepageSMA=[], newArrayWithFilterSearchSMA=[];
        let newArrayPromo=[];
        this.props.homepage.map((newData, index)=>{
            let imageForCard=this.getImageName(newData.id);
            
            newArrayHomepage[index]={
                image     : imageForCard,
                titleCard : newData.name,
                descrip   : newData.favorite_count+"  SEKOLAH",
                link      : `/favorite?id=${newData.id}`,
            }
        })
        this.props.homepageSMP.map((newData, index)=>{
            let imageForCard=this.getImageName(newData.id);
            newArrayHomepageSMP[index]={
                image     : imageForCard,
                titleCard : newData.name,
                descrip   : newData.favorite_count+"  SEKOLAH",
                link      : `/favorite?id=${newData.id}`,

            }
        })
        this.props.homepageSMA.map((newData, index)=>{
            let imageForCard=this.getImageName(newData.id);
            newArrayHomepageSMA[index]={
                image     : imageForCard,
                titleCard : newData.name,
                descrip   : newData.favorite_count+"  SEKOLAH",
                link      : `/favorite?id=${newData.id}`,
            }
        })
        this.props.promo.map((data, index)=>{
            newArrayPromo[index]={
                image:data.image ? data.image : ImagePromo1,
            }
        });

        if(newArrayHomepage.length>0){
            newArrayHomepage.filter(name => name.titleCard.includes(this.state.homepageSearch.toUpperCase())).map((data,index)=>{
                newArrayWithFilterSearch[index]=data;
            });
        }
        if(newArrayHomepageSMP.length>0){
            newArrayHomepageSMP.filter(name => name.titleCard.includes(this.state.homepageSearch.toUpperCase())).map((data,index)=>{
                newArrayWithFilterSearchSMP[index]=data;
            });
        }
        if(newArrayHomepageSMA.length>0){
            newArrayHomepageSMA.filter(name => name.titleCard.includes(this.state.homepageSearch.toUpperCase())).map((data,index)=>{
                newArrayWithFilterSearchSMA[index]=data;
            });
        }
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <JumbotronDesktopBlue    
                                onClickHeader={()=>{this.onClickSearchHandle()}}
                                text="Cari sekolah sesuai kebutuhan Anda di Edukasi Plus"
                                store={imageSliderStore}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"65px"}}></div>
                            <TitlePageDesktopPromo 
                                name="Promo Untuk Anda"
                                link="/promo" 
                                linkName="Lihat Semua"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"30px"}}></div>
                            <CarouselDesktopPrimary    
                                onClickHeader={()=>{this.onClickSearchHandle()}}
                                text="Cari sekolah sesuai kebutuhan Anda di Edukasi Plus"
                                store={newArrayPromo}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"120px"}}></div>
                            <TitlePageDesktop name="Sekolah Favorit" />
                        </section>

                        <section>
                            <div style={{marginTop:"30px"}}></div>
                            <BadgesDesktop
                                store={[
                                    {   name:"SD & MI", 
                                        idContent: "desktopSDdanMI",
                                        idBadges:"firstTabOnHomePage",
                                    },
                                    {
                                        name:"SMP & MTS", 
                                        idContent: "desktopSmpMts",
                                        idBadges:"secondTabOnHomePage",
                                    },
                                    {
                                        name:"SMA, SMK, & MA", 
                                        idContent: "desktopSmaSmkMa",
                                        idBadges:"thirdTabOnHomePage",
                                    },
                                    // {
                                    //     name:"Universitas", 
                                    //     idContent: "desktopUniv",
                                    //     idBadges:"FourthTabOnHomePage",
                                    // },
                                ]}
                                placeholderSearch="Cari Provinsi"
                                onChangeSearch={(eventsearch)=>{this.setState({homepageSearch:eventsearch.target.value})}}
                            />
                        </section>
                        <section id="desktopSDdanMI" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop
                                store={newArrayWithFilterSearch.slice(0,this.state.limitPerPage)}
                                loadmoreEnable={true}
                                onClickLoadmore={(e)=>{this.setState({limitPerPage : this.state.limitPerPage+8})}}
                            />
                            <div style={{marginBottom: "75px"}}></div>
                        </section>
                        <section id="desktopSmpMts" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={newArrayWithFilterSearchSMP.slice(0,this.state.limitPerPageSMP)}
                                loadmoreEnable={true}
                                onClickLoadmore={(e)=>{this.setState({limitPerPageSMP : this.state.limitPerPageSMP+8})}}
                            />
                            <div style={{marginBottom: "75px"}}></div>
                        </section>
                        <section id="desktopSmaSmkMa" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={newArrayWithFilterSearchSMA.slice(0,this.state.limitPerPageSMA)}
                                loadmoreEnable={true}
                                onClickLoadmore={(e)=>{this.setState({limitPerPageSMA : this.state.limitPerPageSMA+8})}}
                            />
                            <div style={{marginBottom: "75px"}}></div>
                        </section>
                        <section id="desktopUniv" style={{display:"none"}} className="tabcontendetailDesktop">
                            <CardImageSecondaryDesktop 
                                store={storeDesktop}
                            />
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <JumbotronWithCarousel
                                onClickHeader={()=>{this.onClickSearchHandle()}}
                                text="Cari sekolah sesuai kebutuhan Anda di Edukasi Plus"
                                store={imageSliderStore}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"32px"}}></div>
                            <MobileHomePageTitle name="Promo Untuk Anda" />
                        </section>
                        <section>
                            <div style={{marginTop: "10px"}} />
                            <CarouselMobileSecondary store={imageSliderStore} />
                        </section>

                        <section>
                            <div style={{marginTop:"65px"}}></div>
                            <MobileHomePageTitle name="Sekolah Favorit" />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BadgesGroupFavoriteSchools store={[
                                {
                                    name:"SD & MI", 
                                    idContent: "mobileSDdanMI",
                                    idBadges:"firstTabOnHomePageMobile",
                                },
                                {
                                    name:"SMP & MTS", 
                                    idContent: "mobileSmpMts",
                                    idBadges:"secondTabOnHomePageMobile",
                                },
                                {
                                    name:"SMA, SMK, & MA", 
                                    idContent: "mobileSmaSmkMa",
                                    idBadges:"thirdTabOnHomePageMobile",
                                },
                                // {name:"Universitas", idContent: "mobileUniv"},
                            ]} />
                        </section>
                        <section>
                            <div style={{marginTop:"35px"}}></div>
                            <InputSearchMobile 
                                onChange={(eventsearch)=>{this.setState({homepageSearch:eventsearch.target.value})}} 
                                label="CariProvinsi"
                                placeholder="Cari Provinsi"
                            />
                        </section>
                        <section style={{display: "none"}} id="mobileSDdanMI" className="tabcontendetail">
                            <div style={{marginTop: "25px"}}></div>
                            <CardImageMobile 
                                store={newArrayWithFilterSearch.slice(0,this.state.limitPerPage)}
                                loadmoreEnable={true}
                                onClickLoadmore={(e)=>{this.setState({limitPerPage : this.state.limitPerPage+8})}}
                            />
                            <div style={{marginBottom:"25px"}}></div>
                        </section>
                        <section style={{display: "none"}} id="mobileSmpMts" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobile store={newArrayWithFilterSearchSMP.slice(0,this.state.limitPerPageSMP)} 
                                loadmoreEnable={true}
                                onClickLoadmore={(e)=>{this.setState({limitPerPageSMP : this.state.limitPerPageSMP+8})}}
                            />
                            <div style={{marginBottom:"25px"}}></div>                            
                        </section>
                        <section style={{display: "none"}} id="mobileSmaSmkMa" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobile store={newArrayWithFilterSearchSMA.slice(0,this.state.limitPerPageSMA)} 
                                loadmoreEnable={true}
                                onClickLoadmore={(e)=>{this.setState({limitPerPageSMA : this.state.limitPerPageSMA+8})}}
                            />
                            <div style={{marginBottom:"25px"}}></div>        
                        </section>
                        <section style={{display: "none"}} id="mobileUniv" className="tabcontendetail">
                            <div style={{marginTop: "48px"}}></div>
                            <CardImageMobile store={storeMobile} />
                        </section>     
                    </OnMobile>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {    return {
        homepage: state.homepage,
        homepageSMP: state.homepageSMP,
        homepageSMA: state.homepageSMA,
        promo : state.promo,
        hasError: state.homepageHaveError,
        isLoading: state.homepageAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(homepageFetchData(url)),
        fetchDataSMP: (url) => dispatch(homepageFetchDataSMP(url)),
        fetchDataSMA: (url) => dispatch(homepageFetchDataSMA(url)),
        fetchDataPromo: (url) => dispatch(promoFetchData(url)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
