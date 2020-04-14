import React, { Component } from 'react';

import Title from '../components/base_components/TitlePage/TitleMobile/TitlePage'
import RadioButtonThree from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonThree';
import RadioButtonFour from '../components/base_components/RadioButton/RadioButtonMobile/RadioButtonFour'
import ButtonPrimary from '../components/base_components/Button/ButtonMobile/ButtonPrimary';
import ButtonSecondary from '../components/base_components/Button/ButtonMobile/ButtonSecondary';
import AccordionAddress from '../components/base_components/Accordion/Mobile/AccordionAddress';
import BottomTitle from '../components/base_components/TitleBottom/Mobile/TitleBottom';
import DropdownListFilter from '../components/base_components/DropDwonList/DropdownMobile/DropDownListFilter';
import DropdownListFilterFour from '../components/base_components/DropDwonList/DropdownMobile/DropDownListFilterFour';
import TitleDropDownList from '../components/base_components/TitlePage/TitleMobile/TitleDropDownList';


const store = [
    {id:"001", name:'SD'},
    {id:"002", name:'Madrasah Tsanawiyah'},
    {id:"003", name:'SMP'},
    {id:"004", name:'SMA'},
    {id:"005", name:'Madrasah Aliyah'},
];

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <section>
                        <div style={{marginTop: "48px"}}></div>
                        <Title name="Mulai cari informasi sekolah disini" />
                    </section>
                    <section>
                        <div style={{marginTop: "25px"}}></div>
                        <DropdownListFilter 
                            onClick={(e)=>{console.log(e.target.value)}}
                            store={store} 
                            placeholder="Pilih Pendidikan"
                            title="Pendidikan"
                         />
                    </section>
                    <section>
                        <div style={{marginTop: "25px"}}></div>
                        <TitleDropDownList name="Pilih Alamat"/>
                        <DropdownListFilterFour
                            onClick={(e)=>{console.log(e.target.value)}}
                            store={store} 
                            placeholder="Pilih Provinsi"
                            title="Provinsi"
                            className="provdropdownclass"
                        />
                        <DropdownListFilterFour
                            onClick={(e)=>{console.log(e.target.value)}}
                            store={store} 
                            placeholder="Pilih Kota / Kabupaten"
                            title="Kota / Kabupaten"
                            className="citydropdownclass"
                         />
                         <DropdownListFilterFour
                            onClick={(e)=>{console.log(e.target.value)}}
                            store={store} 
                            placeholder="Pilih Kecamatan"
                            title="Kecamatan"
                            className="subcitydropdownclass"
                         />
                         <DropdownListFilterFour
                            onClick={(e)=>{console.log(e.target.value)}}
                            store={store} 
                            placeholder="Pilih Kelurahan / Desa"
                            title="Kelurahan / Desa"
                            className="secondsubcitydropdownclass"
                         />
                    </section>
                    {/* <section>
                        <div style={{marginTop: "25px"}}></div>
                        <AccordionAddress clickProvinsi={(e)=>{console.log(e.target.value)}} clickKecamatan={(e)=>{console.log(e.target.value)}} />
                    </section> */}
                    {/* <section>
                        <div style={{marginTop: "35px"}}></div>
                        <RadioButtonFour onClick={(e) => {console.log(e.target.value)}} />
                    </section> */}
                    <section>
                        <div style={{marginTop: "25px"}}></div>
                        <RadioButtonThree onClick={(e) => {console.log(e.target.value)}} />
                    </section>
                    <section>
                        <div style={{marginTop: "25px"}}></div>
                        <ButtonPrimary name="CARI SEKARANG" onClick={(e)=>{console.log("this is button !")}} />
                    </section>
                    <section>
                        <div style={{marginTop: "7px"}}></div>
                        <BottomTitle 
                            name="Daftarkan Sekolah atau tempat kursus anda" 
                            namelink="disini"
                            link="/register" 
                        />
                    </section>
                </div>
            </>
        );
    }
}

export default Home;