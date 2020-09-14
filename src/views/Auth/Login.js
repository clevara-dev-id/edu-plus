import React, { Component } from 'react';

import TitleLogin from '../../components/base_components/TitlePage/TitleMobile/TitlePage';
import InputForm from '../../components/base_components/Auth/Mobile/InputLogin';
import ButtonPrimary from '../../components/base_components/Button/ButtonMobile/ButtonPrimary';
import SweetAlert from '../../components/base_components/SweetAllaret/mobile/SweetAlaretMobile';
import BottomTitle from '../../components/base_components/TitleBottom/Mobile/TitleBottom'

export default class Login extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {},
            storeToast :'',
            show:"false"

        }
     }
 
     handleValidation = () => {
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;
          //Email
         if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
         }
 
         if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
 
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        }  

        //Password
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Cannot be empty";
         }
 
         if(typeof fields["password"] !== "undefined"){
            let pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; // Lower case || Capital || number || min * char
            let pvalidation = pattern.test(fields["password"]);
 
            if (pvalidation===false) {
               formIsValid = false;
               errors["password"] = "Password is not valid";
             }
        }
 
        this.setState({errors: errors});
        return formIsValid;
    }
 
    handleButtonLogin(){
    
        if(this.handleValidation()){
            SweetAlert("Login Berhasil !","Anda Telah Berhasil Login", "success" );
        }else{
            SweetAlert("Login Gagal !","maaf login anda gagal cobalagi nanti", "error" );
        }
 
     }
     
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    render() {
        return (
            <>
                <section>
                    <div style={{marginTop: "40px"}}></div>
                    <TitleLogin name="Log in" />
                </section>
                <section>
                    <div style={{marginTop: "64px"}}></div>
                    <InputForm 
                        onChangeEmail={this.handleChange.bind(this, "email")}
                        emailError={this.state.errors["email"]}
                        onBlurEmail={this.handleValidation.bind(this)}
                        valueEmail={this.state.fields["email"]}
                        onChangePassword={this.handleChange.bind(this, "password")} 
                        passwordError={this.state.errors["password"]}
                        onBlurPassword={this.handleValidation.bind(this)}
                        valuePassword={this.state.fields["password"]}
                    />
                </section>
                <section>
                    <div style={{marginTop: "4px"}}></div>
                    <ButtonPrimary
                        fontSize="16px" 
                        name="LOG IN" 
                        onClick={(e)=>{this.handleButtonLogin()}} 
                    />
                </section>
                <section>
                    <div style={{marginTop: "7px"}}></div>
                    <BottomTitle 
                        name="Already have an account?" 
                        namelink="Regiter Here"
                        link="/register" 
                    />
                </section>
            </>
        );
    }
}
