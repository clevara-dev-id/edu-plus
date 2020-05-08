import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

import { OnDesktop, OnMobile, onTablet } from '../../constants/Breackpoint';

//Desktop
// import JumbotronDesktop from '../components/base_components/Desktop/Jumbotron/JumbotronDesktop';
// import CardImage from '../components/base_components/Desktop/CardImage/CardImage';
// import BadgesDesktop from '../components/base_components/Desktop/Badges/DesktopBadges';

//Mobile Item
import BreadCrumbMobile from '../../components/base_components/BreadCrumb/Mobile/BreadCrumbMobile';
import CardImageSingleMobile from '../../components/base_components/Card/CardMobile/SingleImage/CardImageSingleMobile';
import TitlePageWithAddress from '../../components/base_components/TitlePage/TitleMobile/TitlePageWithAddress';
import LineComponents from '../../components/base_components/LineComponents/Mobile/LineComponents';
import TitleBotttomTertiary from '../../components/base_components/TitleBottom/Mobile/TitleBotttomTertiary';
import FormGetAccessMobile from '../../components/base_components/Form/FormGetAccess/FormGetAccessMobile';
import SweetAlert from '../../components/base_components/SweetAllaret/mobile/SweetAlaretMobile';
import FormRegister from '../../components/base_components/Auth/Mobile/FormRegister';
import DropdownListFilter from '../../components/base_components/DropDwonList/DropdownMobile/DropDownListFilter';
import DropdownListFilterFour from '../../components/base_components/DropDwonList/DropdownMobile/DropDownListFilterFour';
import ButtonPrimary from '../../components/base_components/Button/ButtonMobile/ButtonPrimary';
import RadioButtonTwo from '../../components/base_components/RadioButton/RadioButtonMobile/RadioButtonTwo';
import FormRegisterSingle from '../../components/base_components/Auth/Mobile/FormRegisterSingle';
import TitlePageMobile from '../../components/base_components/TitlePage/TitleMobile/TitlePage';
import RadioButtonTwoTab from '../../components/base_components/RadioButton/RadioButtonMobile/RadioButtonTwoTab';
import TitleDropDownList from '../../components/base_components/TitlePage/TitleMobile/TitleDropDownList';

//Image
import JakartaImage from '../../components/asset/images/FavoritePage/JakartaUtara.png';

//get data
const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;


//dummy Mobile
// const storeMobile = [];
const storeMobile = [
    {
        image     : JakartaImage,
        titleCard : "DKI Jakarta",
        descrip   : "15 Sekolah"
    },
];

const storeMobileTwo = [
    {id:"001", name:'SD'},
    {id:"002", name:'Madrasah Tsanawiyah'},
    {id:"003", name:'SMP'},
    {id:"004", name:'SMA'},
    {id:"005", name:'Madrasah Aliyah'},
];

const TabTwoData =[
    {name:"Daftarkan Sekolah", idContent: "schoolsRegistrationForm"},
    {name:"Daftarkan Kursus", idContent: "traiingEducationRegistrationForm"},
];

//dummy Desktop
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
];

const storeDesktop2 =[
    {name:"SD & MI", idContent: "desktopSDdanMI"},
    {name:"SMP & MTS", idContent: "desktopSmpMts"},
    {name:"SMA, SMK, & MA", idContent: "desktopSmaSmkMa"},
    {name:"Universitas", idContent: "desktopUniv"},
];


class Register extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            opsSekolah: false,
            fields: {},
            errors: {},
            storeToast :'',
            show:"false",
            provinceList:[],
            cityList:[],
            districtList:[],
            villageList:[],
            province:"",
            city:"",
            district:"",
            village:"",
        }
    }
    componentDidMount = () =>{
        this.getProvinceName();
    }
    getProvinceName = async () =>{
        let provinceData=[];
        const data = {
            "province" : "Jawa Barat",
        };
        const result =await axios.post(BACKEND_URL+'/api/location',data);
        const convert = await result.data.province;        
        convert.forEach((data,index)=>{
            provinceData[index]={id:data.province, name:data.province}
        });
        this.setState({provinceList:provinceData});
        return provinceData;
    }
    checkProvince = () =>{
        let checklist = true;
        if(this.state.province===""){
            checklist=false;
        }

        return checklist;
    }
    getCityName = async () =>{
        if(this.checkProvince()){
            let cityData=[];
            const data = {
                "province" : this.state.province,
                "city":this.state.city,
            };
            const result =await axios.post(BACKEND_URL+'/api/location',data);
            const convert = await result.data.city;        
            convert.forEach((data,index)=>{
                cityData[index]={id:data.city, name:data.city}
            });
            this.setState({cityList:cityData});
            return cityData;
        }
        else{
            SweetAlert("Maaf !","Sebelun memilih Kabupaten/Kota anda harus memilih Provinsi terlebih dahulu", "error" );
        }
    }
    checkCity = () =>{
        let checklist = true;
        if(this.state.city===""){
            checklist=false;
        }

        return checklist;
    }
    getDistrictName= async ()=>{
        if(this.checkCity()){
            let dictrictData=[];
            const data = {
                "province" : this.state.province,
                "city"     : this.state.city,
            };
            const result =await axios.post(BACKEND_URL+'/api/location',data);
            const convert = await result.data.district;        
            convert.forEach((data,index)=>{
                dictrictData[index]={id:data.district, name:data.district}
            });
            this.setState({districtList:dictrictData});
            return dictrictData;
        }
        else{
            SweetAlert("Maaf !","Sebelun memilih Kecamatan anda harus memilih Kabupaten/Kota terlebih dahulu", "error" );
        }
    }
    checkDistrict = () =>{
        let checklist = true;
        if(this.state.city===""){
            checklist=false;
        }

        return checklist;
    }
    getVillageName= async ()=>{
        if(this.checkCity()){
            let villageData=[];
            const data = {
                "province" : this.state.province,
                "city"     : this.state.city,
                "district" : this.state.district,

            };
            const result =await axios.post(BACKEND_URL+'/api/location',data);
            const convert = await result.data.village;        
            convert.forEach((data,index)=>{
                villageData[index]={id:data.village, name:data.village}
            });
            console.log(villageData)
            this.setState({villageList:villageData});
            return villageData;
        }
        else{
            SweetAlert("Maaf !","Sebelun memilih Kecamatan anda harus memilih Kabupaten/Kota terlebih dahulu", "error" );
        }
    }
    IsSchoolNameValid = (inputcontetntnameid, errornamecontentid, messageText) =>{
        return $(document).ready(()=>{
            let valueInput, text, formIsValid=true;
        
            // Get the value of the input field with id="numb"
            valueInput = document.getElementById(inputcontetntnameid).value;
            
            if (!valueInput) {
                text = messageText;
                formIsValid=false;
            } 
            else{
                text="";
            }
            
            document.getElementById(errornamecontentid).innerHTML = text;
            return formIsValid;
        }); 
    }
    IsSchoolAddressValid = (inputaddressformid, erroraddressformid) =>{
        return $(document).ready(()=>{
            let valueInput, text, formIsValid=true;
        
            // Get the value of the input field with id="numb"
            valueInput = document.getElementById(inputaddressformid).value;
            
            if (!valueInput) {
            text = "Address Cannot be Empty !";
            formIsValid=false;
            } 
            else {
            text = "";
            }
            document.getElementById(erroraddressformid).innerHTML = text;
            return formIsValid;
        }); 
    }
    IsPhoneValid = (inputformphoneid, errorphoneformid) => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(inputformphoneid).value;
          
        if (!valueInput) {
          text = "Phone Number cannot be empty !";
          formIsValid=false;
        }

        if (isNaN(valueInput)) {
            text = "Phone Number Must be Integer !";
            formIsValid=false;
        } 

        if (valueInput < 0) {
            text = "Phone Number Must Positive Number !";
            formIsValid=false;
        }

        if (valueInput.length > 14) {
            text = "Phone Number max 14 Digit !";
            formIsValid=false;
        } 

        document.getElementById(errorphoneformid).innerHTML = text;
        return formIsValid;
    }
    
    IsEmailValid = (inputemailformid, erroremailformid) => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(inputemailformid).value;
        if (!valueInput) {
            text = "e-Mail cannot be empty !";
            formIsValid=false;
        }
        else if(typeof valueInput !== "undefined"){
            let lastAtPos = valueInput.lastIndexOf('@');
            let lastDotPos = valueInput.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && valueInput.indexOf('@@') == -1 && lastDotPos > 2 && (valueInput.length - lastDotPos) > 2)) {
                text = "Invalid Format";
                formIsValid=false;
            }
        }
  
        document.getElementById(erroremailformid).innerHTML = text;
        return formIsValid;
    }
    IsOperatorValid = (inputopratorformid, erroropratorformid) => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById(inputopratorformid).value;
          
        if (!valueInput) {
          text = "Operator Name cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById(erroropratorformid).innerHTML = text;
        return formIsValid;
    }

    handleOnChange = () => {
        let formIsValid=true;
        if(!this.IsSchoolNameValid("registerforminputnameschoolscontent","registererrormessageschoolnamescontent", "School Name Cannot be Empty !")){
            formIsValid=false;
        }

        if(!this.IsSchoolAddressValid("registerforminputadresscontent","registererrormessageadresscontent")){
            formIsValid=false;
        }

        if(!this.IsPhoneValid("phoneFormContactComponent","errorValuePhone")){
            formIsValid=false;
        }

        if(!this.IsEmailValid("emailFormContactComponent","errorValueEmail")){
            formIsValid=false;
        }
        if(!this.IsOperatorValid("operatorFormContactComponent","errorValueOperator")){
            formIsValid=false;
        }
        return formIsValid;
    }

    handleOnChangeCourse = () => {
        let formIsValid=true;
        if(!this.IsSchoolNameValid("registerforminputnamecoursecontent","registererrormessagecoursenamescontent", "Course Site Cannot be Empty !")){
            formIsValid=false;
        }

        if(!this.IsSchoolAddressValid("registerforminputadressCoursecontent","registererrormessageadressCoursecontent")){
            formIsValid=false;
        }

        if(!this.IsPhoneValid("formPhoneContentRegisterId","errorFormPhoneContentRegisterId")){
            formIsValid=false;
        }

        if(!this.IsEmailValid("formEmailContentRegisterId","errorFormEmailContentRegisterId")){
            formIsValid=false;
        }
        if(!this.IsOperatorValid("formOpratorContentRegisterId","errorformOperatorContentRegisterId")){
            formIsValid=false;
        }
        return formIsValid;
    }
                
    handleButtonRegister=()=>{
        if(this.handleOnChange()){
            if(this.handleOnChange()){
                SweetAlert("Daftar Berhasil !","Akun Berhasil di Daftarkan Silahkan cek email anda untuk konfirmasi", "success" );
            }else{
                SweetAlert("Daftar Gagal !","Maaf Terjadi Kesalahan Silahkan Coba beberapa Saat Lagi", "error" );
            }
        }
    
    }

    handleButtonRegisterCourse=()=>{
        if(this.handleOnChangeCourse()){
            if(this.handleOnChangeCourse()){
                SweetAlert("Daftar Berhasil !","Akun Berhasil di Daftarkan Silahkan cek email anda untuk konfirmasi", "success" );
            }else{
                SweetAlert("Daftar Gagal !","Maaf Terjadi Kesalahan Silahkan Coba beberapa Saat Lagi", "error" );
            }
        }
    
    }
     
    render() {
        return (
            <>
                <div>
                    <OnDesktop>
                    </OnDesktop>
                    <OnMobile>
                        <section>
                            <div style={{marginTop:"36px"}}></div>
                            <TitlePageMobile
                                name="Daftarkan Sekolah / Tempat Kursus"
                                color="#1A6EB2"
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <BreadCrumbMobile 
                                store={[
                                    {name:"Pencarian data"},
                                    {name:"Form Pendaftaran", link:"#"},
                                ]}
                            />
                        </section>
                        <section>
                            <div style={{marginTop:"25px"}}></div>
                            <RadioButtonTwoTab
                                store={TabTwoData}
                            />
                        </section>
                        <div style={{display: "block"}} id="schoolsRegistrationForm" className="tabcontenRadioButtonRegister">
                            <section>
                                <div style={{marginTop:"25px"}}></div>
                                <TitleDropDownList name="Masukan Data Sekolah"/>
                            </section>
                            <section id="schoolsnameforminputsection">
                                <div style={{marginTop:"25px"}}></div>
                                <FormRegisterSingle
                                    title="Nama Sekolah"
                                    onChange={(e)=>{console.log(e.target.value)}}
                                    placeholderForm="Masukan Nama Sekolah"
                                    nameInputForm="shoolsname"
                                    idInputForm="registerforminputnameschoolscontent"
                                    idErrorMessage="registererrormessageschoolnamescontent"
                                    errorMessage="Shoools Name cannot be empty !"
                                />
                            </section>
                            <section id="educationStageidSection">
                                <DropdownListFilterFour
                                    onClick={(e)=>{console.log(e.target.value)}}
                                    store={storeMobileTwo} 
                                    placeholder="Pilih Jenjang Pendidikan"
                                    title="Jenjang Pendidikan"
                                    className="jenjangpendidikandropdownclass"
                                    buttonClass="buttonclickStageregistercontent"
                                />

                            </section>
                            <section>
                                <div style={{marginTop: "25px"}}></div>
                                <RadioButtonTwo onClick={(e) => {console.log(e.target.value)}} />
                            </section>
                            <section>
                                <LineComponents 
                                    marginTop="10px"
                                    border="1.5px solid #DBDBDB"
                                />
                                <FormRegisterSingle
                                    title="ALamat"
                                    onChange={(e)=>{console.log(e.target.value)}}
                                    placeholderForm="Masukan Alamat Sekolah"
                                    nameInputForm="addressname"
                                    idInputForm="registerforminputadresscontent"
                                    idErrorMessage="registererrormessageadresscontent"
                                    errorMessage="Adress cannot be empty !"
                                />
                            </section>
                            <section>
                                <DropdownListFilterFour
                                    onClick={(e)=>{this.setState({province:e.target.value})}}
                                    store={ this.state.provinceList } 
                                    placeholder="Pilih Provinsi"
                                    title="Provinsi"
                                    className="provdropdownclass"
                                    buttonClass="citybuttonclickprovregistercontent"
                                />
                                <DropdownListFilterFour
                                    onClick={(e)=>{this.setState({city:e.target.value})}}
                                    store={this.state.province ? this.state.cityList : [{id:"",name:""}]} 
                                    placeholder="Pilih Kota / Kabupaten"
                                    title="Kota / Kabupaten"
                                    className="citydropdownclass"
                                    buttonClass="citybuttonclickcityregistercontent"
                                    onButtonClick={()=>{this.getCityName()}}
                                />
                                <DropdownListFilterFour
                                    onClick={(e)=>{this.setState({district:e.target.value})}}
                                    store={this.state.city ? this.state.districtList : [{id:"",name:""}]} 
                                    placeholder="Pilih Kecamatan"
                                    title="Kecamatan"
                                    className="subcitydropdownclass"
                                    buttonClass="citybuttonclickDistricregistercontent"
                                    onButtonClick={()=>{this.getDistrictName()}}
                                />
                                <DropdownListFilterFour
                                    onClick={(e)=>{this.setState({village:e.target.value})}}
                                    store={this.state.district ? this.state.villageList : [{id:"",name:""}]} 
                                    placeholder="Pilih Kelurahan / Desa"
                                    title="Kelurahan / Desa"
                                    className="secondsubcitydropdownclass"
                                    buttonClass="citybuttonclickVilegeregistercontent"
                                    onButtonClick={()=>{this.getVillageName()}}

                                />
                            </section>
                            <section>
                                <LineComponents 
                                    marginTop="25px"
                                    border="1.5px solid #DBDBDB"
                                />
                                <FormRegister 
                                    title="Atau Kirimkan pesan anda"
                                    onChangeName={(e)=>{console.log(e.target.value)}}
                                    onChangeEmail={(e)=>{console.log(e.target.value)}}
                                    onChangePhone={(e)=>{console.log(e.target.value)}}
                                    phonetitle="No. Telepon Sekolah"
                                    emailtitle="Email Sekolah"
                                />
                            </section>
                            <section>
                                <ButtonPrimary
                                    name="Daftarkan sekarang"
                                    id="buttonRegisterForm"
                                    background="#1A6EB2"
                                    onClick={()=>{this.handleButtonRegister()}}
                                />
                            </section>
                            <section >
                                <div style={{marginTop: "48px"}}></div>
                                    <TitleBotttomTertiary 
                                    name="Pihak Eduplus melalui email"
                                    link=""
                                    namelink=" halo@eduplus.com "
                                    nameSecondary="atau no. telp. "
                                    linkSecondary=""
                                    namelinkSecondary=" +62 999 9999 9999 "
                                    nameTertiary="akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih"
                                    fontSize="13px"
                                    textAlign="justify"/>
                            </section>

                        </div>
                        <div style={{display: "none"}} id="traiingEducationRegistrationForm" className="tabcontenRadioButtonRegister">
                            <section>
                                <div style={{marginTop:"25px"}}></div>
                                <TitleDropDownList name="Tempat Kursus"/>
                            </section>
                            <section id="schoolsnameforminputsection">
                                <div style={{marginTop:"25px"}}></div>
                                <FormRegisterSingle
                                    title="Tempat Kursus"
                                    onChange={(e)=>{console.log(e.target.value)}}
                                    placeholderForm="Masukan Nama Tempat Kursus"
                                    nameInputForm="shoolsname"
                                    idInputForm="registerforminputnamecoursecontent"
                                    idErrorMessage="registererrormessagecoursenamescontent"
                                    errorMessage="Course Sites cannot be empty !"
                                />
                            </section>
                            <section>
                                <LineComponents 
                                    marginTop="10px"
                                    border="1.5px solid #DBDBDB"
                                />
                                <FormRegisterSingle
                                    title="ALamat"
                                    onChange={(e)=>{console.log(e.target.value)}}
                                    placeholderForm="Masukan Alamat Tempat Kursus"
                                    nameInputForm="addressname"
                                    idInputForm="registerforminputadressCoursecontent"
                                    idErrorMessage="registererrormessageadressCoursecontent"
                                    errorMessage="Adress cannot be empty !"
                                />
                            </section>
                            <section>
                                <DropdownListFilterFour
                                    onClick={(e)=>{this.setState({province:e.target.value})}}
                                    store={ this.state.provinceList } 
                                    placeholder="Pilih Provinsi"
                                    title="Provinsi"
                                    className="provdropdownclass"
                                    buttonClass="citybuttonclickprovregistercontent"
                                />
                                <DropdownListFilterFour
                                    onClick={(e)=>{this.setState({city:e.target.value})}}
                                    store={this.state.province ? this.state.cityList : [{id:"",name:""}]} 
                                    placeholder="Pilih Kota / Kabupaten"
                                    title="Kota / Kabupaten"
                                    className="citydropdownclass"
                                    buttonClass="citybuttonclickcityregistercontent"
                                    onButtonClick={()=>{this.getCityName()}}
                                />
                                <DropdownListFilterFour
                                    onClick={(e)=>{this.setState({district:e.target.value})}}
                                    store={this.state.city ? this.state.districtList : [{id:"",name:""}]} 
                                    placeholder="Pilih Kecamatan"
                                    title="Kecamatan"
                                    className="subcitydropdownclass"
                                    buttonClass="citybuttonclickDistricregistercontent"
                                    onButtonClick={()=>{this.getDistrictName()}}
                                />
                                <DropdownListFilterFour
                                    onClick={(e)=>{this.setState({village:e.target.value})}}
                                    store={this.state.district ? this.state.villageList : [{id:"",name:""}]} 
                                    placeholder="Pilih Kelurahan / Desa"
                                    title="Kelurahan / Desa"
                                    className="secondsubcitydropdownclass"
                                    buttonClass="citybuttonclickVilegeregistercontent"
                                    onButtonClick={()=>{this.getVillageName()}}

                                />
                            </section>
                            <section>
                                <LineComponents 
                                    marginTop="25px"
                                    border="1.5px solid #DBDBDB"
                                />
                                <FormRegister 
                                    onChangeName={(e)=>{console.log(e.target.value)}}
                                    onChangeEmail={(e)=>{console.log(e.target.value)}}
                                    onChangePhone={(e)=>{console.log(e.target.value)}}
                                    phonetitle="No. Telepon Tempat Kursus"
                                    emailtitle="Email Tempat Kursus"                                
                                    phoneid        ="formPhoneContentRegisterId"
                                    phoneerrorid   ="errorFormPhoneContentRegisterId"
                                    emailid        ="formEmailContentRegisterId"
                                    emailerrorid   ="errorFormEmailContentRegisterId"
                                    opratorid      ="formOpratorContentRegisterId"
                                    opratorerrorid ="errorformOperatorContentRegisterId"
                                />
                            </section>
                            <section>
                                <ButtonPrimary
                                    name="Daftarkan sekarang"
                                    id="buttonRegisterForm"
                                    background="#1A6EB2"
                                    onClick={()=>{this.handleButtonRegisterCourse()}}
                                />
                            </section>
                            <section >
                                <div style={{marginTop: "48px"}}></div>
                                    <TitleBotttomTertiary 
                                    name="Pihak Eduplus melalui email"
                                    link=""
                                    namelink=" halo@eduplus.com "
                                    nameSecondary="atau no. telp. "
                                    linkSecondary=""
                                    namelinkSecondary=" +62 999 9999 9999 "
                                    nameTertiary="akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih"
                                    fontSize="13px"
                                    textAlign="justify"/>
                            </section>

                        </div>
                    </OnMobile>
                </div>
            </>
        );
    }
}

export default Register;
