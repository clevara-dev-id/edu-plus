import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

//Redux 
import { 
    searchResultFetchData, 
} from './redux/actions/serachresult';

//import Desktop
import CardImageTertiarayDesktop from '../components/base_components/Desktop/CardImage/CardImageTertiarayDesktop';
import ButtonAnotherSchoolsDesktop  from '../components/base_components/Desktop/Button/PrimaryButtonDesktop';
import TitlePageHeaderDesktop from '../components/base_components/Desktop/TitlePage/TitlePageHeaderDesktop'; 
import LineComponentsDesktop from '../components/base_components/Desktop/LineComponents/LineComponentsDesktop';
import SingleDesktopBadgesWhite from '../components/base_components/Desktop/Badges/SingleDesktopBadgesWhite';
import TitlePageWithSparatorDesktop from '../components/base_components/Desktop/TitlePage/TitlePageWithSparatorDesktop';
import DropDownListArrowDesktop from '../components/base_components/Desktop/DropDownList/DropDownListArrowDesktop';
import BreadCrumbDesktop from '../components/base_components/Desktop/BreadCrumb/BreadCrumbDesktop';

//import mobile
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import TitleWithSeparator from '../components/base_components/TitlePage/TitleMobile/TitleWithSeparator';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import DropDownList from '../components/base_components/DropDwonList/DropdownMobile/DropDownList';
import CardImageTertiary from '../components/base_components/Card/CardMobile/CardImage/CardImageTertiary';
import SingleBadges from '../components/base_components/Badges/BadgesMobile/SingleBadges';
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';

//Import Image Desktop
import SlideImageDesktop1 from '../components/asset/images/Detail/sekolah.png';

//Image
import JakartaImage from '../components/asset/images/FavoritePage/JakartaUtara.png'

//Import Image
import CardImage1 from '../components/asset/images/CardList/SMAN14JAKARTA.png';
import CardImage2 from '../components/asset/images/CardList/SMAN51JAKARTA.png';
import CardImage3 from '../components/asset/images/CardList/SMAN62JAKARTA.png';
import CardImage4 from '../components/asset/images/CardList/SMAN93JAKARTA.png';

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

//dummy desktop
const DesktopSlider = [
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1},
    {image : SlideImageDesktop1}
];

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

let dataSearchResultMaptoProps=[];

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          favoriteData:[],
        };
    }
    componentDidMount=async ()=>{
        this.getSchoolsData(1);
    }
    getSchoolsData=async(page)=>{
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('district_id');
        const stage = urlParams.get('educationstage');
        const status = urlParams.get('status');
        let ParameterPostData = {
            "stage":stage,
            "status":status ==="negeri" ? 1 : status === "swasta" ? 0 : null,
            "province":myParamId.substr(0,2),
            "regency":myParamId.substr(0,4),
            "district" : myParamId,
        }
        const data = await this.props.fetchData(`http://localhost:8000/api/search/?page=${page}`,ParameterPostData);
    }
    render() {
        if (this.props.hasError) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}>
                Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}>Loading…</p>;
        }
        let newArraySearchResult=[], searchResultIndex=0, imageForSchools;
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('id');
        this.props.searchResultData.forEach((data, index)=>{
            data.map((newData)=>{
                if(newData.images!==undefined && newData.images.length>0){
                    imageForSchools=newData.image;
                }
                else{
                    imageForSchools=ImageSchool;
                }
                newArraySearchResult[searchResultIndex]={
                    image     : imageForSchools,
                    titleCard : newData.name,
                    descrip   : newData.address,
                    link      : `/detail?uuid=${newData.uuid}&&schid=${myParamId}&&edustage=sd`,
                }
                searchResultIndex++;
            });

        });
        console.log(newArraySearchResult);
        return (
            <>
                <OnDesktop>
                    <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbDesktop 
                                store={[{name:"Home"},{name:"Search", link:"#"},{name:"Hasil Pencarian", link:"#"}]}
                            />
                        </section>
                    <section>
                        <div style={{marginTop:"36px"}}></div>
                        <TitlePageHeaderDesktop
                            name={`Daftar SD ${"&"} MI Swasta`}
                            color="#1A6EB2"
                            width="100%"
                            textAlign="left"
                        />
                    </section>
                    <section>
                        <div style={{marginTop:"8px"}}></div>
                        <TitlePageWithSparatorDesktop
                            store={["Bangka", "Mampang Prapatan", "Jakarta Selatan", "DKI Jakarta"]}
                        />
                    </section>
                    <section>
                        <div style={{marginTop:"15px"}}></div>
                        <LineComponentsDesktop />
                        <div style={{marginBottom: "20px"}} />
                    </section>
                    <section>
                        <DropDownListArrowDesktop 
                            onClick={(e)=>{console.log(e.target.value)}}
                            onClickArea={(e)=>{console.log(e.target.value)}}
                        />
                    </section>
                    <section>
                        <SingleDesktopBadgesWhite
                            store={[{name:`${newArraySearchResult.length} Data ditemukan`, idContent: "desktopSchoolsContactId"}]}
                        />
                    </section>
                    <section>   
                        <CardImageTertiarayDesktop 
                            store={newArraySearchResult}
                        />
                    </section>
                    <section>
                        <div style={{marginTop: "25px"}}></div>
                        <ButtonAnotherSchoolsDesktop
                            name="CARI SEKOLAH LAINNYA"
                            width="277px"
                        />
                        <div style={{marginTop: "79px"}}></div>
                    </section>
                </OnDesktop>
                <OnMobile>
                    {/* <section>
                        <div style={{marginTop: "48px"}}></div>
                        <Title name="Daftar SMA Negeri" />
                    </section> */}
                    <section>
                        <div style={{marginTop:"36px"}}></div>
                        <TitlePageMobile
                            name="Daftar SD & MI Swasta"
                            color="#1A6EB2"
                        />
                    </section>
                    <section>
                        <div style={{marginTop:"8px"}}></div>
                        <TitleWithSeparator
                            store={["Bangka", "Mampang Prapatan", "Jakarta Selatan", "DKI Jakarta"]}
                        />
                    </section>
                    <section>
                        <LineComponents 
                            marginTop="24px"
                            marginBottom="24px"
                            border="1.5px solid #DBDBDB"
                        />
                    </section>
                    {/* <section>
                        <BadgesGroupSecondary store={store3} />
                    </section> */}
                    <section>
                        <DropDownList 
                            onClick={(e)=>{console.log(e.target.value)}}
                            onClickArea={(e)=>{console.log(e.target.value)}}
                        />
                    </section>
                    {/* <section>
                         <CardListSecondary store={store} />
                    </section> */}
                    <section>
                         <SingleBadges name="3 data ditemukan" />
                    </section>
                    <section>
                        <div style={{marginTop: "48px"}}></div>
                        <CardImageTertiary store={storeMobile} />
                    </section>
                    <section>
                        <ButtonSecondary name="CARI SEKOLAH LAINNYA" onClick={(e)=>{console.log("this is button Secondary Button !")}} />
                    </section>
                </OnMobile>                    
            </>
        );
    }
}
const mapStateToProps = (state) => {
    dataSearchResultMaptoProps[state.currentSearchResult]=state.searchResult;
    console.log()
    return {
        searchResultData: dataSearchResultMaptoProps,
        currentSearchResult : state.currentSearchResult,
        hasError: state.searchResultHaveError,
        isLoading: state.searchResultAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, data) => dispatch(searchResultFetchData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
