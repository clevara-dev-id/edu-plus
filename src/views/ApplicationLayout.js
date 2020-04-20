import React from 'react';
// import { NavigationBar, MobileNavigationBar, Footer, MobileFooter } from '../component/base_component/'

// import { OnDesktop, OnMobileAndTablet } from '../constants/'
import Base from './Base';
// import Whatsapp from '../component/base/whatsapp'
// import { Spinner } from 'react-bootstrap'
// import LoaderSpinner from '../component/base/loader/LoaderSpinner'
import NavbarDesktop from '../components/base_components/Desktop/NavBar/Navbar'
import FooterMobile from '../components/base_components/Footer/Mobile/FooterMobile';
import { OnDesktop, OnMobile, onTablet } from '../constants/Breackpoint';

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
                    <OnDesktop>
                        <NavbarDesktop 
                            store={store}
                            onClickButton={()=>{console.log("this is button !")}}
                        />
                    </OnDesktop>
                    {/* <OnMobileAndTablet>
                        <MobileNavigationBar store={this.state.navigation} isTop={this.state.isTop} />
                    </OnMobileAndTablet> */}
                </header>

                <div id="content">
                    {this.props.children}
                </div>

                <footer>
                    <OnMobile>
                        <FooterMobile />
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
