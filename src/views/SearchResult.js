import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';
import { OnDesktop, OnMobile } from '../constants/Breackpoint';

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
import Pagination from '../components/base_components/Desktop/Pagination/Pagination';
import LoadingComponents from '../components/base_components/Desktop/Loading/LoadingComponents';

//import mobile
import BreadCrumbMobile from '../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import TitlePageMobile from '../components/base_components/TitlePage/TitleMobile/TitlePage';
import TitleWithSeparator from '../components/base_components/TitlePage/TitleMobile/TitleWithSeparator';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import DropDownList from '../components/base_components/DropDwonList/DropdownMobile/DropDownList';
import CardImageTertiary from '../components/base_components/Card/CardMobile/CardImage/CardImageTertiary';
import SingleBadges from '../components/base_components/Badges/BadgesMobile/SingleBadges';
import LineComponents from '../components/base_components/LineComponents/Mobile/LineComponents';


//Image For School List
import ImageSchool from '../asset/image/SchoolLists/schoolsILustrator.png';

// const getUrlBackend = "http://localhost:8000/"
// const getUrlBackend = "http://45.77.46.116/"
// const getUrlBackend = "https://admin.edukasiplus.com/"
const getUrlBackend = "https://backend.edukasiplus.com/"
// const getUrlBackend = "http://backend.edukasiplus.com/" //No SSL

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state =  {
          currenPageSearchResult:1,
          favoriteData:[],
          sortBy:'',
          todos: ['a','b','c','d','e','f','g','h','i','j','k'],
          currentPage: 1,
          todosPerPage: 3
        };
    }
    componentDidMount=async ()=>{
        this.getSchoolsData(1);
    }
    componentDidUpdate=()=>{
        // if(this.props.searchResultData.length !== 0){
        //     $(window).scroll(()=> {
        //         let hT = $('#cardimageSeacrhResultId').offset().top,
        //             hH = $('#cardimageSeacrhResultId').outerHeight(),
        //             wH = $(window).height(),
        //             wS = $(window).scrollTop();
        //         if(this.props.currentSearchResult < this.props.lastSearchResult){
        //             if (wS > (hT+hH-wH)){
        //                 $('#buttonLoadmoreSearchResult').click();
        //             }
        //         }
        //     });
        // }
    }
    componentWillUnmount() {
        document.removeEventListener('scroll');
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
        await this.props.fetchData(`${getUrlBackend}api/search/?page=${page}`, ParameterPostData);
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
    printStageSearchResult=(data)=>{
        if(data==="sd"){
            return "SD & MI"
        }
        else if(data === "smp"){
            return "SMP & MTS"
        }
        else if(data === "sma"){
            return "SMA, SMK & ALIYAH"
        }
    }
    printSchoolsStatus=(data)=>{
        if(data==="negeri"){
            return "Negeri";
        }
        else{
            return "Swasta";
        }
    }
    searchAnotherSchools=()=>{
        window.location.href="/search";
    }
    render() {
        if (this.props.hasError) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}><p id="cardimageSeacrhResultId"></p>
                Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p id={window.location.hash ? window.location.hash.replace("#","") : "defaultOpenBadges"}><LoadingComponents /></p>;
        }
        let newArraySearchResult=[], imageForSchools;
        const urlParams = new URLSearchParams(window.location.search);
        const myParamId = urlParams.get('district_id');
        const myParamEduStage = urlParams.get('educationstage');
        const schoolsStatus = urlParams.get('status');
        this.props.searchResultData.forEach((newData, index)=>{
            if(newData.images!==undefined && newData.images.length>0){
                imageForSchools=newData.image;
            }
            else{
                imageForSchools=ImageSchool;
            }
            newArraySearchResult[index]={
                image     : imageForSchools,
                titleCard : newData.name,
                descrip   : newData.address,
                link      : `/detail?uuid=${newData.uuid}&&schid=${myParamId.substr(0, 4)}&&edustage=${myParamEduStage}&&page_from=searchresult`,
            }
            // searchResultIndex++;
        });
        return (
            <>
                <OnDesktop>
                    <section>
                        <div style={{marginTop:"25px"}}></div>
                        <BreadCrumbDesktop 
                            store={[{name:"Home", link:"/"},{name:"Search", link:"/search"},{name:"Hasil Pencarian", link:"#"}]}
                        />
                    </section>
                    <section>
                        <div style={{marginTop:"36px"}}></div>
                        <TitlePageHeaderDesktop
                            name={`Daftar ${this.printStageSearchResult(this.props.stageSearchResult)} ${this.printSchoolsStatus(schoolsStatus)}`}
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
                            onClick={(e)=>{this.setState({sortBy : e.target.value})}}
                            onClickArea={(e)=>{console.log(e.target.value)}}
                        />
                    </section>
                    <section>
                        <SingleDesktopBadgesWhite
                            store={[{name:`${this.props.countSearchResult} Data ditemukan`, idContent: "desktopSchoolsContactId"}]}
                        />
                    </section>
                    <section id="cardimageSeacrhResultId">   
                        <CardImageTertiarayDesktop 
                            store={newArraySearchResult.length > 0 && this.state.sortBy === "az" ? this.dataArrayToAsc(newArraySearchResult) :
                                newArraySearchResult.length > 0 && this.state.sortBy === "za" ? this.dataArrayToDesc(newArraySearchResult):
                                newArraySearchResult
                            }
                        />
                    </section>
                    <section>
                        <div style={{marginTop: "0px"}}></div>
                        <Pagination
                            onClickPrev={(e)=>{this.getSchoolsData(e.target.value)}}
                            onClickNumber={(e)=>{this.getSchoolsData(e.target.value)}}
                            onClickNext={(e)=>{this.getSchoolsData(e.target.value)}}
                            store={newArraySearchResult.length > 0 && this.state.sortBy === "az" ? this.dataArrayToAsc(newArraySearchResult) :
                                newArraySearchResult.length > 0 && this.state.sortBy === "za" ? this.dataArrayToDesc(newArraySearchResult):
                                newArraySearchResult
                            }
                            dataPerPage={3}
                            lastPage={this.props.lastSearchResult !== 0 ? this.props.lastSearchResult : 0 }
                            currentPage={this.props.currentSearchResult !== 0 ? this.props.currentSearchResult : 0 }
                        />
                    </section>
                    <section>
                        <div style={{marginTop: "79px"}}></div>
                        <ButtonAnotherSchoolsDesktop
                            name="CARI SEKOLAH LAINNYA"
                            width="277px"
                            onClick={()=>{this.searchAnotherSchools()}}
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
                        <div style={{marginTop:"25px"}}></div>
                        <BreadCrumbMobile 
                            store={[{name:"Home", link:"/"},{name:"Search", link:"/search"},{name:"Hasil Pencarian", link:"#"}]}
                        />
                    </section>
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
                            onClick={(e)=>{this.setState({sortBy : e.target.value})}}
                            onClickArea={(e)=>{console.log(e.target.value)}}
                        />
                    </section>
                    {/* <section>
                         <CardListSecondary store={store} />
                    </section> */}
                    <section>
                         <SingleBadges name={`${this.props.countSearchResult} Data ditemukan`} />
                    </section>
                    <section>
                        <div style={{marginTop: "48px"}}></div>
                        <CardImageTertiary 
                            store={newArraySearchResult.length > 0 && this.state.sortBy === "az" ? this.dataArrayToAsc(newArraySearchResult) :
                            newArraySearchResult.length > 0 && this.state.sortBy === "za" ? this.dataArrayToDesc(newArraySearchResult):
                            newArraySearchResult
                            }                        
                        />
                    </section>
                    <section>
                        <ButtonSecondary 
                            name="CARI SEKOLAH LAINNYA" 
                            onClick={()=>{this.searchAnotherSchools()}}
                        />
                    </section>
                </OnMobile>                    
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        searchResultData: state.searchResult,
        currentSearchResult : state.currentSearchResult,
        lastSearchResult: state.lastSearchResult,
        countSearchResult: state.countSearchResult,
        stageSearchResult: state.stageSearchResult,
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
