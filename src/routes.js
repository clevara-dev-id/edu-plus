import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './views/Home';
import Search from './views/Search';
import Detail from './views/Detail'
import Page404 from './views/errors/Page404';

const BaseRoute = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/detail" component={Detail} />
                <Route path="" component={Page404} />
            </Switch>
        </>
    )
}

export default BaseRoute
