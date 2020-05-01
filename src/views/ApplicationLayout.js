import React from 'react';
// import { NavigationBar, MobileNavigationBar, Footer, MobileFooter } from '../component/base_component/'

// import { OnDesktop, OnMobileAndTablet } from '../constants/'
import Base from './Base';
// import Whatsapp from '../component/base/whatsapp'
// import { Spinner } from 'react-bootstrap'
// import LoaderSpinner from '../component/base/loader/LoaderSpinner'
import NavbarDesktop from '../components/base_components/Desktop/NavBar/Navbar'
import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

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

export default class ApplicationLayout extends Base {
    render() {
        return (
            <div>
                {/* <Whatsapp /> */}
                <header>
                    {/* <OnDesktop>
                        <NavbarDesktop 
                            store={store}
                            onClickButton={()=>{console.log("this is button !")}}
                        />
                    </OnDesktop> */}
                    <OnMobile>
                        <HumbergerHeader primaryText="test" secondaryText="test" />
                    </OnMobile>
                </header>

                <div id="content">
                    {this.props.children}
                </div>

                <footer>
                    <OnMobile>
                        <FooterMobileBlue
                            homeLink="/"
                            contactLink="contact"
                            registerLink="/register"
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
