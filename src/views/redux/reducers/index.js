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
    promoHaveError,
    promoAreLoading,
    promoPage,
} from './promo'

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
    // currentfavoriteDetail, 
    // currentfavoriteDetailSMP, 
    // currentfavoriteDetailSMA,
    getCityName,
    getProvName,
} 
from './favoritedetail';

import { 
    detailHaveError,
    detailAreLoading,
    detail, 
    schoolsCost,
    schoolsImage,
    schoolFacilities,
    schoolsExtracurricular,
    getCityDataSchools,
    schoolsStatus,
    schoolsAdressProvince, 
    schoolsAdressRegency, 
    schoolsAdressDistrict,
    schoolsRegistration,
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
    currentSearchResult,
    countSearchResult,
    stageSearchResult,
} from './searchresult';

import {
    getAccessHaveError,
    getAccessAreLoading,
    getAccess,
    IsSchoolsFound,
}from './getaccess';

import {
    getAccessAutoCompleteHaveError,
    getAccessAutoCompleteAreLoading,
    getAccessAutoComplete,

} from './getaccessautocomplete';

import{
    getaccessInputHaveError,
    getaccessInputAreLoading,
    getaccessInput,
}from './getaccessinput';

import{
    getaccessInputSendHaveError,
    getaccessInputSendAreLoading,
    getaccessInputSendData,
}from './getaccessinputsend';

import{
    contactUsSendHaveError,
    contactUsSendAreLoading,
    contactUsSendData,
}from './contactus'


export default combineReducers({
    //favorite 
    favoriteHaveError,
    favoriteAreLoading,
    favorite,
    favoriteSMP,
    favoriteSMA,
    getProvinceName,

    favoriteDetailHaveError, 
    favoriteDetailAreLoading, 
    favoriteDetail, 
    favoriteDetailSMP, 
    favoriteDetailSMA,
    // currentfavoriteDetail, 
    // currentfavoriteDetailSMP, 
    // currentfavoriteDetailSMA,
    getCityName,
    getProvName,

    homepageHaveError, 
    homepageAreLoading, 
    homepage, 
    homepageSMP, 
    homepageSMA,
    promo,

    promoHaveError,
    promoAreLoading,
    promoPage,

    detailHaveError,
    detailAreLoading,
    detail,
    schoolsCost,
    schoolsImage,
    schoolFacilities,
    schoolsExtracurricular,
    getCityDataSchools,
    schoolsStatus,
    schoolsAdressProvince, 
    schoolsAdressRegency, 
    schoolsAdressDistrict,
    schoolsRegistration,

    searchpageHaveError, 
    searchpageAreLoading,
    searchpageprov,
    searchpagecity,
    searchpagedistrict,
    stageSearchResult,

    searchResultHaveError,
    searchResultAreLoading,
    searchResult,
    currentSearchResult,
    countSearchResult,

    getAccessHaveError,
    getAccessAreLoading,
    getAccess,
    IsSchoolsFound,

    getAccessAutoCompleteHaveError,
    getAccessAutoCompleteAreLoading,
    getAccessAutoComplete,

    getaccessInputHaveError,
    getaccessInputAreLoading,
    getaccessInput,
    
    getaccessInputSendHaveError,
    getaccessInputSendAreLoading,
    getaccessInputSendData,

    contactUsSendHaveError,
    contactUsSendAreLoading,
    contactUsSendData,
});

