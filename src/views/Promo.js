import React, { Component } from 'react';
import { connect } from 'react-redux';

import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Get Aceess Input Fetch Redux
import { 
    promoFetchData, 
} from './redux/actions/promo';


//Desktop
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import CardImagePromoDesktop from '../components/base_components/Desktop/CardPromo/CardImagePromoDesktop';
import ButtonLoadMoreDesktop  from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';


//Mobile Item
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import CardImgePromo from '../components/base_components/Card/CardMobile/CardPromo/CardImgePromo';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import ButtonLoadMore from '../components/base_components/Button/ButtonMobile/ButtonSecondary';

//Image Desktop
import ImagePromo3 from '../components/asset/images/Promo/Promo3eduplus.png'

//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

//Image Promo
import ImagePromo1 from '../asset/image/Promo/Promo1.png'

//dummy Mobile
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "PROMO #1",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "PROMO #2",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "PROMO #3",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
    {
        image     : "https://via.placeholder.com/256x242",
        titleCard : "PROMO #4",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
    {
        image     : "https://via.placeholder.com/255x242",
        titleCard : "PROMO #5",
        descrip   : "Voluptate reprehenderit duis aliquip Lorem tempor sit."
    },
];



//dummy Desktop
const storeDesktop = [
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "#PROMO1",
        descrip   : "labore deserunt amet minim nostrud dolor aute "
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "#PROMO2",
        descrip   : "labore deserunt amet minim nostrud dolor aute sit sit consequat esse dolore veniam ad nulla"
    },
    {
        image     : ImagePromo3,
        titleCard : "#PROMO3",
        descrip   : `labore deserunt amet minim nostrud dolor aute sit sit consequat esse dolore veniam ad nulla. 
                    labore deserunt amet minim nostrud dolor aute sit sit consequat esse dolore veniam ad nulla  
                    labore deserunt amet minim nostrud dolor aute sit sit consequat esse dolore veniam ad nulla`
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "#PROMO4",
        descrip   : "labore deserunt amet minim nostrud dolor aute sit sit consequat esse dolore veniam ad nulla"
    },
    {
        image     : "https://via.placeholder.com/255x256",
        titleCard : "#PROMO5",
        descrip   : "labore deserunt amet minim nostrud dolor aute sit sit consequat esse dolore veniam ad nulla"
    },
    {
        image     : "https://via.placeholder.com/256x255",
        titleCard : "#PROMO6",
        descrip   : "labore deserunt amet minim nostrud dolor aute sit sit consequat esse dolore veniam ad nulla"
    }
];

// const getUrlBackend = "http://localhost:8000/"
const getUrlBackend = "http://45.77.46.116/"
// const getUrlBackend = "https://admin.edukasiplus.com/"
// const getUrlBackend = "https://backend.edukasiplus.com/"


class Promo extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          favoriteData:[],
        };
    }
    componentDidMount=async ()=>{
        this.getPromoData(1);
    }
    getPromoData=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('uuid');
        const data = await this.props.fetchData(`${getUrlBackend}api/promo`);
    }
    render(){
        if (this.props.hasError) {
            return <p id="defaultOpenBadges">Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading || this.props.isLoadingSend) {
            return <p id="defaultOpenBadges">Loading…</p>;
        }
        let newArrayPromo = [], imageForPromo;
        if(this.props.promoPage.length > 0){
            this.props.promoPage.map((data, index)=>{
                if(data.image!==""){
                    imageForPromo=data.image;
                }
                else{
                    imageForPromo=ImagePromo1;
                }
                console.log(data.image);
                newArrayPromo[index]={
                    image     : imageForPromo,
                    titleCard : data.name,
                    descrip   : data.description
                }
            });
        }
        return (
            <>
                <div>
                    <OnDesktop>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Daftar Sekolah"},{name:"Detail Sekolah", link:"#"}]}
                            />
                        </section>
                        <section>
                            <TitlePageHeaderDesktop
                                name="Promo"
                                color="#1A6EB2"
                                width="100%"
                                textAlign="left"
                            />
                            <div style={{marginBottom:"25px"}}></div>
                        </section>
                        <section>
                            <CardImagePromoDesktop 
                                store={newArrayPromo}
                            />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                            <ButtonLoadMoreDesktop 
                                name="MUAT LEBIH BANYAK"
                                width="277px"
                                boxShadow="none"
                                background="#f3f3f3"
                            />
                            <div style={{marginTop: "25px"}}></div>
                        </section>
                    </OnDesktop>
                    <OnMobile>
                        {/* <section>
                            <JumbotronMobileSecondary
                                primaryText="Sekolah Favorit"
                                secondaryText="DKI Jakarta"
                            />
                        </section> */}
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[{name:"Home"},{name:"DKI Jakarta", link:"#"}]}
                            />
                        </section>
                        <section>
                            <TitlePageMobile
                                name="Promo"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"15px"}}></div>
                            <CardImgePromo store={storeMobile} />
                        </section>
                        <section>
                            <div style={{marginTop: "25px"}}></div>
                                <ButtonLoadMore 
                                    name="MUAT LEBIH BANYAK"
                                    width="277px"
                                    boxShadow="none"
                                    background="#f3f3f3"
                                />
                            <div style={{marginBottom:"75px"}}></div>
                        </section>
                    </OnMobile>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        promoPage: state.promoPage,
        hasError: state.promoHaveError,
        isLoading: state.promoAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(promoFetchData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Promo);
