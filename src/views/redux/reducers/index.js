import { combineReducers } from 'redux';
import { items, itemsHaveError, itemsAreLoading } from './items';
import { 
    homepageHaveError, 
    homepageAreLoading, 
    homepage, 
    homepageSMP, 
    homepageSMA, 
    promo,
} 
from './homepage';
import {
    favoriteHaveError, 
    favoriteAreLoading, 
    favorite, 
    favoriteSMP, 
    favoriteSMA,
    // currentfavorite, 
    // currentfavoriteSMP, 
    // currentfavoriteSMA,
    getProvinceName,
} 
from './favorite';

import {
    favoriteDetailHaveError, 
    favoriteDetailAreLoading, 
    favoriteDetail, 
    favoriteDetailSMP, 
    favoriteDetailSMA,
    currentfavoriteDetail, 
    currentfavoriteDetailSMP, 
    currentfavoriteDetailSMA,
    getCityName,
    getProvName,
} 
from './favoritedetail';

import { 
    detailHaveError,
    detailAreLoading,
    detail, 
    getCityDataSchools,
} from './detail' 

import {
    searchpageHaveError, 
    searchpageAreLoading,
    searchpageprov,
    searchpagecity,
    searchpagedistrict,
} from './searchpage';

import {
    searchResultHaveError,
    searchResultAreLoading,
    searchResult,
    currentSearchResult
} from './searchresult';

export default combineReducers({
    //favorite 
    favoriteHaveError,
    favoriteAreLoading,
    favorite,
    favoriteSMP,
    favoriteSMA,
    // currentfavorite, 
    // currentfavoriteSMP, 
    // currentfavoriteSMA,
    getProvinceName,

    favoriteDetailHaveError, 
    favoriteDetailAreLoading, 
    favoriteDetail, 
    favoriteDetailSMP, 
    favoriteDetailSMA,
    currentfavoriteDetail, 
    currentfavoriteDetailSMP, 
    currentfavoriteDetailSMA,
    getCityName,
    getProvName,

    homepageHaveError, 
    homepageAreLoading, 
    homepage, 
    homepageSMP, 
    homepageSMA,
    promo,

    detailHaveError,
    detailAreLoading,
    detail,
    getCityDataSchools,

    searchpageHaveError, 
    searchpageAreLoading,
    searchpageprov,
    searchpagecity,
    searchpagedistrict,

    searchResultHaveError,
    searchResultAreLoading,
    searchResult,
    currentSearchResult,
});

