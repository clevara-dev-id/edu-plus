import React, { Component } from 'react';
// import { NavigationBar, MobileNavigationBar, Footer, MobileFooter } from '../component/base_component/'

// import { OnDesktop, OnMobileAndTablet } from '../constants/'
// import Base from './Base';
// import Whatsapp from '../component/base/whatsapp'
// import { Spinner } from 'react-bootstrap'
// import LoaderSpinner from '../component/base/loader/LoaderSpinner'

//Import Desktop
// import NavbarDesktop from '../components/base_components/Desktop/NavBar/Navbar';
import NavbarDesktopBlue from '../components/base_components/Desktop/NavBar/NavBarBlue';
// import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';
import { OnDesktop, OnMobile } from '../constants/Breackpoint';
import FooterDesktop from '../components/base_components/Desktop/Footers/FooterDesktop';

//Mobile Import
import HumbergerHeader from '../components/base_components/Header/Mobile/HumbergerHeader'
import FooterMobileBlue from '../components/base_components/Footer/Mobile/FooterMobileBlue';

const store = [
    {
        name :"Sekolah Favorite",
        link : "#"
    },
    {
        name :"Hubungi Kami",
        link : "#"
    },
    {
        name :"Bantuan",
        link : "#"
    }
]

export default class ApplicationLayout extends Component {
    onHandleClickButtonGetAccess =()=>{
        window.location.href="/getaccess";
    }
    render() {
        return (
            <div>
                {/* <Whatsapp /> */}
                <header>
                    <OnDesktop>
                        <NavbarDesktopBlue 
                            store={store}
                            onClickModule={(e)=>{console.log(e.target.value)}}
                        />
                    </OnDesktop>
                    <OnMobile>
                        <HumbergerHeader 
                            onClickHeader={()=>{this.onHandleClickButtonGetAccess()}}
                        />
                    </OnMobile>
                </header>

                <div id="content">
                    {this.props.children}
                </div>

                <footer>
                    <OnDesktop>
                        <FooterDesktop 
                            homeLink="/"
                            contactLink="/contactus"
                            loginLink="https://operator.edukasiplus.com/"
                            registerLink="/getaccess"
                        />
                    </OnDesktop>
                    <OnMobile>
                        <FooterMobileBlue
                            homeLink="/"
                            contactLink="/contactus"
                            loginLink="https://operator.edukasiplus.com/"
                            registerLink="/getaccess"
                        />
                    </OnMobile>
                    
                    {/* <OnDesktop>
                        <Footer
                            validated={this.state.footer.validated}
                            onSubmit={this._footer}
                            titleRef={this.footreftitle}
                            nameRef={this.footrefname}
                            emailRef={this.footrefemail}
                        />
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <MobileFooter 
                            validated={this.state.footer.validated}
                            onSubmit={this._footer}
                            titleRef={this.footreftitle}
                            nameRef={this.footrefname}
                            emailRef={this.footrefemail}
                        />
                    </OnMobileAndTablet> */}
                </footer>
            </div>
        )
    }
}
