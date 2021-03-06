import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Promo from './views/Promo';
import Favorite from './views/Favorite';
import FavoriteDetail from './views/FavoriteDetail';
import Search from './views/Search';
import SearchResult from './views/SearchResult';
import Detail from './views/Detail';
// import DetailSecondary from './views/DetailSecondary';
import ContactUs from './views/ContactUs';
import GetAccess from './views/GetAccess';
// import GetAccessDetail from './views/GetAccessDetail';
import GetAccessInput from './views/GetAccessInput';
import Login from './views/Auth/Login';
import Page404 from './views/errors/Page404';

const BaseRoute = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/promo" component={Promo} />
                <Route exact path="/favorite" component={Favorite} />
                <Route exact path="/favoritedetail" component={FavoriteDetail} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/searchresult" component={SearchResult} />
                <Route exact path="/detail" component={Detail} />
                {/* <Route exact path="/detailsecondary" component={DetailSecondary} /> */}
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/getaccess" component={GetAccess} />
                {/* <Route exact path="/getaccessdetail" component={GetAccessDetail} /> */}
                <Route exact path="/getaccessinput" component={GetAccessInput} />
                <Route exact path="/login" component={Login} />
                <Route path="" component={Page404} />
            </Switch>
        </>
    )
}

export default BaseRoute
